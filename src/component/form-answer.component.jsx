import React, { useState, useEffect } from 'react'
import { COLORS, Size } from './data/data';

const AnswerForm = (props) => {
    const corrects = [...Array(Size)];
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        if (answer.length >= Size) {
            props.onSubmit && props.onSubmit(answer);
            setAnswer([]);
        }
    }, [answer]);

    const handleClick = (color) => {
        if (answer.length < Size) {
            setAnswer([...answer, color]);
        }
    }

const Delete=()=>{
    setAnswer(answer.slice(0, -1));

}


    return (
        <div className="form">
            <div className='clear'>
            <button onClick={Delete}>CLEAR</button>
            <span className='note'>Fill the circles here !</span>
            </div>

            <div className="row">
                {
                    corrects.map((row, index) =>
                        <span key={row + index} className="correct"
                            style={{ backgroundColor: answer[index] || '#ffc2a1' }}>
                            <small>answers-list</small>
                        </span>
                    )
                }
                <div className="stat-placeholder" />
            </div>
            <div className="row answer">
                {
                    COLORS.map((color, index) =>
                        <span
                            key={color + index}
                            className="correct color-btn"
                            style={{ backgroundColor: color }}
                            onClick={() => handleClick(color)}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default AnswerForm;