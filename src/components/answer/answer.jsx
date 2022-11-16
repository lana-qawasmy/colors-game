import React, { useEffect } from 'react';
import { Circles, COLORS } from '../../services/data';
import ChooseBox from '../choose-box/choose-box';
import ColorBox from '../color-box/color-box';
import './answer.css';
const Answer = ({ handleListUpdate, answer, setAnswer }) => {

    let cols = Array(Circles).fill('gray');
    // useEffect(() => {
    //     (answer || cols).forEach((element, i) => {
    //         cols[i] = element;
    //     });
    // }, [answer, cols]);
    // console.log(cols);

    return (
        <div className='answer-box'>
            <ColorBox colorsArray={cols} />
            <ChooseBox
                colors={COLORS}
                border={'square'}
                handleListUpdate={handleListUpdate}
                answer={answer}
                setAnswer={setAnswer}
            />
        </div>
    );
};

export default Answer;