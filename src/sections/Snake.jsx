// src/components/Snake.jsx
import React, { useEffect, useRef } from 'react';

const Snake = () => {
  const snakeRef = useRef([]);
  const segmentCount = 300; // Number of segments in the snake
  const segmentSize = 300; // Size of each snake segment
  const amplitude = 70; // Amplitude of the wave motion
  const speed = 3; // Speed of the snake
  const frequency = 100; // Frequency for the wave motion

  useEffect(() => {
    const animateSnake = () => {
      let positionX = 0;
      let positions = Array(segmentCount).fill({ x: 0, y: 0 }); // Initialize positions for each segment

      const moveSnake = () => {
        positionX += speed;

        // Calculate the new head position
        const headX = positionX;
        const headY = window.innerHeight / 2 + amplitude * Math.sin(positionX / frequency);

        // Update positions array with the new head position
        positions = [{ x: headX, y: headY }, ...positions.slice(0, -1)];

        // Apply the positions to each segment
        snakeRef.current.forEach((segment, index) => {
          if (segment) {
            const { x, y } = positions[index];
            segment.style.transform = `translate(${x}px, ${y}px)`;
          }
        });

        // Reset position when the snake goes off-screen
        if (positionX > window.innerWidth) {
          positionX = -segmentSize * 4; // Start from the left again
        }

        requestAnimationFrame(moveSnake);
      };

      moveSnake();
    };

    animateSnake();
  }, [segmentCount, segmentSize, amplitude, speed, frequency]);

  return (
    <div className="relative">
      {Array.from({ length: segmentCount }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (snakeRef.current[index] = el)}
          className="w-4 h-4 bg-gradient-to-r from-green-600 to-green-800 rounded-full shadow-md absolute"
        />
      ))}
    </div>
  );
};

export default Snake;
