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

  return (
    <div className='SinglePost_wrapper'>
      <div className='Return'>
        <a href='/'>{'<'} Home</a>
      </div>
      <div className='SinglePost'>
        <div className='Text'>
          <p>{monthArray[postData.month]} {postData.date} &nbsp;&nbsp;{postData.time}</p>
          <p>{postData.text}</p>
        </div>
        <div className='Image'>
          {postData.image === 'null' ? <div></div> : <img src={postData.image} alt='' />}
        </div>
      </div>
    </div>
  )
}

export default SinglePost;