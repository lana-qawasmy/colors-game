import React from 'react';
import './color-box.css';
import { COLORS } from '../../services/data';

const ColorBox = ({ border, win, }) => {
    return (
        <div className={`colors-box ${border}`}>
            {
                COLORS.map((color) => {
                    return (
                        <span
                            style={{ backgroundColor: win ? color : '' }}
                            className={`cell ${border}`}
                        >
                        </span>
                    );
                })
            }
        </div >
    );
};

export default ColorBox;