import React, { useState } from "react";
import { FaFlag, FaUser } from "react-icons/fa";

const SinglePlayer = ({ player, setCoin, coin }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {



    let newCoin = coin - player.playerPrice;
if(newCoin >= 0 ){

  setCoin(coin - player.playerPrice);
}else{
  alert('not enough coin to purchase this player');
  return;
}

    alert(`
      ${(player.playerName, player.playerPrice)} 
      is selected
      `);
    setIsSelected(true);




  };

  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img
          className="w-full h-80 object-contain"
          src={player.playerImage}
          alt={player.playerName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser />
          {player.playerName}
        </h2>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <FaFlag></FaFlag>
            <p>{player.playerCountry}</p>
          </div>
          <button className="btn btn-soft btn-sm btn-disabled font-bold">
            {player.playerRole}
          </button>
        </div>
        <div className="divider"></div>

        <h2 className="font-bold">Rating ({player.playerRating})</h2>

        <div className="flex justify-center items-center font-bold">
          <p>{player.playerBattingStyle}</p>
          <p className="text-right">{player.playerBowlingStyle}</p>
        </div>

        <div className="card-actions justify-between items-center font-bold">
          <p>Price: $-{player.playerPrice}</p>
          <button
            onClick={handleChoosePlayer}
            disabled={isSelected}
            className="btn btn-sm"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
