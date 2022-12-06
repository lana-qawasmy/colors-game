import React from "react";
import './form.css';
import { useEffect, useState } from "react";
import Row from "../Row/row.component";
import colors from "../../Data/data";


const Form = (props) => {

    const [currentAnswer, setAnswer] = useState([]);

    useEffect(() => {
        if (currentAnswer.length === 4) {
            props.onAnswerSubmit(currentAnswer);
            setAnswer([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentAnswer]);
    const handelColor = (color) => {
        if (currentAnswer.length < 4) {
            setAnswer([...currentAnswer, color]);
        }
    }

    if(props.disable) {
        return null;
    }

    return (
        <div className="AnswerForm">
            <hr />
            <div className="answerBlock">
                <Row value={currentAnswer} />
                <span className="empty" onClick={() => setAnswer([])}>X</span>
            </div>
            <div className="color">
                {colors.map(color => <span key={color}
                    style={{ backgroundColor: color }}
                    className="color-border"
                    onClick={() => handelColor(color)}
                >
                </span>)}
            </div>
        </div>
    )
}



export default Form