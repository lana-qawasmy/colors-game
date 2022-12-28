// import logo from './logo.svg';
import ColorState from './component/colorState/ColorState.jsx';
import AnswerList from './component/answer/AnswerList';
import React, { useState } from 'react'
import './App.css';

function App() {
  const [answer , setAnswer] = useState([]);
  
  return (
    <div className="App">
      <ColorState answer={answer} setAnswer={setAnswer}/>
      <AnswerList answer={answer} />
    </div>
  );
}

export default App;
