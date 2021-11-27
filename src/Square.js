import React from 'react';


export function Square(props) {
  const style = { color: 'red'};
  return (
    <button
      className="square"
      onClick={() => props.onClick()}
      style= { props.winningSquare ? style : null }
    >
      {props.value}
    </button>
  );
}
