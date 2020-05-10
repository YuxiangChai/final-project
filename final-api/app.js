const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyDJKesY43rTNyFmZqDU788MJsfrLAYe1FU",
  authDomain: "final-project-70f53.firebaseapp.com",
  databaseURL: "https://final-project-70f53.firebaseio.com",
  projectId: "final-project-70f53",
  storageBucket: "final-project-70f53.appspot.com",
  messagingSenderId: "590590698142",
  appId: "1:590590698142:web:52b36c4a9f74459e5e518f"
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index.js');
const singlePostRoute = require('./routes/singlePost.js');
const createPostRoute = require('./routes/createPost.js');

app.use('/', indexRoute);
app.use('/post', singlePostRoute);
app.use('/create', createPostRoute);

app.listen(port, () => console.log("Hello World Running"));