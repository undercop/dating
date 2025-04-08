import React from 'react';
import './AnimatedBackground.css'; // We'll create this next

const AnimatedBackground = () => {
  return (
    <ul className="background">
      {[...Array(16)].map((_, index) => (
        <li key={index}></li>
      ))}
    </ul>
  );
};

export default AnimatedBackground;