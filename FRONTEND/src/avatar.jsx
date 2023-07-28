import React from 'react';

const Avatar = ({ name }) => {
  // Extract the first letter from the name (assuming the name is a string)
  const firstLetter = name ? name[0].toUpperCase() : '';

  // Style for the avatar
  const avatarStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#4285F4',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div style={avatarStyle}>
      {firstLetter}
    </div>
  );
};

export default Avatar;
