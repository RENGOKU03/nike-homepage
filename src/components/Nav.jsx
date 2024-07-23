import React from "react";

const Nav = () => {
  return (
    <div className="w-screen overflow-hidden h-20 bg-white flex my-auto justify-between">
      <img
        src="/images/brand_logo.png"
        className="h-9 my-auto ml-[10%]"
        alt="brand-logo"
      />
      <ul className="flex my-auto text-gray-800 font-medium gap-4">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="mr-[10%] bg-red-700 my-auto rounded-sm font-semibold text-white w-20 h-8">
        Login
      </button>
    </div>
  );
};

export default Nav;
