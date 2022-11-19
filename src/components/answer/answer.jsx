import React from 'react';
import ChooseBox from '../choose-box/choose-box';
import ColorBox from '../color-box/color-box';
import './answer.css';


const Answer = ({ win, answer, setAnswer }) => {
    return (
        <div className='answer-box'>
            <button
                disabled={win}
                className='clear'
                onClick={() => setAnswer([])}
            >
                X
            </button>
            <ColorBox colorsArray={answer} />
            <ChooseBox
                disabled={win}
                answer={answer}
                setAnswer={setAnswer}
            />
        </div>
    );
};

export default Answer;