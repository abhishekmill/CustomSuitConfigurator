import React from "react";
import "../index.css";
const Navbar = () => {
  return (
    <div
      className="fixed top-0 w-full h-20
     flex justify-center items-center bg-white drop-shadow-lg  "
    >
      <div className="font-bold font-sans ">
        {" "}
        <span className="text-green-500">Custom </span>
        Suit Configurator
      </div>
    </div>
  );
};

export default Navbar;
