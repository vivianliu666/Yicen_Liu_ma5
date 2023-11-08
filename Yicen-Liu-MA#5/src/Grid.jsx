import React, { useState } from 'react';
import Cell from './Cell';
import Header from './Header';
import './Grid.css'; // Assuming you will create a Grid.css for Grid styles

export default function Grid() {
  const [blackOutState, setBlackOutState] = useState([false, false, false, false]);

  const reverseIsBlackedOut = (index) => {
    setBlackOutState(currentState =>
      currentState.map((state, i) => (i === index ? !state : state)),
    );
  };

  const count = blackOutState.filter(Boolean).length;

  return (
    <div>
      <Header count={count} />
      <div className="grid-container">
        {blackOutState.map((isBlack, index) => (
          <Cell
            key={index}
            isBlack={isBlack}
            onClick={() => reverseIsBlackedOut(index)}
          />
        ))}
      </div>
    </div>
  );
}
