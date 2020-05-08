import React from 'react';

import CreatePostForm from '../components/CreatePostForm';

function CreatePost({ userInformation }) {
  return (
    <div className='CreatePost_wrapper'>
      <div className='Return'>
        <a href='/'>{'<'} Home</a>
      </div>
      <CreatePostForm userInformation={userInformation} />
    </div>
  )
}

export default CreatePost;