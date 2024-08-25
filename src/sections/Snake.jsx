// src/components/Snake.jsx
import React, { useEffect, useRef } from 'react';

const Snake = () => {
  const snakeRef = useRef(null);

  useEffect(() => {
    const animateSnake = () => {
      const snake = snakeRef.current;
      let positionX = 0;
      let positionY = window.innerHeight / 2; // Start in the middle of the screen vertically
      const amplitude = 30; // Amplitude of the snake's wave-like motion
      const speed = 1; // Slower speed for a more snake-like movement
      const frequency = 100; // Higher frequency for a smoother wave

      const moveSnake = () => {
        positionX += speed;
        positionY = window.innerHeight / 2 + amplitude * Math.sin(positionX / frequency);

        snake.style.transform = `translate(${positionX}px, ${positionY}px)`;

        // Reset position when snake goes off-screen
        if (positionX > window.innerWidth) {
          positionX = -100; // Start from the left again
        }

        requestAnimationFrame(moveSnake);
      };

      moveSnake();
    };

    animateSnake();
  }, []);

  return (
    <div
      ref={snakeRef}
      className="snake w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-full shadow-lg absolute"
    ></div>
  );
};

export default Snake;


