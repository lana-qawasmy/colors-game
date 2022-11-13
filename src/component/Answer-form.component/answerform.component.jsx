import { useState } from 'react';
import { COLORS } from '../data/data';
import Row from '../row/row.component';
import './answerform.css';
const AnswerForm = () =>{

    const [answer,setAnswer] = useState();
    const handelCellClick = (color) =>{
        if (answer.length < 4) {
            setAnswer([...answer,color]);
        }
    }
return (
 <div className="Answer-form">
    <Row value={answer}/>
    <div className='choices'> 
        {
            COLORS.map(color => <span
            key={color}
            className='cell'
            style={{background: color}}
            onClick={() => handelCellClick(color)} ></span>)
        }
    </div>
 </div>
)
}

export default AnswerForm;