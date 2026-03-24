import React from "react";


import SinglePlayer from "../SinglePlayer/SinglePlayer";

const AvailablePlayers = ({ playerData }) => {

  return (
    <div>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {playerData.map((player) => {
         
          return (
            <SinglePlayer key={player.id} player={player}></SinglePlayer>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
