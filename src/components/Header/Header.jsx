import React from "react";
import HeaderImage from "../../assets/header.jpg";
const Header = () => {
  return (
    <>
      <div className="flex flex-col justify-around items-center  mt-10">
        <h1 className="font bold text-xl text-blue-500">Shopping List</h1>
        <div className="h-auto w-1/2 relative">
          <img className="w-full h-auto relative z-0" src={HeaderImage} />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
