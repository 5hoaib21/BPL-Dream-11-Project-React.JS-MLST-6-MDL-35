import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playerPromise}) => {
  const player = use(playerPromise)
  console.log(player);
  return (
    <div className='container mx-auto'>
      player {player.length}
      <AvailablePlayers playerData={player}></AvailablePlayers>
    </div>
  );
};

export default Players;