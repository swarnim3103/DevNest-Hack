import React from 'react';
import Snake from '../sections/Snake.jsx';
const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-customGreen  to-customGreen4 h-screen flex justify-center items-center flex-col">
    <hr className="border-green-950 ml-20"/>
    <h1 className="text-8xl p-10 pb-24 drop-shadow-md mt-20">SnakeVoyage</h1>
    <div className="flex flex-1 justify-center">
      <p className="text-4xl pt-10 pb-20 md:pb-10 drop-shadow-md text-center text-customGreen3 pl-20 font-bold mr-10">
      Travel the World, One Snake at a Time
      </p>
    </div>
    <div className="relative w-screen h-1/2 bg-gray-900 overflow-hidden">
      <Snake />
    </div>
  </div>
  );
};

export default Hero;