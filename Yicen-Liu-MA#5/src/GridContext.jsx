import React, { createContext, useState } from 'react';

const GridContext = createContext({
  blackOutState: [false, false, false, false],
  toggleCellState: () => {},
  activeCellsCount: 0,
});

export const GridProvider = ({ children }) => {
  const [blackOutState, setBlackOutState] = useState([false, false, false, false]);

  const toggleCellState = (cellIndex) => {
    setBlackOutState(currentState =>
      currentState.map((state, index) => (index === cellIndex ? !state : state)),
    );
  };

  const activeCellsCount = blackOutState.filter(Boolean).length;

  const contextValue = {
    blackOutState,
    toggleCellState,
    activeCellsCount,
  };

  return (
    <GridContext.Provider value={contextValue}>
      {children}
    </GridContext.Provider>
  );
};

export default GridContext;
