import React from 'react'
import Row from '../choose-color/Row';
import './result.css';

const Result = (props) => {
  // const hideRightAnswer = new Array(4).fill("blue" , "red" , "yellow" , "orange");
 
  return (
   <div className="result">
       <Row value={props.question} answerList={props.answerList} state={props.answerList.state}/>
   </div>
  )
}

export default Result; 