import React, { useState } from 'react';
import ColorBox from '../color-box/color-box';
import List from '../list/list';
import Status from '../status/status';
import './board.css';
const Board = () => {
    const [steps, setSteps] = useState(0);
    const [list, setList] = useState([]);

    const handleListUpdate = (item) => {

    };

    return (
        <div className='board'>
            <Status steps={steps} />
            <hr />
            <ColorBox />
            <hr style={{ height: '1px' }} />
            <List list={list} />
            <hr />
            
        </div>
    );
};

export default Board;