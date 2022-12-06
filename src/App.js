import "./App.css";
import ColorPanel from "./colors-panel/colors-panel.component";
import AnswerPanel from "./answer-panel/answer-panel.component";
import { useState, useEffect } from "react";
import AnswerList from "./answer-list/answer-list.componenet";
import { COLORS, SIZE } from "./data/data";

function App() {
  const [won, setWon] = useState(false);
  const [answer, setAnswer] = useState([]);
  const [theQuestion, setTheQuestion] = useState(["red", "green", "blue", "black", "purple", "yellow"]);

  useEffect(() => {
    newQuestion();
  }, []);

  const newQuestion = () => {
    const newQuestion = [];
    for (let i = 0; i < 5; i++) {
      newQuestion.push(COLORS[Math.floor((Math.random() * 6) % COLORS.length)]);
    }
    setTheQuestion(newQuestion);
  };
  const checkForCorrectAnswer = (answer) => {
    let cc = 0,
      cr = 0;

    const map = {};
    for (let i = 0; i < theQuestion.length; i++) {
      if (!map[theQuestion[i]]) map[theQuestion[i]] = 0;
      map[theQuestion[i]]++;
    }

    for (let i = 0; i < answer.length; i++) {
      if (map[answer[i]]) {
        cr += 1;
        map[answer[i]]--;
      }
    }

    for (let i = 0; i < answer.length; i++) {
      if (theQuestion[i] === answer[i]) {
        cc += 1;
        cr--;
      }
    }
    return { cc, cr };
  };

  const submitAnswer = (answer) => {
    const result = checkForCorrectAnswer(answer);
    setAnswer([{ answer, statistics: result }, ...answer]);
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
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Colors Game</h1>
          <h2>Steps: {answer.length}</h2>
        </div>
        <hr />
        <AnswerPanel
          colors={theQuestion}
          hidden={!won}
          answers={answer}
          question
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
        <AnswerList answers={answer} />
        <hr />
        <ColorPanel onAnswerSubmit={submitAnswer} />
      </div>
    </div>
  );
}

export default App;
