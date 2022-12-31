
import { useState } from 'react';
import { COLORS } from '../../Colors/colorArr';
import Row from '../choose-color/Row';

import './colorState.css';

const ColorState = ({answer,setAnswer,answerList,setAnswerList,question,setQuestion}) => {
  const [win , setWin] = useState(false); 
  
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

 

  // console.log(state);
  
  const handelColor = (color) => {
    if (answer.length < 4) {
      setAnswer([...answer, color]);
    }
    else {
      console.log("answer1" , [...answer]);
      setAnswerList([ {state : checkAnswer(answer) , answer : [...answer]} ,...answerList])
      console.log("answer" , [...answer]);
      console.log("answerList" , answerList);
      setAnswer([]);
    }
  }
  
  return (
    <div className="Color1">  
      <span className="Empty" onClick={() => setAnswer([])}>X</span>
      <Row value={answer} state={answerList.state}/>
      <div className="Color">
        {COLORS.map(color => <span key={color}
          style={{ backgroundColor: color }}
          className="color-choice"
          onClick={() => handelColor(color)}
        >
        </span>)}
      </div>
    </div>
  )
}

export default ColorState;