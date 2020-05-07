import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PostNavi from '../components/PostNavi';
import CreatePostForm from '../components/CreatePostForm';

function Home({ userInformation, createPostWithImage }) {
  var regex = /(.*)@/;
  var name;

  if (userInformation.email){
    name = regex.exec(userInformation.email)[1];
  } else {
    name = '';
  }

  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://immense-depths-02101.herokuapp.com/`)
      .then(function (response) {
        // handle success
        console.log(response);
        setAllPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);

  console.log(allPosts)

  return (
    <div className='Home_wrapper'>
      <div className='Home'>
        <h1>Welcome! {name}</h1>
        <CreatePostForm createPostFunction={createPostWithImage} />
        {allPosts && <PostNavi allPosts={allPosts}/>}
      </div>
    </div>
  );
}

export default Home;