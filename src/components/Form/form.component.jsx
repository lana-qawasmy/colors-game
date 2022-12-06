import React from "react";
import './form.css';
import { useEffect, useState } from "react";
import Row from "../Row/row.component";
import colors from "../../Data/data";

const Form = (props) =>{
    const [currentAnswer, setCurrentAnswer] = useState([]);

    const handleCell = (color) =>{
        if(currentAnswer.length <4){
            setCurrentAnswer([...currentAnswer, color]);
        }
    }
    if(props.disable) {
        return null;
    }

useEffect(() => {
        if (currentAnswer.length === 4) {
            props.onAnswerSubmit(currentAnswer);
            setAnswer([]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentAnswer]);

    return (
        <div className="form">
  <div className="answerBlock">
                <Row value={currentAnswer} />
                <span className="empty" onClick={() => setCurrentAnswer([])}>X</span>
            </div>
            <div className="color">
                {colors.map(e => <span key={e}
                    style={{ backgroundColor: e }}
                    className="color-border"
                    onClick={() => handelColor(e)}
                >
                </span>)}
            </div>


        </div>
    )
}

export default Form