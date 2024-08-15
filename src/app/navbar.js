import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <section>
      <div className="flex">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6" />
        <div className="flex justify-center flex-grow">
          <div className="space-x-4 mr-20">
            <a href="#">US</a>
            <a href="#">International</a>
            <a href="#">Canada</a>
            <a href="#">Espanol</a>
          </div>
        </div>
        <div className="space-x-2">
          <button>Subscribe</button>
          <button>LOG IN</button>
        </div>
      </div>

      <div className="grid pt-10">
        {currentDate}
        <p>Today's Paper</p>
      </div>
      <img
        src="/NewYorkTimes.svg.png"
        className="flex justify-center h-16 mx-auto relative right-10 -mt-16"
      ></img>
      <div className="flex justify-center pt-6 space-x-8 pt-4">
        <a href="#">US</a>
        <a href="#">World</a>
        <a href="#">Business</a>
        <a href="#">Lifestyle</a>
        <a href="#">Opinion</a>
        <a href="#">Entertainment</a>
        <a href="#">Audio</a>
        <a href="#">Games</a>
      </div>
      <hr className="h-1 border-slate-950"></hr>
      <hr className="h-1 border-slate-950"></hr>
    </section>
  );
};

export default Navbar;
