import React from "react";
import './answer_list.css';
import Row from "../Row/row.component";

const List = (props) =>{
    return (
        <div className="answerList">
            {
                props.answers.map((answer,index) =>
                <Row key={answer + id} value={answer}/>)
            }

        </div>
    )
}

export default List