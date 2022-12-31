import React from 'react'
import Row from '../choose-color/Row';
import './answerList.css'

const AnswerList = (props) => {
   
  return (
    <div className="answer-row">
     {  
       props.answerList.map((color , ind) => 
        <Row value={color.answer} key={ind}state={props.AnswerList.state}/>
        )
      }
    </div>
  )
}

export default AnswerList;
