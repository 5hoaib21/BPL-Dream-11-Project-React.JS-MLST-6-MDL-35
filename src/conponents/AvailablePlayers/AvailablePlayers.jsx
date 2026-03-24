import React from 'react'
import { FaFlag, FaUser } from "react-icons/fa";


const AvailablePlayers = ({player}) => {
  console.log('playerData:', player);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"><FaUser/>Card Title</h2>
    <div className="flex justify-between items-center">
    <div className="flex items-center gap-1">

      <FaFlag></FaFlag>
      <p>bangladesh</p>
    </div>
      <button className='btn btn-ghost'>all rounder</button>
    </div>
    <div className="divider"></div>

      <h2>Rating</h2>

      <div className="">
        <p>bating style</p>
        <p>bowling style</p>
      </div>


    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default AvailablePlayers;