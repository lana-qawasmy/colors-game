import React from 'react'
import Row from '../choose-color/Row';
import './answerList.css'

const AnswerList = (props) => {
  console.log("answerList " , props.answerList);
  return (
    <div className="answer-row">
     {  
       props.answerList.map((color , ind) => 
        <Row value={color.answer} key={ind}state={color.state} show={props.show}/>
        )
      }
    
    </div>
  )
}

export default AnswerList;
