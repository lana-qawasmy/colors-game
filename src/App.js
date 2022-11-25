import './App.css';
import AnswerForm from './component/answer_form/answer-form.component';
import { useEffect, useState } from 'react';
import COLORS from './data/data';
import Row from './component/row/row.component';
import AnswerList from './component/answer_list/answer-list.component';

function App() {
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState(["green", "green", "green", "green"]);
  const [win, setWin] = useState(false);

  useEffect(() => {
    generateNewQuestion();
  }, []);



  const generateNewQuestion = () => {
    const newQuestion = [];
    for (let index = 0; index < 4; index++) {
      console.log(Math.floor((Math.random() * 10) % COLORS.length));
      newQuestion.push(COLORS[Math.floor((Math.random() * 10) % COLORS.length)]);
    }
    console.log(newQuestion);
    setQuestion(newQuestion);
  }

  const checkAnswer = (answer) => {
    let cc = 0, cr = 0;
    const map = {};
    for (let i = 0; i < question.length; i++) {
      if (!map[question[i]])
        map[question[i]] = 0;
      map[question[i]]++;
    }

    for (let i = 0; i < answer.length; i++) {
      if (map[answer[i]]) {
        cr += 1;
        map[answer[i]]--;
      }
    }

    for (let i = 0; i < answer.length; i++) {
      if (question[i] === answer[i]) {
        cc += 1;
        cr--;
      }
    }
    return { cc, cr }
  };

  const handelAnswerSubmit = (answer) => {
    const result = checkAnswer(answer);
    if (result.cc === 4) {
      setWin(true);
    }

    setAnswers([{ answer, calcs: result }, ...answers]);
  };
  const restartGame = () => {
    setAnswers([]);
    setWin(false);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <h2>Colors Game</h2>
          <h3>step:{answers.length}</h3>
        </div>
        <hr />
        <Row value={question} hidden={!win} />
        {win && <div>
          <h1>You have Won!</h1>
          <button onClick={restartGame}>Restart</button>
        </div>

        }
        <hr />
        <AnswerList answers={answers} />
        <AnswerForm onAnswerSubmit={handelAnswerSubmit} disable={win} />
      </div>
    </div>
  );
}

export default App;
