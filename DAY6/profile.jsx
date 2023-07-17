import React, { useState } from 'react';
import './profile.css';

const ProfileCard = ({ profile, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipClass, setFlipClass] = useState('');

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setFlipClass(isFlipped ? '' : 'flipped');
  };

  return (
    <div className={`card ${flipClass}`} onClick={handleFlip}>
      <div className="card-front">
        <h2 style={{fontFamily:"sans-serif"}}>Surya</h2>
        <p>Electrician</p>
      </div>
      <div className="card-back">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
