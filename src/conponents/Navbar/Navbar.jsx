import React from 'react';
import dollerImg from '../../assets/dollar.png';
import navImg from '../../assets/logo.png';

const Navbar = ({coin}) => {
  return (
   <div className="navbar container mx-auto">
        <div className="flex-1">
          <a className=" text-xl"><img className="w-15 h-15" src={navImg} alt="" /></a>
        </div>
        <div className="">
        <button className='flex justify-center font-bold items-center gap-1.5'>
        {coin} Coins
          <img src={dollerImg} alt="" />
        </button>
        </div>
      </div>
  );
};

export default Navbar;