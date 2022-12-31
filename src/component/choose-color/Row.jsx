import React from 'react'
import './row.css'

const Initial = new Array(4).fill('grey'); 
const Row = (props) => { 
  // console.log("value" , props.value);
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
        <span>CC : {props.state.cc}</span>
        <span>CW : {props.state.cr}</span>
       
        
    </div>
  )
}

export default Row;