// app.js
import React from 'react';
import ReactDOM from 'react-dom';
import TempConverter from './TempConverter'; // Assuming the TempConverter component is in the same directory

function App() {
  return (
    <TempConverter />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
