import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({playerPromise}) => {
  const playerData = use(playerPromise)
  console.log(playerData);
  return (
    <div className='container mx-auto'>
      player {playerData.length}
      <AvailablePlayers playerData={playerData}></AvailablePlayers>
    </div>
  );
};

export default Players;