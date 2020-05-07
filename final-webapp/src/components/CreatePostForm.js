import React from 'react';

function CreatePostForm({ createPostFunction }) {
  return (
    <div className='CreatePostForm_wrapper'>
      <form className='Form CreatePostForm' onSubmit={(e) => createPostFunction(e)} >
        <label htmlFor='postText'>Text</label>
        <input type='text' name='postText' />

        <label htmlFor='postImage'>Image</label>
        <input type='file' name='postImage' accept='image/*' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreatePostForm;