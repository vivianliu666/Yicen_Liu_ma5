import React from 'react';
import { GridProvider } from './GridContext';
import Grid from './Grid';
import './App.css';

export default function App() {
  return (
    <GridProvider>
      <div className="centered-container">
        <Grid />
      </div>
    </GridProvider>
  );
}

