import React, { useState, useEffect } from 'react'
import './App.css';
import AnswersList from './component/answerList/answarList.component';
import AnswerForm from './component/answerform/answerform.component';
import Row from './component/row/row.component';
import { COLORS, QUESTION_SIZE } from './res/data'

function App() {
  const [questionRow, setQuestionRow] = useState(['purple', 'green', 'purple', 'green']);
  const [answers, setAnswers] = useState([]);
  const [won, setWon] = useState(false);

  useEffect(() => { generateRandomQuestion(); }, []);

  useEffect(() => {
    var el = document.getElementById('answersList');
    el.scrollTop -= 80;
  }, [answers]);

  const generateRandomQuestion = () => {
    const tArr = [];
    for (let i = 0; i < QUESTION_SIZE; i++) {
      const cInd = Math.floor(Math.random() * 6);
      tArr.push(COLORS[cInd]);
    }
    setQuestionRow(tArr);
  }

  const checkAnswer = (answer) => {
    let cc = 0, cr = 0;

    const map = {};
    for (let i = 0; i < questionRow.length; i++) {
      if (!map[questionRow[i]])
        map[questionRow[i]] = 0;
      map[questionRow[i]]++;
    }

    for (let i = 0; i < answer.length; i++) {
      if (map[answer[i]]) {
        cr += 1;
        map[answer[i]]--;
      }
    }

    for (let i = 0; i < answer.length; i++) {
      if (questionRow[i] === answer[i]) {
        cc += 1;
        cr--;
      }
    }
    return { cc, cr }
  }

  const handleSubmit = (answer) => {
    const result = checkAnswer(answer);
    setAnswers([...answers, { colors: answer, stats: result }]);
    if (JSON.stringify(questionRow) === JSON.stringify(answer)) {
      setWon(true);
    }
  }

  const handleNewGame = () => {
    setAnswers([]);
    setWon(false);
    generateRandomQuestion();
  }

  return (
    <div className="App">
      <h1>Colors Game <span>Steps[{answers.length}]</span></h1>
      <Row colors={questionRow} answers={answers} hidden={!won} question />
      {won &&
        <div className="correct-bar">
          <span>Correct Answer!</span>
          <button className="new-game" onClick={handleNewGame}>Play Again?</button>
        </div>}
      <hr style={{ width: '100%' }} />
      <AnswersList answers={answers} />
      <hr style={{ width: '100%' }} />
      <AnswerForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
