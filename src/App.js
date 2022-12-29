// import logo from './logo.svg';
import ColorState from './component/colorState/ColorState.jsx';
import AnswerList from './component/answer/AnswerList';
import React, { useState } from 'react'
import './App.css';
import Result from './component/result/Result.jsx';
import Step from './component/Header/Step.header.jsx';

function App() {
  const [answer , setAnswer] = useState([]);
  const [answerList , setAnswerList] = useState([]);
  
  return (
    <div className="App">
      <ColorState answer={answer} setAnswer={setAnswer} answerList={answerList} setAnswerList={setAnswerList}/>
      <AnswerList answerList={answerList} setAnswerList={setAnswerList} />
      <Result answer={answer}/>
      <Step/>
    </div>
  );
}

export default App;
