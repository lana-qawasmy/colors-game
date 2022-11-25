import { useEffect, useState } from "react";
import COLORS from '../../data/data';
import Row from '../row/row.component';
import './answer-form.css';
const AnswerForm = (props) => {

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
                {COLORS.map(color => <span key={color}
                    style={{ backgroundColor: color }}
                    className="color-border"
                    onClick={() => handelColor(color)}
                >
                </span>)}
            </div>
        </div>
    )
}


export default AnswerForm;