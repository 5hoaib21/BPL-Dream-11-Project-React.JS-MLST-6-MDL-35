import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const SingleSelectedPlayer = ({player, handleDeleteSelectedPlayer}) => {
  return (
    <div className=" bg-base-100 shadow-sm flex justify-center items-center p-5 m-5 rounded-2xl border border-gray-300">
            <figure>
              <img 
                className="w-70 h-70 object-contain rounded-2xl"
                src={player.playerImage}
                alt={player.playerName}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-2xl"><FaRegUser/>{player.playerName}</h2>
              <p>
               <span className="font-bold text-lg">Role:</span> {player.playerRole}
              </p>
              <p><span className="font-bold text-lg">Rating:</span> ({player.playerRating})</p>
              <div className="card-actions justify-end">
              </div>
            </div>
                <button
                onClick={()=> handleDeleteSelectedPlayer(player)} 
                className="btn btn-ghost text-2xl rounded-full">
                <AiFillDelete />
                </button>
          </div>
  );
};

export default SingleSelectedPlayer;