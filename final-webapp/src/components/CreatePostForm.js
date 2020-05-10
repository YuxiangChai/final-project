import React, { useState } from 'react';
import axios from 'axios';
const firebase = require("firebase");

function CreatePostForm({ userInformation }) {

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth()+1;
  let time = ('0'+date.getHours()).slice(-2) + ':' + ('0'+date.getMinutes()).slice(-2);

  var regex = /(.*)@/;
  var name;

  if (userInformation.email){
    name = regex.exec(userInformation.email)[1];
  } else {
    name = '';
  }

  function CreatePostWithImage(e) {
    e.preventDefault();
    
    let storageRef = firebase.storage().ref();
    let fileReference = e.currentTarget.postImage.files[0];

    let text = e.currentTarget.postText.value.replace(/\n/g, '<newline>');
    let idFromText = text.replace(/\s+/g, '-').toLowerCase().substr(0, 16);
    let userId = userInformation.uid;

    if (fileReference) {
      const uploadTask = storageRef
        .child(`${fileReference.name}`)
        .put(fileReference);
      
      uploadTask.on(
        'state_changed', 
        (snapshot) => {}, 
        (error) => {console.log(error)}, 
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            axios
              .get(`https://immense-depths-02101.herokuapp.com/create?text=${text}&id=${idFromText}&userId=${userId}&image=${downloadURL}&month=${month}&date=${day}&time=${time}&userName=${name}`)
              .then(function (response) {
                // handle success
                console.log(response);
                redirectToHome(true);
              })
              .catch(function (error) {
                // handle error
                console.log(error);
                redirectToHome(false);
              });
          })
        });
    } else {
      axios
        .get(`https://immense-depths-02101.herokuapp.com/create?text=${text}&id=${idFromText}&userId=${userId}&image=null&month=${month}&date=${day}&time=${time}&userName=${name}`)
        .then(function (response) {
          // handle success
          console.log(response);
          redirectToHome(true);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          redirectToHome(false);
        });
    }
    
  }

  function redirectToHome(e) {
    let confirm;
    if (e) {
      confirm = window.confirm('Submission succeeded. Do you want to go back to HOME?');
    } else {
      confirm = window.confirm('Submission failed. Do you want to go back to HOME?');
    }
    if (confirm) {
      window.location.href = '/';
    } else {
      window.location.href = '/create';
    }
  }

  return (
    <div className='CreatePostForm_wrapper'>
      <form className='Form CreatePostForm' onSubmit={(e) => CreatePostWithImage(e)}>
        <label htmlFor='postText'>Text</label>
        <textarea name='postText' cols='40' row='5'></textarea>

        <label htmlFor='postImage'>Image</label>
        <input type='file' name='postImage' accept='image/*' />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreatePostForm;