
import './App.css';
import React from 'react';
import Form from './components/Form/form.component';
import Row from './components/Row/row.component';
import List from './components/AnswerList/answer_list.component';
import { useState, useEffect } from 'react';
import colors from './Data/data';

function App() {
  const [answers, setAnswers] = useState([]);
  const [qustion, setQustion] = useState(['green', 'green', 'green', 'green'])
  const [win, setWin] = useState(false);

  useEffect(() => {
    generateQuestion();
  }, []);

 
   const generateQuestion= () =>{
const newQuestion = [];
for (let i=0; i<4 ;i++){
  newQuestion.push([Math.floor((Math.random()*10) %colors.length )])
}
setQustion(newQuestion);
   }


const checkAnswer = (answer) =>{
  let cc =0;
  let cr =0;
  const map ={}
  for (let i=0; i<qustion.length; i++){
    if (!map[qustion[i]])
    map[qustion[i]]=0;
    map[qustion[i]]++;
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


const handleAnswer = (answer) =>{
  const result = checkAnswer(answer);
  if (result.cc === 4) {
    setWin(true);
  }

  setAnswers([{ answer, calcs: result }, ...answers]);
};
const restartGame = () => {
  setAnswers([]);
  setWin(false);
}

return (
  <div className="App">
    <div className='container'>
      <div className='header'>
        <h2>Colors Game</h2>
        <h3>step:{answers.length}</h3>
      </div>
      <hr />
      <Row value={question} hidden={!win} />
      {win && <div>
        <h1>You have Won!</h1>
        <button onClick={restartGame}>Restart</button>
      </div>

      }
      <hr />
      <List answers={answers} />
      <Form onAnswerSubmit={handleAnswer} disable={win} />
    </div>
  </div>
);

}

export default App;
