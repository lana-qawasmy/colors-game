import "./App.css";
import ColorPanel from "./colors-panel/colors-panel.component";
import CirlcePanel from "./circle-panel/circle-panel.component";
import { useState,useEffect } from "react";
import AnswerList from "./answer-list/answer-list.componenet";
import { COLORS } from "./data/data";

function App() {
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState([]);
  const [won, setWon] = useState(false);

  useEffect(() => {
    buildNewQuestion();
  }, []);

  const buildNewQuestion = () => {
    const newQuestion = [];
    for (let i = 0; i < 4; i++) {
      newQuestion.push(
        COLORS[Math.floor((Math.random() * 10) % COLORS.length)]
      );
    }
    setQuestion(newQuestion);
  };

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

  const handleAnswerSubmit = (answer) => {
    const result = checkAnswer(answer);
    if (result.cc === 4) {
      setWon(true);
    }
    setAnswers([{ answer, calcs: result }, ...answer]);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Colors Game</h1>
          <h2>Steps: {answers.length}</h2>
        </div>
        <hr />
        <CirlcePanel value={question} hidden={!won} />
        <AnswerList answers={answers} />
        <hr />
        <ColorPanel onAnswerSubmit={handleAnswerSubmit} disabled={!won}/>
      </div>
    </div>
  );
}

export default App;
