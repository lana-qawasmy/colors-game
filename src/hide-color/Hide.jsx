import React from 'react'
import './hide.css'

const Initial =new Array(4).fill('grey'); 
const Hide = (props) => {
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
    </div>
  )
}

export default Hide