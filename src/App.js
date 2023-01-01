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
  const [show ] = useState(false); 
  
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
if(state.cc === 3) {
  setWin(true);
  setAnswer([]);
  setAnswerList([]);
  
}
  return (
    <div className="App">
      <ColorState answer={answer} setAnswer={setAnswer} 
      answerList={answerList} setAnswerList={setAnswerList}
      question={question} setQuestion={setQuestion}
      state={state} show={show}
      />
     { !win ? <AnswerList answerList={answerList} state={state} setAnswerList={setAnswerList} show={!show}/>
     : <div className="winPop">You Win</div> 
    }
      <Result win={win} question={question} setAnswerList={setAnswerList} answerList={answerList} state={state} show={show}/>
      <Step step={answerList.length}/>
       
      
       
       {
        win && <button onClick={()=> {
          setAnswer([]);
          setAnswerList([]);
          setWin(false);
        }}>play again</button>
       }
    </div>
  );
}

export default App;
