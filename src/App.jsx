import Answer from './components/answer-form/answer-form.component';
import AnswersList from './components/answer-list/answer-list.component';
import './App.css';
import { useState, useEffect } from 'react';
import { COLORS, Size } from './components/data/data';
import Row from './components/row/row.component';
import Header from './components/header/header.component';
import Win from './components/win/win.component';


function App() {
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState(COLORS);
  const [win, setWin] = useState(false);

  useEffect(() => {
    generateQuestion();
  }, [answers]);

  const handleSubmit = (answer) => {

    const result = checkAnswer(answer);

    if (result.cc === (COLORS.length) - 1) {
      setWin(true);

    }

    setAnswers([{ answer, calculations: result }, ...answers]);
  };

  const generateQuestion = () => {
    const newQ = [];
    for (let i = 0; i < Size; i++) {
      newQ.push(COLORS[Math.floor(Math.random() * COLORS.length)]);
    }
    setQuestion(newQ);
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
  }

  const Again = () => {
    setAnswers([]);
    setQuestion(question);
    setWin(false)
  }


  return (

    <div className="App">
      <div className='container'>

        <Header answers={answers} />
        <Row value={question} hidden={!win} />
        <Win win={win} setAnswers={setAnswers} setWin={setWin} />
        <AnswersList answers={answers} />

        <Answer onSubmit={handleSubmit} />

      </div>
    </div>

  );
}

export default App;
