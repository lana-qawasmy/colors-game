import React from 'react';
import './status.css';
const Status = (props) => {
    return (
        <div className='status'>
            <span className='color-game'>
                Color Game
            </span>
            <span className='number-of-steps'>
                Steps : {props.steps}
            </span>
        </div>
    );
};

export default Status;