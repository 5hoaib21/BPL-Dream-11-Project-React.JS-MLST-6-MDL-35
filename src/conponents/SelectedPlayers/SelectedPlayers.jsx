import React from "react";

import { toast } from "react-toastify";
import { LuTriangleAlert } from "react-icons/lu";
import SingleSelectedPlayer from "../SingleSelectedPlayer/SingleSelectedPlayer";

const SelectedPlayers = ({ 
  selectedPlayers, 
  setSelectedPlayers,
  coin, 
  setCoin }) => {
 


  const handleDeleteSelectedPlayer = (player) => {
// console.log( "clicked from selectedPlayers btn", selectedPlayers);
    const filteredPlayers = 
    selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName);
    // console.log(filteredPlayers,  'from filtered player');
    toast.warn('player deleted and deposit added your account')
    setSelectedPlayers(filteredPlayers)
    setCoin(coin + player.playerPrice)
  }




  return (
    <div>
      {selectedPlayers.length === 0 ? 
      <div className="mt-15">
        <div className="h-100 flex flex-col justify-center items-center p-5 m-5 shadow-2xl rounded-2xl border border-gray-300">
        <h2 className="text-4xl text-gray-400">No players selected yet</h2>
        <p className="text-gray-400 mt-5 flex justify-center items-center gap-2"><LuTriangleAlert />Go to Available tab to select players</p>
      </div> 
      </div>
      :  selectedPlayers.map((player) => {
        return (
          <SingleSelectedPlayer 
          key={player.id}
          player={player} 
          handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}></SingleSelectedPlayer>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
