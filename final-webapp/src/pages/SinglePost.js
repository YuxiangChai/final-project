import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SinglePost() {
  const [postData, setPostData] = useState({});
  const { id } = useParams();
  console.log('id', id);

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
    <div className='SinglePost'>
      <h2>{postData.text}</h2>
    </div>
  )
}

export default SinglePost;