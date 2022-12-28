import React from 'react'
import { useState } from 'react'
import Row from '../choose-color/Row';
import './answerList.css'

const AnswerList = (props) => {


  return (
    <div className="answer-row">
     { props.answer.length === 4 &&
      props.answer.map(color => 
       <Row value={props.answer}/>
      )
     }
    </div>
  )
}

export default AnswerList;
