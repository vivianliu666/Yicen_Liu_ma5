import React, { useContext } from 'react';
import GridContext from './GridContext';
import './Cell.css';

export default function Cell({ cellId }) {
  const { blackOutState, toggleCellState } = useContext(GridContext);
  const isBlack = blackOutState[cellId];
  const cellClass = isBlack ? 'cell fillBackground' : 'cell';

  return (
    <div className={cellClass} onClick={() => toggleCellState(cellId)}></div>
  );
}

