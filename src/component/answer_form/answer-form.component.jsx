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

    return (
        <div className="AnswerForm">
            <hr />
            <span className="empty" onClick={() => setAnswer([])}>X</span>
            <Row value={currentAnswer} />
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