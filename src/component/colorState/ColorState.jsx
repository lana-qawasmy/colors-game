
import { useState } from 'react';
import { COLORS } from '../../Colors/colorArr';
import Row from '../choose-color/Row';

import './colorState.css';

const ColorState = ({answer,setAnswer,answerList,setAnswerList,question,setQuestion}) => {
  const [win , setWin] = useState(false);
  // const [stats , setStats] = useState ({cc: 0 , cr: 0}) ;  
  
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
        console.log("fdsfsdfs2",cr);
      }
    }
    
    for (let i = 0; i < answer.length; i++) {
      if (question[i] === answer[i]) {
        cc += 1;
        cr--;
        console.log("fdsfsdfs2",cr);
      }
    }
    console.log("fdsfsdfs2",cr);
    console.log("fdsfsdfsque",question);
    console.log("fdsfsdfsans",answer);
    return { cc, cr }
  }

  const state = checkAnswer(answer);

  console.log(state);
  
  const handelColor = (color) => {
    if (answer.length < 4) {
      setAnswer([...answer, color]);
    }
    else {
      setAnswerList([...answerList , answer])
      setWin(true);
      console.log(answerList);
      setAnswer([]);
    }
  }
  
  return (
    <div className="Color1">  
      <span className="Empty" onClick={() => setAnswer([])}>X</span>
      <Row value={answer} cc={state.cc} cr={state.cr}/>
      {
        win && alert("win")
      }
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