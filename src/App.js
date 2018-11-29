import React, {Component} from 'react';
import PlayerCard from './PlayerCard.js'

class Game extends Component {
  constructor (){
    super();
    this.signs = ['rock', 'sissors', 'rock']
    this.state = {
      playerOne: 'rock',
      playerTwo: 'sissors',
    }

  }

  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random()*3)],
      playerTwo: this.signs[Math.floor(Math.random()*3)],
    })
  }

  decideWinner = () => {
    const playerOne = this.state.playerOne;
    const playerTwo = this.state.playerOne;

    if(playerOne === playerTwo){
      return "It's a Tie!"
    }
    else if((playerOne === 'rock' && playerTwo === 'sissors') ||
    (playerOne === 'paper' && playerTwo === 'rock') ||
    (playerOne === 'sissors' && playerTwo === 'paper')){
      return "Player 1 Winner!"
    }else{
      return "Plater 2 Wins!"
    }
  }

  render () {
    return (
      <div className="style">
        <div>
          <PlayerCard sign={this.state.playerOne} />
          <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className="winner">{this.decideWinner()}</div>
        <button type="button" onClick={this.playGame}>Player the Game</button>
      </div>

    )
  }

}

export default Game;
