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
  const [win , setWin] = useState(false);
  const [stats , setStats] = useState ({cc: 0 , cr: 0}) ;  

  useEffect(() => {
    let tempQuestins = [];
    for (let i = 0; i < 4; i++) {
      const index = (Math.floor(Math.random() * 10)) % COLORS.length;
      tempQuestins.push(COLORS[index]);
    }
    setQuestion(tempQuestins);
 
  }, [win])

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
  console.log('====================================');
  console.log(state.cc);
  console.log('====================================');
  return (
    <div className="App">
      <ColorState answer={answer} setAnswer={setAnswer} answerList={answerList} setAnswerList={setAnswerList}/>
      <AnswerList answerList={answerList} setAnswerList={setAnswerList} />
      <Result question={question} cC={state.cc}/>
      <Step step={answerList.length}/>

    </div>
  );
}

export default App;
