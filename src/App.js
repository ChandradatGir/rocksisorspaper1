import React, {Component} from 'react';
import PlayerCard from './PlayerCard.js'

class Game extends Component {
  render () {
    return (
      <div className="style">
        <div>
          <PlayerCard />
          <PlayerCard />
        </div>
        <div className="winner">Put the winner here yesssss!</div>
        <button type="button">Player the Game</button>
      </div>

    )
  }

}

export default Game;
