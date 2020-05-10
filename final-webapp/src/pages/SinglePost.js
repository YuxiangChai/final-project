import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SinglePost() {
  const [postData, setPostData] = useState({});
  const { id } = useParams();
  let monthArray = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect(() => {
    axios
      .get(`https://immense-depths-02101.herokuapp.com/post/${id}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setPostData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);

  console.log('postData', postData);
  return (
    <div className='SinglePost_wrapper'>
      <div className='Return'>
        <a href='/'>{'<'} Home</a>
      </div>
      <div className='SinglePost'>
        <div className='Text'>
          <h1>{monthArray[postData.month-1]} {postData.date} &nbsp;&nbsp;{postData.time}</h1>
          {postData.text && <p>{postData.text.replace(/<newline>/g, '\n\n')}</p>}
        </div>
        <div className='Image'>
          {postData.image === 'null' ? <div></div> : <img src={postData.image} alt='' />}
        </div>
      </div>
    </div>
  )
}

export default SinglePost;