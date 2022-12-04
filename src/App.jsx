import './App.css';
import { useState } from 'react';
import AnswerForm from './components/answer-form/answer-form.component';
import HistoryBlock from './components/history-block/history-block.component';
import Header from './components/header/header.component';
import Question from './components/Question/question.component';
import { qGenerator, compare } from './calculations';
import { useEffect } from 'react';

const trueAnswer = qGenerator();
console.log('trueAnswer', trueAnswer);

function App() {
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const [history, setHistory] = useState([]);
  const [win, setWin] = useState(false);                    // (add fireworks!)

  const checkWin = (userAns) => {
    if (compare(trueAnswer, userAns)) {
      setWin(true);
      alert('YOU WIN!');
    }
  }

  return (
    <div className="App">
      <Header history={history} />
      <br />
      <Question
        colors={trueAnswer}
        win={win}
        setWin={setWin}
      />
      <hr />

      <HistoryBlock history={history} />
      <hr />

      <AnswerForm
        checkWin={checkWin}
        currentAnswer={currentAnswer}
        setCurrentAnswer={setCurrentAnswer}
        history={history}
        setHistory={setHistory} />
    </div>
  );
}

export default App;
