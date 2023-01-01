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
  
  const checkAnswer = (answer) => {
    let cc = 0, cr = 0;

    const map = {};
    for (let i = 0; i < question.length; i++) {
      if (!map[question[i]])
        map[question[i]] = 0;
      map[question[i]]++;
    }
    
    for (let i = 0; i < answer.length; i++) {
      if (map[answer[i]]) {
        cr += 1;
        map[answer[i]]--;
      }
    }
    
    for (let i = 0; i < answer.length; i++) {
      if (question[i] === answer[i]) {
        cc += 1;
        cr--;
      }
    }
   
    return { cc, cr }
  }
const state = checkAnswer(answer);

  return (
    <div className="App">
      <ColorState answer={answer} setAnswer={setAnswer} 
      answerList={answerList} setAnswerList={setAnswerList}
      question={question} setQuestion={setQuestion}
      state={state}
      />
      <AnswerList answerList={answerList} state={state} setAnswerList={setAnswerList}/>
      <Result question={question} answerList={answerList} state={state}/>
      <Step step={answerList.length}/>

    </div>
  );
}

export default App;
