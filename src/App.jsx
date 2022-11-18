import './App.css';
import { useState } from 'react';
import AnswerForm from './components/answer-form/answer-form.component';
import HistoryBlock from './components/history-block/history-block.component';
import ColorsCard from './components/colors-card/colors-card.component';

function App() {
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const [history, setHistory] = useState([]);
  // const: all answers as a useState
  // const: win or not as a useState (add fireworks!)
  return (
    <div className="App">
      <div className='heading'>
        <h1>Colors Game</h1>
        <h2>Steps: {3}</h2>
      </div>
      <br />
      <ColorsCard />

      <hr
        style={{
          width: '100%',
          backgroundColor: "var(--my-grey)"
        }}
      />
      <HistoryBlock history={history}/>
      <hr
        style={{
          width: '100%',
          backgroundColor: "var(--my-grey)"
        }}
      />

      <AnswerForm
        currentAnswer={currentAnswer}
        setCurrentAnswer={setCurrentAnswer}
        history={history}
        setHistory={setHistory} />
    </div>
  );
}

export default App;
