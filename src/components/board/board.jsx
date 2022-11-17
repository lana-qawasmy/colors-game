import React, { useEffect, useState } from 'react';
import { Circles } from '../../services/data';
import { GetState } from '../../services/services';
import Answer from '../answer/answer';
import ColorBox from '../color-box/color-box';
import List from '../list/list';
import Status from '../status/status';
import './board.css';


const Board = ({ ResultArray }) => {
    const [steps, setSteps] = useState(0);
    const [list, setList] = useState([]);
    const [win, setWin] = useState(false);
    const [answer, setAnswer] = useState([]);

    useEffect(() => {
        setSteps(list.length);
        if (answer.length === Circles) {
            handleListUpdate();
            setAnswer([]);
        }
    }, [answer, list]);

    const handleListUpdate = () => {
        let arr = list;
        let State = GetState(answer, ResultArray);
        arr = [{ State, answer }, ...arr];
        setList(arr);
        setSteps(steps + 1);
        if (State.cc === Circles) {
            setWin(true);
        }
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
                win={win}
                answer={answer}
                setAnswer={setAnswer}
            />
        </div>
    );
};

export default Board;