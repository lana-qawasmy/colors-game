import React, { useState, useEffect } from 'react'
import './App.css';
import AnswerForm from './component/form-answer.component';
import AnswersList from './component/list-of-answers';
import Row from './component/row.component';
import { COLORS, Size } from './component/data/data'


function App() {
  const [answers, setAnswers] = useState([]);
  const [question, setNewQuestion] = useState(COLORS);
  // const [count, setCount] = useState(0);
  const [won, setWon] = useState(false);
  useEffect(() => {
    RandomQuestion();
  }, [answers]);

  const handleSubmit = (answer) => {

    setAnswers([...answers, { colors: answer }]);
    if (question === answer) {
      setWon(true);
    }
  }

  const RandomQuestion = () => {
    const Question = [];
    for (let i = 0; i < Size; i++) {
      const color = Math.floor(Math.random() * COLORS.length);
      Question.push(COLORS[color]);
    }
    setNewQuestion(Question);
  }

  /********************************MAGIC CODE**************************** */
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
    setNewQuestion(question);
    setWon(false)
  }

  return (
    <>
      <div className='bg'></div>
      <div className="App">

        <h1>Color Guessing Game 😈</h1>
        <span className='note'>let's Guess these colors &#128556;</span>
        <span style={{ color: "#CABCD3" }}>round : {answers.length}</span>
        <Row colors={question} answers={answers} question

        /**TODO:
         * 
         *you need to remove the comment line below 
         */

        // hidden={!won}
        />
        {won &&
          <div className='finish'>
            <span className='note'>
              Perfect !
            </span>
            <button onClick={Again} >Again?</button>
          </div>}
        <hr style={{ width: '100%' }} />
        <AnswersList answers={answers} />

        <AnswerForm onSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default App;
