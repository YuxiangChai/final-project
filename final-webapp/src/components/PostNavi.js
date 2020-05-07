import React from 'react';

function PostNavi({ allPosts }) {
  return (
    <div className='PostNavi'>
      {allPosts.map((post, i) => (
        <div className='Post' key={i}>
          <a href={`/post/${post.id}`}>{post.text} {post.author}</a>
        </div>
      ))}  
    </div>
  )
}

export default PostNavi;