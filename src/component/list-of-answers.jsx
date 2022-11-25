import React from 'react'
import Row from './row.component';

const AnswersList = (props) => {
    return (
        <div className="answers">
            {
            props.answers.map((answer, index) => <Row key={index} colors={answer.colors}   />)
            }
        </div>
    )
}

export default AnswersList;