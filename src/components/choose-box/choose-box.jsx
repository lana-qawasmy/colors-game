import React from 'react';
import { COLORS } from '../../services/data';
import './choose-box.css';

const ChooseBox = ({ answer, setAnswer }) => {
    return (
        <div className={`choose-box`}>
            {
                COLORS.map((color, ind) => {
                    return (
                        <span
                            style={{ backgroundColor: color }}
                            className={`cell`}
                            key={'color' + color + 'index' + ind}
                            onClick={() => {
                                let arr = [...answer];
                                arr.push(color);
                                setAnswer(arr);
                            }}
                        >
                        </span>
                    );
                })
            }
        </div >
    );
};

export default ChooseBox;