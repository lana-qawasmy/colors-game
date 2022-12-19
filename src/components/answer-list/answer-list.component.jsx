import React from 'react';
import './answer-list.css';
import Row from '../row/row.component';

const AnswersList = (props) => {
    return (
        <div className="answers">
            {/* {
            props.answers.map((answer, index) => 
            <Row key={index} colors={answer.colors}   />)
            } */}

            {
                props.answers.map((ans, index) =>
                    <Row key={ans + index}
                        value={ans.answer}
                        calculations={ans.calculations} />)
            }


        </div>

    )
}

export default AnswersList;
