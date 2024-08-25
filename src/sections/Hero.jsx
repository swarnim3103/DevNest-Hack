import React from 'react';
import Snake from '../sections/Snake.jsx';
const Hero = () => {
  const scrollToSection = () => {
    const section = document.getElementById('scroll-target');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="bg-gradient-to-b from-customGreen  to-customGreen4 h-3/4 flex justify-center items-center flex-col">
      <div className="w-full relative">
<Snake />
</div>
    <hr className="border-green-950 ml-20"/>
    <h1 className="text-8xl p-10 pb-24 drop-shadow-md mt-20 text-customGreen2 underline">SnakeVoyage</h1>
    <div className="flex flex-1 justify-center">
      <p className="text-4xl pt-10 pb-20 md:pb-10 drop-shadow-md text-center text-customGreen3 pl-20 font-bold mr-10">
      Travel the World, One Snake at a Time
      </p>
    </div>
    <div className="mb-20 mt-20 text-xl font-bold mr-20 text-green-950">
    <p >Scroll Down To Know More</p>
    <div className="flex justify-center mt-10">
        <img 
         onClick={scrollToSection}
        src="src\assets\icons\arrow-down-svgrepo-com.svg"/>
      </div>
    </div>
    </div>
  );
};

export default Hero;