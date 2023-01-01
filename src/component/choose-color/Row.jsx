import React from 'react'
import './row.css'

const Initial = new Array(4).fill('grey'); 
const Row = (props) => { 
  // console.log("value" , props.value);
  console.log("answerListRow " , props.state);
  return (
    <div className="colorChoice">
      {
        Initial.map((color , indx) => 
        <span
         key={indx} 
         style={{backgroundColor: props.value[indx] || color}}
         className="Circle-color"
         ></span>)
         
         
        }
        { <span>CC : {props.state.cc}</span>}
        { <span>CW : {props.state.cr}</span>} 
       
        
    </div>
  )
}

export default Row;