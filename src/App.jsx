import './App.css';
import { useState } from 'react';
import AnswerForm from './components/answer-form/answer-form.component';

function App() {
  const [currentAnswer, setCurrentAnswer] = useState([]);
  // const all answers as a useState
  // const win or not as a useState (add fireworks!)
  return (
    <div className="App">
      <AnswerForm currentAnswer setCurrentAnswer />
    </div>
  );
}

export default App;
