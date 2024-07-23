import React from "react";

const Home = () => {
  return (
    <div className="flex ml-[10%] gap-3 mt-[1%] overflow-hidden">
      <div className="w-[60%] ">
        <h1 className="text-6xl font-extrabold xl:text-8xl md:text-7xl 2xl:text-9xl ">
          YOUR FEET <br /> DESERVE <br />
          THE BEST
        </h1>
        <p className="text-gray-700 font-medium my-[5%] ">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="flex gap-10">
          <button className="w-36 bg-red-700 text-white h-9 font-medium px-1 text-2xl">
            Shop Now
          </button>
          <button className="w-36 bg-gray-300 text-gray-700 border-gray-700 border-2 h-9 font-medium px-1 text-2xl">
            Category
          </button>
        </div>
        <p className="mt-[10%] md:mt-[3%] text-gray-600">Also Available On</p>
        <div className="flex gap-7 mt-[5%] md:mt-[3%] h-7 ">
          <img src="/images/flipkart.png" alt="flipkart-logo" />
          <img className="pt-1" src="/images/amazon.png" alt="amazon-logo" />
        </div>
      </div>
      <div className="w-[40%]">
        <img className="h-[80%]" src="/images/hero-image.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
