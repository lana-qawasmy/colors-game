import React from 'react'
import './row.css'

const Initial = new Array(4).fill('grey'); 
const Row = (props) => {
  
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
        <span>CC : {props.cc}</span>
        <span>CW : {props.cr}</span>
       
        
    </div>
  )
}

export default Row;