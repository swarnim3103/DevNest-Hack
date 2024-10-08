import { Link } from "react-router-dom";
import hamburger from "../assets/icons/hamburger.svg";
import { useState } from "react";
import { navlinks } from "../constants/index.js";

// eslint-disable-next-line react/prop-types
function Nav({ page }) {
  return (
    <header className="py-6 z-10 w-full px-4 bg-customGreen">
      <nav className="flex justify-between items-center mx-auto">
        <div className="ml-5 cursor-pointer">
          <Link to="/">
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
             <img src="src\assets\icons\snake_logo.svg"/>
              <span className="ml-3 text-xl">SnakeVoyage</span>
            </div>
          </Link>
        </div>
        <ul
          className="flex gap-16 text-xl font-sans overflow-hidden"
          id="nav-items"
        >
          {navlinks.map((obj) => {
            if (obj.pageName === page) {
              return obj.links.map((obj, index) => {
                if (obj.link[0] === "#") {
                  return (
                    <li key={index} className="cursor-pointer">
                      <a href={obj.link}>{obj.title}</a>
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="cursor-pointer">
                      <Link to={obj.link}>{obj.title}</Link>
                    </li>
                  );
                }
              });
            }
          })}
        </ul>
        <div className="flex gap-5 mr-5 text-xl cursor-pointer overflow-hidden">
        {page === "home" && <Link to="/globe" className="underline font-bold">Get Started with Globe</Link>}
          
        </div>
       
      </nav>
    </header>
  );
}

export default Nav;