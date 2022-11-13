import { useState } from "react";
import COLORS from "../../data";
import "./answerform.css";
const AnswerForm=()=>{
    const [answer ,setAnswer]=useState([]);
    return(
        <div className="AnswerForm"> 
          <div className="choices"></div>
          {COLORS.map(color =><span key ={color} className="cell" style={{background:color}}></span>)}
        </div>
    )
}
export default AnswerForm;