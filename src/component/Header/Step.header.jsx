import React from 'react'
import './header.css'

const Step = (props) => {
  return (
    <div className="header">
          <span>
         Color Game 
        </span>
        <span >
          Step : {props.step}
        </span>
    </div>
  )
}

export default Step;
