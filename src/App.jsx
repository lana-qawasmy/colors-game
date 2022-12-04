import './App.css';
import { useState } from 'react';
import AnswerForm from './components/answer-form/answer-form.component';
import HistoryBlock from './components/history-block/history-block.component';
import Header from './components/header/header.component';
import Question from './components/Question/question.component';
import { qGenerator, compare } from './calculations';

function App() {
  const [trueAnswer, setTrueAnswer] = useState(qGenerator());
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const [history, setHistory] = useState([]);
  const [win, setWin] = useState(false);                    // (add fireworks!)

  console.log('trueAnswer', trueAnswer);
  const checkWin = (userAns) => {
    if (compare(trueAnswer, userAns)) {
      setWin(true);
    }
  };

  return (
    <div className="App">
      <Header history={history} />
      <br />
      <Question
        colors={trueAnswer}
        win={win}
        setWin={setWin}
      />
      {win && <div className='you-win-block'>
        <span className="correct">Correct Answer!</span>
        <button
          className='play-again-btn'
          onClick={() => {
            setTrueAnswer(qGenerator());
            setHistory([]);
            setWin(false);
          }}
        >
          Play Again
        </button>
      </div>}
      <hr />

      <HistoryBlock history={history} />
      <hr />

      <AnswerForm
        trueAnswer={trueAnswer}
        checkWin={checkWin}
        currentAnswer={currentAnswer}
        setCurrentAnswer={setCurrentAnswer}
        history={history}
        setHistory={setHistory} />
    </div >
  );
}

export default App;
