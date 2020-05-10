const express = require('express');
const firebase = require("firebase");

const router = express.Router();

const db = firebase.firestore();
const posts = db.collection('posts');

router.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const queryParams = req.query;

  posts
    .doc(queryParams.id)
    .set(queryParams)
    .then(function(doc) {
      res.send("Submission Successful");
    }).catch(function(error) {
      res.send(`Error Submitting: ${error.toString}`)
    });
});

module.exports = router;