import React from 'react';
import { COLORS } from '../../services/data';
import './choose-box.css';

const ChooseBox = ({ disabled, answer, setAnswer }) => {
    return (
        <div className={`choose-box`}>
            {
                COLORS.map((color) => {
                    return (
                        <button
                            style={{
                                backgroundColor: color
                            }}
                            disabled={disabled}
                            className={`cell`}
                            key={ color}
                            onClick={() => {
                                let arr = [...answer];
                                arr.push(color);
                                setAnswer(arr);
                            }}
                        >
                        </button>
                    );
                })
            }
        </div >
    );
};

export default ChooseBox;