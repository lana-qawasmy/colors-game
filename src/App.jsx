import './App.css';
import { useState } from 'react';
import AnswerForm from './components/answer-form/answer-form.component';
import HistoryBlock from './components/history-block/history-block.component';

function App() {
  const [currentAnswer, setCurrentAnswer] = useState([]);
  // const all answers as a useState
  // const win or not as a useState (add fireworks!)
  return (
    <div className="App">
      {/* heading (name of game and steps) */}
      {/* hidden colors card */}
      <HistoryBlock/>
      <AnswerForm currentAnswer setCurrentAnswer />
    </div>
  );
}

export default App;
