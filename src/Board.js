import React from 'react';
import { Square } from "./Square";

const ROWS = 3;
export class Board extends React.Component {
  renderSquare(i) {
    let winningSquare = this.props.winningLine != null && this.props.winningLine.includes(i);
    console.log(winningSquare);
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        winningSquare = {winningSquare}
         />
    );
  }

  renderRows(row) {
    let res = [];
    for (var i = 0; i < 3; i ++ ) {
      res.push(this.renderSquare(ROWS*row+i));
    }
    return <div>{res}</div>
  }

  render() {
    let rows = [];
    for (var i = 0; i < 3; i++) {
      rows.push(this.renderRows(i));
    }
    return (
      <div>{rows}</div>
    )
  }
}
