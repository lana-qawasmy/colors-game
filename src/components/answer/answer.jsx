import React from 'react';
import { COLORS } from '../../services/data';
import ChooseBox from '../choose-box/choose-box';
import ColorBox from '../color-box/color-box';
import './answer.css';


const Answer = ({ answer, setAnswer }) => {
    return (
        <div className='answer-box'>
            <ColorBox colorsArray={answer} />
            <ChooseBox
                colors={COLORS}
                border={'square'}
                answer={answer}
                setAnswer={setAnswer}
            />
        </div>
    );
};

export default Answer;