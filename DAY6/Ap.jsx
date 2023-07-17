import React from 'react';
import ProfileCard from './profile';
// import t2 from './images/t2.jpg';

const Ap = () => {
  const profile = {
    name: 'Surya',
    title: 'Electrician',
  };

  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  return (
    <div>
      <center><h1 style={{fontFamily:"sans-serif" , paddingTop:"2.5%"}}>Service Providers</h1></center>
      <ProfileCard profile={profile} description={description} />
    </div>
  );
};

export default Ap;
