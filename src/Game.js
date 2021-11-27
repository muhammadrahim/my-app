import React from 'react';
import { Board } from './Board';
import { calculateWinner } from "./calculateWinner";

export class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
    };
  }


  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    let latest = i;

    if (squares[i] == null && !calculateWinner(squares)) {
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState(
        {
          history: history.concat([{ squares, latest }]),
          xIsNext: !this.state.xIsNext,
          stepNumber: history.length,
        }
      );
    }
    history.push(squares);
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) == 0,
    });
  }

  calcRow(i) {
    if (i <= 2) {
      return 0;
    } else if (i <= 5) {
      return 1; 
    } else {
      return 2;
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    const moves = this.generateHistory(history);

    if (!winner) {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    } else {
      status = 'Winner: ' + winner;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i) } />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  generateHistory(history) {
    const ACTIVE = { fontWeight: 'bold'};
    const INACTIVE = { fontWeight: 'normal'};
    return history.map((step, move) => {
      let coord = this.calcRow(step.latest) + ',' + (step.latest%3);
      const desc = move
        ? 'go to move #' + move + ' ' + coord
        : 'go to game start';
      return (
        <li>
          <button key={move} style={this.state.stepNumber === move ? ACTIVE : INACTIVE} onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
  }
}
