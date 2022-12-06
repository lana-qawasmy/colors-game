import React from "react";
import './answer_list.css';
import Row from "../Row/row.component";

const List = (props) => {
    return (
        <div className="answer-list">
            {
                props.answers.map((ans, index) => <Row key={"ans_" + index} value={ans.answer} calcs={ans.calcs} />)
            }
        </div>
    )
}


export default List