import React, { useState } from 'react'
import { COLORS } from '../Colors/colorArr';
import Hide from '../hide-color/Hide';

import './colorState.css';

const ColorState = () => {
    const [answer , setAnswer] = useState([]);
    const handelColor= (color) => {
          if(answer.length < 4) {
            setAnswer([...answer , color]);
          }
    }

  return (
    <div className="Color1">
       <hr />
       <span className="Empty" onClick={() => setAnswer([])}>X</span>
       <Hide value={answer}/>
       <div className="Color">
           {COLORS.map(color => <span key={color}
           style={{backgroundColor:color}}
            className="color-choice"
            onClick={() => handelColor(color)}
            >
            </span>)}
       </div>
    </div>
  )
}

export default ColorState