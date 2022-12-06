import './container.css';
import { COLORS, SIZE } from '../data/data';
import { useEffect, useState } from 'react';

const ButtomContainer = (props) => {
    const [answer, setAnswer] = useState([]);
    const colorFields = [...Array(SIZE)];

    useEffect(() => {
        if (answer.length >= SIZE) {
            props.submitAnswer && props.submitAnswer(answer);
            setAnswer([]);
        }
    }, [answer]);

    const chooseColor = (color) => {
        if (answer.lenght < SIZE) {
            setAnswer([...answer, color]);
            console.log("the answer array is: ", { answer })
        }
    }


    return (
        <div className='bottom'>
            <div className="answer-panel">
                {
                    colorFields.map((p, index) =>
                        <span key={`${p}${index}`} className="answer-color-field" style={{ backgroundColor: answer[index] || 'grey' }}></span>
                    )
                }
                <button onClick={() => setAnswer([]) }>X</button>
                <div className="result"></div>
            </div>
            <div className='panel'>
                {
                    COLORS.map((color, index) => (
                        <span
                            key={`${color}${index}`}
                            className={`color-field ${color}`}
                            style = {{backgroundColor: color}}
                            onClick={() => chooseColor(color)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default ButtomContainer;