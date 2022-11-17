import React, { useEffect } from 'react';
import { Circles } from '../../services/data';
import './color-box.css';


const ColorBox = ({ colorsArray, hidden, state }) => {
    useEffect(() => { }, [colorsArray]);

    let cols = Array(Circles).fill('gray');
    const SetColors = () => {
        if (colorsArray) {

            for (let i = 0; i < colorsArray.length; i++) {
                cols[i] = colorsArray[i];
            };
        }
    };
    SetColors();
    return (
        <div className={`colors-box`}>
            {
                (cols).map((color, ind) => {
                    return (
                        <span
                            style={{ backgroundColor: hidden ? 'gray' : color }}
                            className={`cell`}
                            key={'color' + color + 'index' + ind}
                        >
                        </span>
                    );
                })
            }
            {
                state &&
                <span className='state'>
                    <span>
                        CC :
                    </span>
                    <span>
                        CR :
                    </span>
                </span>

            }
        </div >
    );
};

export default ColorBox;