import React from "react";
import amazon from '../assets/amazon.png'
import daraz from '../assets/daraz.png'
import hero from '../assets/hero.png'
const Header = () => {
  return (
    <>
      <section className="w-full " id="home">
        <div className="container mt-24 flex justify-center xl:ml-4 sm:ml-8 items-center">
          <div className="left w-[50%] ">
            <div className="heading">
              <h1 className="font-sans font-extrabold leading-[60px] md:leading-[75px] -tracking-tight text-[40px] sm:text-[80px] line font-">
                YOUR FEET <br /> DESERVE <br /> THE BEST
              </h1>
            </div>
            <div className="para max-w-[40%] mt-8">
              <p className="text-[15px] text-slate-700">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                OUR SHOES.
              </p>
            </div>
            <div className="buttons mt-8">
            <button className='font-sans font-medium bg-red-600 px-4 py-[5px] rounded-[2px] text-white'>Shop Now</button>
            <button className='font-sans font-medium border border-1 border-black px-4 py-[5px] rounded-[2px] mx-8 '>Category</button>
            </div>
            <div className="mt-8">
                <h4 className="font-normal text-slate-500">Also Available On</h4>
                <div className="images flex gap-4 mt-4">
                    <img src={amazon}   alt="" />
                    <img src={daraz}   alt="" />
                </div>
            </div>
          </div>
          <div className="md:ml-[-15px]">
            <img src={hero} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
