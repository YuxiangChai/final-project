import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PostNavi from '../components/PostNavi';
import Weather from '../components/Weather';

function Home({ userInformation }) {
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

  let userPosts = allPosts.filter(post => post.userId === userInformation.uid);

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let monthArray = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className='Home_wrapper'>
      <p>Don't forget to record wonderful moments!</p>
      <div className='Home'>
        {allPosts && <PostNavi allPosts={userPosts}/>}
        <div className="Welcome">
          <h1>Welcome! &nbsp;&nbsp;{name.toUpperCase()}</h1>
          <h2>Today is {monthArray[month]} {day}</h2>
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default Home;