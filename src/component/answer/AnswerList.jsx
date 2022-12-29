import React from 'react'
import Row from '../choose-color/Row';
import './answerList.css'

const AnswerList = (props) => {

  return (
    <div className="answer-row">
     {  
       props.answerList.map(color => 
        <Row value={color}/>
        )
     }
    </div>
  )
}

export default AnswerList;
