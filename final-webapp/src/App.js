import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import axios from 'axios';

import './App.css';

import Login from './pages/Login';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Header from './components/Header';
import NotLoggedIn from './components/NotLoggedIn';
import SinglePost from './pages/SinglePost';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userInformation, setUserInformation] = useState({})
  
  const firebaseConfig = {
    apiKey: "AIzaSyDJKesY43rTNyFmZqDU788MJsfrLAYe1FU",
    authDomain: "final-project-70f53.firebaseapp.com",
    databaseURL: "https://final-project-70f53.firebaseio.com",
    projectId: "final-project-70f53",
    storageBucket: "final-project-70f53.appspot.com",
    messagingSenderId: "590590698142",
    appId: "1:590590698142:web:52b36c4a9f74459e5e518f"
  };

  useEffect(() => {
    if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function(e) {
        console.log('AUTH ERROR', e);
      })
  }, [firebaseConfig]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        setUserInformation(user)
        setLoggedIn(true);
      } else {
        setUserInformation({})
        setLoggedIn(false);
      }
      setLoading(false);
    })
  }, []);

  function LoginFunction(e) {
    e.preventDefault();
    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response) {
        console.log('LOGIN RESPONSE', response);
        setLoggedIn(true);
      })
      .catch(function(e) {
        console.log('LOGIN ERROR', e);
      });
  }

  function LogoutFunction() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setLoggedIn(false);
      })
      .catch(function(e) {
        console.log('Logout Error:', e);
      })
  }

  function CreateAccountFunction(e) {
    e.preventDefault();
    console.log('form payload', e);
    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(response) {
        console.log('VALID ACCOUNT CREATE', response);
        setLoggedIn(true);
      })
      .catch(function(e) {
        console.log('CREATE ACCOUNT ERROR', e);
      });
  }

  function createPostWithImage(e) {
    e.preventDefault();
    const storageRef = firebase.storage().ref();
    const fileReference = e.currentTarget.postImage.files[0];
    const uploadTask = storageRef
      .child(`${fileReference.name}`)
      .put(fileReference);

    let text = e.currentTarget.postText.value;
    let idFromText = text.replace(/\s+/g, '-').toLowerCase().substr(0, 16);
    let userId = userInformation.uid;
    
    uploadTask.on(
      'state_changed', 
      (snapshot) => {}, 
      (error) => {console.log(error)}, 
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          axios
            .get(`https://immense-depths-02101.herokuapp.com/create?text=${text}&id=${idFromText}&userId=${userId}&image=${downloadURL}`)
            .then(function (response) {
              // handle success
              console.log(response);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
        })
      });
  }

  if (loading) return null;

  var regex = /(.*)@/;
  var name;

  if (userInformation.email){
    name = regex.exec(userInformation.email)[1];
  } else {
    name = '';
  }

  return (
    <div className="App">
      <Header LogoutFunction={LogoutFunction} isLoggedIn={loggedIn} userInformation={name}/>
      <Router>
        <Route exact path='/'>
          {loggedIn ? <Home userInformation={userInformation} createPostWithImage={createPostWithImage} /> : <NotLoggedIn />}
        </Route>
        <Route exact path='/post/:id'>
          {loggedIn ? <SinglePost /> : <NotLoggedIn />}
        </Route>
        <Route exact path='/login'>
          {!loggedIn ? <Login LoginFunction={LoginFunction}/> : <Redirect to='/' />}
        </Route>
        <Route exact path='/create-account'>
          {!loggedIn ? <CreateAccount CreateAccountFunction={CreateAccountFunction}/> : <Redirect to='/' />}
        </Route>
      </Router>
      
    </div>
  );
}

export default App;