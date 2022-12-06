import './container.css';
import ButtomContainer from './buttom-container.component';
import TopContainer from './top-container.component';
import { useEffect, useState } from 'react';
import AnAnswer from '../answer/answer';
import { COLORS, SIZE } from '../data/data';

const Container = () => {
    const [question, setQuestion] = useState(['red', 'green', 'blue', 'yellow', 'orange', 'purple']);
    const [answer, setAnswer] = useState([]);
    const [won, setWon] = useState(false);

    useEffect(() => {
        newQuestion();
    }, []);

    const newQuestion = () => {
        const question = [];
        for (let i = 0; i < 5; i++) {
            question.push(COLORS[Math.floor((Math.random() * 6) % COLORS.length)]);
        }
        setQuestion(question);
    };

    const checkForAnswer = (answer) => {
        let cc = 0,
            cr = 0;

        const map = {};
        for (let i = 0; i < question.length; i++) {
            if (!map[question[i]]) map[question[i]] = 0;
            map[question[i]]++;
        }

        for (let i = 0; i < answer.length; i++) {
            if (map[answer[i]]) {
                cr++;
                map[answer[i]]--;
            }
        }

        for (let i = 0; i < answer.length; i++) {
            if (question[i] === answer[i]) {
                cc++;
                cr--;
            }
        }
        return { cc, cr };
    };

    const submitAnswer = (answer) => {
        const result = checkForAnswer(answer);
        setAnswer([{ answer, result: result }, ...answer]);
        if (result.cc === SIZE) {
            setWon(true);
        }
    };

    const playAgain = () => {
        setWon(false);
        setAnswer([]);
        newQuestion();
    };

    return (
        <div className='container'>
            <span className="header">
                <span>Color Guesser Game &nbsp; Steps: {answer.length}</span>
            </span>
            <br />
            <AnAnswer colors={question} answer={answer} hidden={!won} question />
            {won &&
                <div className="correctAnswer">
                    <span>Correct Answer!</span>
                    <button className="new-game" onClick={playAgain}>Play Again?</button>
                </div>}
            <TopContainer answer={answer}/>
            <ButtomContainer submitAnswer={submitAnswer} />
        </div>
    )
}

export default Container;