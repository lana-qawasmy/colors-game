
import { useState } from 'react';
import { COLORS } from '../../Colors/colorArr';
import Row from '../choose-color/Row';

import './colorState.css';

const ColorState = ({answer,setAnswer,answerList,setAnswerList,question,setQuestion , state}) => {
  console.log("answerListColorState " , answerList);
  const [win , setWin] = useState(false); 
  
  const handelColor = (color) => {
    if (answer.length < 4) {
      setAnswer([...answer, color]);
    }
    else {
      console.log("answer1" , [...answer]);
      setAnswerList([ {state : state , answer : [...answer]} ,...answerList])
      console.log("answer" , [...answer]);
      console.log("answerList" , answerList);
      setAnswer([]);
    }
  }
  
  return (
    <div className="Color1">  
      <span className="Empty" onClick={() => setAnswer([])}>X</span>
      <Row value={answer} state={state}/>
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