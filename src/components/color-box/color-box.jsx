import React from 'react';
import './color-box.css';


const ColorBox = ({ colorsArray, hidden, state }) => {
    return (
        <div className={`colors-box`}>
            {
                (colorsArray || []).map((color, ind) => {
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