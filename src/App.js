import logo from './logo.svg';
import './App.css';
import ColorPanel from './colors-panel/colors-panel.component';
import CirlcePanel from './circle-panel/circle-panel.component';
import { useState } from 'react';

function App() {


  return (
    <div className="App">
      <ColorPanel />
    </div>
  );
}

export default App;
