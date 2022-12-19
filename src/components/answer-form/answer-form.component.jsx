import React from "react";
import { useState, useEffect } from "react"
import Row from "../row/row.component";
import { COLORS, Size } from "../data/data";
import './answer-form.css';



const Answer = (props) => {
    
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        if (answer.length >= Size) {
            props.onSubmit(answer);
            setAnswer([]);
        }
    }, [answer]);

    // const cellClick = (color) => {
    //     if (props.disabled) return;
    //     if (answer.length < Size) {
    //         setAnswer([...answer, color]);
    //     }
    // }
    const handelColor = (color) => {

        setAnswer([...answer, color]);

    }

    const clearAnswer = () => {

        setAnswer([]);

    }



    return (
        <div className="answer-form" >
            <hr />
            <div className="RowForSubmit">
                <Row value={answer} />
                <button className="clear" onClick={clearAnswer}>X</button>
            </div>
            <div className="choices">
                {
                    COLORS.map(color => <span
                        key={color}
                        className="cell"
                        style={{ backgroundColor: color }}
                        onClick={() => handelColor(color)}
                    />)
                }
            </div>
        </div>
    );

};








export default Answer;