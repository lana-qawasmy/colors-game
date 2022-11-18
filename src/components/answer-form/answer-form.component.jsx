import { logDOM } from '@testing-library/react';
import ButtonsCard from '../buttons-card/buttons-card.component';
import ColorsCard from '../colors-card/colors-card.component';
import './answer-form.css';
import {COLORS, SIZE} from '../../data'

const AnswerForm = (props) => {
  const setCurrentAnswer = (color) => {
    if (props.currentAnswer.length === SIZE) {
      const hist = props.history;
      hist.push({ colors: props.currentAnswer, states: {} });
      console.log('hist', hist);
      props.setHistory(hist);
      props.setCurrentAnswer([]);
      console.log(props.currentAnswer, ':::: ', props.history);
    }
    else {
      const ans = props.currentAnswer;
      ans.push(color);
      props.setCurrentAnswer(ans);
      console.log('my-current-ans: ', props.currentAnswer);
    }
  };
  return (
    <div className='answer-form'>
      <ColorsCard withClearBtn  /> {/* colors={props.currentAnswer} */}
      <ButtonsCard onClick={setCurrentAnswer}
        colors={COLORS}
      />
    </div>
  );
};
export default AnswerForm;