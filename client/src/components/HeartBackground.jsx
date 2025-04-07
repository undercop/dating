import React from 'react';
import './HeartBackground.css';

const HeartSVG = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path 
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
    />
  </svg>
);

const HeartBackground = () => {
  const hearts = [
    { delay: 0, left: '90vw', top: '64vh', color: '#8b0000' },
    { delay: 3, left: '55vw', top: '29vh', color: '#600000' },
    { delay: 6, left: '68vw', top: '80vh', color: '#600000' },
    { delay: 9, left: '73vw', top: '23vh', color: '#8b0000' },
    { delay: 12, left: '40vw', top: '91vh', color: '#600000' },
    { delay: 15, left: '12vw', top: '10vh', color: '#600000' },
    { delay: 18, left: '47vw', top: '84vh', color: '#8b0000' },
    { delay: 21, left: '11vw', top: '26vh', color: '#600000' },
    { delay: 24, left: '0vw', top: '39vh', color: '#600000' },
    { delay: 27, left: '88vw', top: '48vh', color: '#600000' },
    { delay: 30, left: '60vw', top: '56vh', color: '#8b0000' },
    { delay: 33, left: '45vw', top: '63vh', color: '#8b0000' },
    { delay: 36, left: '96vw', top: '72vh', color: '#600000' },
    { delay: 39, left: '27vw', top: '45vh', color: '#8b0000' },
    { delay: 42, left: '18vw', top: '99vh', color: '#600000' },
    { delay: 45, left: '29vw', top: '4vh', color: '#600000' },
    { delay: 48, left: '80vw', top: '15vh', color: '#8b0000' }
  ];

  return (
    <div className="background">
      {hearts.map((heart, index) => (
        <div 
          key={index}
          className="heart"
          style={{
            left: heart.left,
            top: heart.top,
            animationDelay: `${heart.delay}s`,
            color: heart.color
          }}
        >
          <HeartSVG color={heart.color} />
        </div>
      ))}
    </div>
  );
};

export default HeartBackground;