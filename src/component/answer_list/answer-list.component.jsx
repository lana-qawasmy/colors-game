import Row from "../row/row.component";
import React from 'react';
import './answer-list.css';

const AnswerList = (props) => {
    return (
        <div className="answer-list">
            {
                props.answers.map((ans, index) => <Row key={"ans_" + index} value={ans.answer} calcs={ans.calcs} />)
            }
        </div>
    )
}
export default AnswerList;