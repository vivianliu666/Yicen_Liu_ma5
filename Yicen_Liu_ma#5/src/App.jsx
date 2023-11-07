import React, { useState, createContext, useContext } from 'react';
import './App.css';

// Create a Context for the grid count state
const CountContext = createContext({
  cells: [],
  toggle: () => {},
});

// Define the CountProvider component
const CountProvider = ({ children }) => {
  const [cells, setCells] = useState([false, false, false, false]);

  const toggle = (index) => {
    setCells((currentCells) =>
      currentCells.map((cell, i) => (i === index ? !cell : cell))
    );
  };

  return (
    <CountContext.Provider value={{ cells, toggle }}>
      {children}
    </CountContext.Provider>
  );
};

// Define the Cell component
const Cell = ({ id }) => {
  const { cells, toggle } = useContext(CountContext);
  const isOn = cells[id];
  const cellClass = `cell ${isOn ? 'on' : 'off'}`;

  return <div className={cellClass} onClick={() => toggle(id)} />;
};

// Define the Grid component
const Grid = () => {
  return (
    <div className="grid">
      <Cell id={0} />
      <Cell id={1} />
      <Cell id={2} />
      <Cell id={3} />
    </div>
  );
};

// Main App component that uses the CountProvider to wrap the Grid component
const App = () => {
  const { cells } = useContext(CountContext); // Use the context to get the cells state

  return (
    <CountProvider>
      <div className="app">
        <h1>React Grid Toggle</h1>
        <div>Cells on: {cells.filter(isOn => isOn).length}</div> {/* Display the count of 'on' cells */}
        <Grid />
      </div>
    </CountProvider>
  );
};

export default App;





// function App() {
//   // const [count, setCount] = useState(0)
//   // const firstNumber = 11;
//   // const secondNumber = 12;
//   const [randomNumberState, setRandomNumberState] = useState(1)

//   // let randomNumber = Math.floor(Math.random() * 10) + 1;

//   function generateRandomNumber() {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     setRandomNumberState(randomNumber);
//   }

//   return (
//     <div>
//       <div>Welcome to my app!  Here is a random number: {randomNumberState}</div>
//       <button onClick={() => generateRandomNumber()}>Click me for random number</button>
//     </div>
//   )
// }

// export default App



// let favFood = 'banana';

// function whatIsMyFavoriteFood() {

//   return favFood + '!';

// }

// const response = whatIsMyFavoriteFood();

// favFood = 'apple';

// console.log(response)


// const favMovies = ['Friday the 13th', 'Nightmare on Elm St', 'Star Wars'];
// // const firstFavMovie = favMovies[0];
// // const secondFavMovie = favMovies[1];

// const [firstFavMovie, secondFavMovie] = favMovies;

// 
{/* <Calculator>

</Calculator>

function Calculator() {
  // state = current number, function histrory
  return (
    <div>
      <Display />
      <Buttons />
    </div>
  )
}

function Display() {
  return <div>Current Display ?</div>
}

function Buttons() {

  return (
    <div>
      <NumberButtons />
      <AddButton />
      <MinusButton />
    </div>
  )
} */}