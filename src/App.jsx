import './App.css';
import { useState } from 'react';
import AnswerForm from './components/answer-form/answer-form.component';
import HistoryBlock from './components/history-block/history-block.component';
import ColorsCard from './components/colors-card/colors-card.component';
import Header from './components/header/header.component';
import Question from './components/Question/question.component';

function App() {
  const [currentAnswer, setCurrentAnswer] = useState([]);
  const [history, setHistory] = useState([]);
  // const: all answers as a useState
  // const: win or not as a useState (add fireworks!)
  return (
    <div className="App">
      <Header history={history}/>
      <br />
      <Question />
      <hr />

      <HistoryBlock history={history} />
      <hr />

      <AnswerForm
        currentAnswer={currentAnswer}
        setCurrentAnswer={setCurrentAnswer}
        history={history}
        setHistory={setHistory} />
    </div>
  );
}

export default App;
