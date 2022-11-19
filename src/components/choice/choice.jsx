import React from 'react';
import './choice.css';

/**
 * 
 * @param {{
 *      setList:React.Dispatch<React.SetStateAction<never[]>>;
 *      setAnswer:React.Dispatch<React.SetStateAction<never[]>>;
 *      setShow:React.Dispatch<React.SetStateAction<boolean>>;
 *      setWin:React.Dispatch<React.SetStateAction<boolean>>;
 *      win:boolean;
 *      show:boolean;
 * }} props 
 * @returns 
 */
const Choice = (props) => {
    const handleTryAgain = () => {
        props.setAnswer([]);
        props.setList([]);
        props.setShow(false);
        props.setWin(false);
    };
    const handleShow = () => {
        props.setShow(true);
    };
    return (
        <div className='choice'>
            <button
                className='try-again'
                onClick={handleTryAgain}
            >
                try again
            </button>
            <button
                className='show-answer'
                onClick={handleShow}
                disabled={props.win || props.show}
            >
                show answer
            </button>
        </div>
    );
};

export default Choice;