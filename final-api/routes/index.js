const express = require('express');
const firebase = require("firebase");

const router = express.Router();

const db = firebase.firestore();
const posts = db.collection('posts');

router.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const postsArray = [];

  posts
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        postsArray.push(doc.data());
      });
      return res.send(postsArray);
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;