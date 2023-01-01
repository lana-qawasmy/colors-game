import React from 'react'
import Row from '../choose-color/Row';
import './result.css';

const Result = (props) => {
  // const hideRightAnswer = new Array(4).fill("blue" , "red" , "yellow" , "orange");
 
  return (
   <div className="result">
       <Row win={props.win} value={props.question} answerList={props.answerList} state={props.state} show={props.show}/>
    
   </div>
  )
}

export default Result; 