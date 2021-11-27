import React from 'react';
import { Square } from "./Square";

export class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)} />
    );
  }

  renderRows(r) {
    let res = [];
    for (var i = 0; i < 3; i ++ ) {
      res.push(this.renderSquare(3*r+i));
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
    // return (
    //   <div>
    //     <div className="board-row">
    //       {this.renderSquare(0)}
    //       {this.renderSquare(1)}
    //       {this.renderSquare(2)}
    //     </div>
    //     <div className="board-row">
    //       {this.renderSquare(3)}
    //       {this.renderSquare(4)}
    //       {this.renderSquare(5)}
    //     </div>
    //     <div className="board-row">
    //       {this.renderSquare(6)}
    //       {this.renderSquare(7)}
    //       {this.renderSquare(8)}
    //     </div>
    //   </div>
    // );
  }
}
