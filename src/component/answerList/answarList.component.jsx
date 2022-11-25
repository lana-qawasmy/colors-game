import React from 'react'
import Row from '../row/row.component';
import "./answarList.css";

const AnswersList = (props) => {
    return (
        <div id="answersList" className="answers-list">
            {props.answers.map((ans, index) => <Row key={index} colors={ans.colors} stats={ans.stats} />)}
        </div>
    )
}

export default AnswersList;