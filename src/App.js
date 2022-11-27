import "./App.css";
import ColorPanel from "./colors-panel/colors-panel.component";
import CirlcePanel from "./circle-panel/circle-panel.component";
import { useState, useEffect } from "react";
import AnswerList from "./answer-list/answer-list.componenet";
import { COLORS, SIZE } from "./data/data";

function App() {
  const [won, setWon] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState([
    "red",
    "green",
    "blue",
    "black",
    "purple",
    "yellow",
  ]);

  useEffect(() => {
    buildNewQuestion();
  }, []);

  const buildNewQuestion = () => {
    const newQuestion = [];
    for (let i = 0; i < 5; i++) {
      newQuestion.push(COLORS[Math.floor((Math.random() * 6) % COLORS.length)]);
    }
    setQuestion(newQuestion);
  };

  const checkAnswer = (answer) => {
    let cc = 0,
      cr = 0;

    const map = {};
    for (let i = 0; i < question.length; i++) {
      if (!map[question[i]]) map[question[i]] = 0;
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
    return { cc, cr };
  };

  const handleAnswerSubmit = (answer) => {
    const result = checkAnswer(answer);
    setAnswers([{ answer, calcs: result }, ...answers]);
    if (result.cc === SIZE) {
      setWon(true);
    }
  };

  const playAgain = () => {
    setWon(false);
    setAnswers([]);
    buildNewQuestion();
  };

  console.log(won);
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Colors Game</h1>
          <h2>Steps: {answers.length}</h2>
        </div>
        <hr />
        <CirlcePanel
          value={question}
          hidden={!won}
          question
          answers={answers}
        />
        {won && (
          <div className="won">
            <span>You Won &#127881;&#127880;</span>
            <button className="play-again" onClick={() => playAgain()}>
              Play Again?
            </button>
          </div>
        )}
        <hr></hr>
        <AnswerList answers={answers} />
        <hr />
        <ColorPanel onAnswerSubmit={handleAnswerSubmit} />
      </div>
    </div>
  );
}

export default App;
