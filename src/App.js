import ColorState from './component/colorState/ColorState.jsx';
import AnswerList from './component/answer/AnswerList';
import Step from './component/Header/Step.header.jsx';
import Result from './component/result/Result.jsx';
import React, { useState , useEffect } from 'react'
import { COLORS } from './Colors/colorArr.jsx';
import './App.css';

function App() {
  const [answer , setAnswer] = useState([]);
  const [answerList , setAnswerList] = useState([]);
  const [question , setQuestion] = useState([]);
  
  useEffect(() => {
    let tempQuestins = [];
    for (let i = 0; i < 4; i++) {
      const index = (Math.floor(Math.random() * 10)) % COLORS.length;
      tempQuestins.push(COLORS[index]);
    }
    setQuestion(tempQuestins);
 
  }, [])
   console.log("answerList" , answerList);
  
  return (
    <div className="App">
      <ColorState answer={answer} setAnswer={setAnswer} 
      answerList={answerList} setAnswerList={setAnswerList}
      question={question} setQuestion={setQuestion}
      />
      <AnswerList answerList={answerList} setAnswerList={setAnswerList}/>
      <Result question={question} answerList={answerList}/>
      <Step step={answerList.length}/>

    </div>
  );
}

export default App;
