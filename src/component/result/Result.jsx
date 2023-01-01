import React from 'react'
import Row from '../choose-color/Row';
import './result.css';

const Result = (props) => {
  // const hideRightAnswer = new Array(4).fill("blue" , "red" , "yellow" , "orange");
 
  return (
   <div className="result">
       <Row value={props.question} answerList={props.answerList} state={props.state} show={props.show}/>
       {/* { 
        props.state.cc > 3 &&
        props.setAnswerList([])
       }
       { 
        props.state.cc === 4 &&
        <button className="again">
           Play Again
        </button>
       } */}
   </div>
  )
}

export default Result; 