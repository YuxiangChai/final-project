import React from 'react';

function PostNavi({ allPosts }) {

  allPosts.sort(function(a, b) {
    let aMonth = a.month;
    let bMonth = b.month;
    let aDay = a.date;
    let bDay = b.date;
    let aTime = a.time;
    let bTime = b.time;

    if (aMonth !== bMonth) {
      return (aMonth < bMonth) ? 1 : -1;
    } else {
      if (aDay !== bDay) {
        return (aDay < bDay) ? 1 : -1;
      } else {
        let aHour = aTime.slice(0, 2);
        let aMinute = aTime.slice(-2);
        let bHour = bTime.slice(0, 2);
        let bMinute = bTime.slice(-2);
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
    <div className='PostNavi'>
      <div className='TopRow'>
        <a className='TopRowText' href={`/create`}>+ Create New Post</a>
      </div>
      {allPosts.map((post, i) => (
        <a className='Row' href={`/post/${post.id}`} key={i}>{post.text.replace(/<newline>/g, '\n')}</a>
      ))}  
    </div>
  )
}

export default PostNavi;