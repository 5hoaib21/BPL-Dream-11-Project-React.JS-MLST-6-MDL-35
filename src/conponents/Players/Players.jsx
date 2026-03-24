import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise,setCoin, coin }) => {
  const playerData = use(playerPromise);

  const [switchTab, setSwitchTab] = useState("available");

  return (
    <div className="container mx-auto my-15">
      <div className="flex justify-between items-center mb-5">
        {switchTab === 'available' ?  <h2 className="font-bold text-2xl">Available Players</h2> : 
        <h2 className="font-bold text-2xl">Selected Players (2/12)</h2>}

        <div className="">
          <button onClick={()=> setSwitchTab("available")} className={`btn ${switchTab === 'available' ?  'bg-[#e7fe29]' : ' '} rounded-l-xl rounded-r-none`}>
            Available
          </button>
          <button onClick={()=> setSwitchTab("selected")} className={`btn ${switchTab === 'selected' ?  'bg-[#e7fe29]' : ' '} rounded-r-xl rounded-l-none`}>Selected (0)</button>
        </div>
      </div>


      {switchTab === 'available' ? <AvailablePlayers playerData={playerData} setCoin={setCoin} coin={coin}></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>}
    </div>
  );
};

export default Players;
