import React from 'react'
import Row from '../choose-color/Row';
import './result.css';

const Result = (props) => {
  return (
   <div className="result">
       <Row value={props.answer}/>
   </div>
  )
}

export default Result
