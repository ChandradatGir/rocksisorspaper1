import React from 'react';

const PlayerCard = (props) => {
  console.log(props)

  return(
    <div className="player-card">{props.sign}</div>
  )
}

export default PlayerCard;
