import React, { useEffect, useState } from 'react';
import { Circles } from '../../services/data';
import Answer from '../answer/answer';
import ColorBox from '../color-box/color-box';
import List from '../list/list';
import Status from '../status/status';
import './board.css';


const Board = ({ResultArray}) => {
    const [steps, setSteps] = useState(0);
    const [list, setList] = useState([]);
    const [win, setWin] = useState(false);
    const [answer, setAnswer] = useState([]);
    useEffect(() => {
        setList(JSON.parse(localStorage.getItem('answers')) || []);
        if (answer.length === Circles)
        {
            handleListUpdate();
            setAnswer([]);
        }
    }, [answer]);

    const handleListUpdate = () => {
        let arr = JSON.parse(localStorage.getItem('answers')) || [];
        arr.push(answer);
        setList(arr);
        setSteps(steps + 1);
        localStorage.setItem('answers', JSON.stringify(arr));
    };

    return (
        <div className='board'>
            <Status steps={steps} />

            <hr />

            <ColorBox
                colorsArray={ResultArray}
                border={'circle'}
                hidden={!win}
            />

            <hr style={{ height: '1px' }} />

            <List list={list} />

            <hr />

            <Answer
                answer={answer}
                setAnswer={setAnswer}
            />
        </div>
    );
};

export default Board;