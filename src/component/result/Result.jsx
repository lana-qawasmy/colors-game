import React from 'react'
import Row from '../choose-color/Row';
import './result.css';

const Result = (props) => {
  // const hideRightAnswer = new Array(4).fill("blue" , "red" , "yellow" , "orange");

  return (
   <div className="result">
       <Row value={props.question} cc={props.cC}/>
   </div>
  )
}

export default Result; 