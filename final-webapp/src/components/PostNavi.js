import React from 'react';

function PostNavi({ allPosts, userName }) {

  allPosts.sort(function(a, b) {
    let aMonth = parseInt(a.month);
    let bMonth = parseInt(b.month);
    let aDay = parseInt(a.date);
    let bDay = parseInt(b.date);
    let aTime = a.time;
    let bTime = b.time;

    if (aMonth !== bMonth) {
      return (aMonth < bMonth) ? 1 : -1;
    } else {
      if (aDay !== bDay) {
        return (aDay < bDay) ? 1 : -1;
      } else {
        let aHour = parseInt(aTime.slice(0, 2));
        let aMinute = parseInt(aTime.slice(-2));
        let bHour = parseInt(bTime.slice(0, 2));
        let bMinute = parseInt(bTime.slice(-2));
        if (aHour !== bHour) {
          return (aHour < bHour) ? 1 : -1;
        } else {
          return (aMinute < bMinute) ? 1 : -1;
        }
      }
    }
  })

  console.log(allPosts);
  return (
    <div>
      <div className='TopRow'>
        <a className='TopRowText' href={`/create`}>+ Create New Post</a>
      </div>
      <div  className='PostNavi'>
        {allPosts.map((post, i) => (
          <div className='Row' key={i}>
            <a className={post.userName === userName ? `UserPost` : `NotUserPost`} href={`/post/${post.id}`}>
              {post.userName === userName ? `👤` : ``}&nbsp;
              {post.text.replace(/<newline>/g, '\n').substr(0, 15)} 
              {post.text.replace(/<newline>/g, '\n').length > 15 ? `...` : ``}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostNavi;