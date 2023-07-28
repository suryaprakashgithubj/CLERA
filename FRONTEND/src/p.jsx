import React from 'react';
import Avatar from './avatar'; 
import { useSelector } from 'react-redux'
const U = () => {
    const { userDetails } = useSelector(store => store.master);

  const userName = userDetails.firstName; 

  return (
    <div>
      <Avatar name={userName} />
    </div>
  );
};

export default U;
