
import './App.css';
import React from 'react';
import Form from './components/Form/form.component';
import Row from './components/Row/row.component';
import List from './components/AnswerList/answer_list.component';

function App() {
  return (
    <div className="App">
      <List/>
      <Form/>
      <Row/>
    
    </div>
  );
}

export default App;
