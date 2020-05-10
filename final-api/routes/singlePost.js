const express = require('express');
const firebase = require("firebase");

const router = express.Router();

const db = firebase.firestore();
const posts = db.collection('posts');

router.get('/:id', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const queryID = req.params.id;

  posts
    .doc(queryID)
    .get()
    .then(function(doc) {
      if (doc.exists) {
        return res.send(doc.data());
      } else {
        return res.send('No such Document.');
      }
    })
    .catch(function(error) {
      return res.send(error);
    });
});

module.exports = router;