import React, { useState } from 'react';
import Status from '../status/status';
import './board.css';
const Board = () => {
    const [steps, setSteps] = useState(0);
    return (
        <div className='board'>
            <Status steps={steps} />
            <hr />
            
        </div>
    );
};

export default Board;