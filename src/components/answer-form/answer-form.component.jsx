import ButtonsCard from '../buttons-card/buttons-card.component';
import ColorsCard from '../colors-card/colors-card.component';
import './answer-form.css';
import { COLORS, DEFAULT_COLOR, SIZE } from '../../data';
import { useEffect } from 'react';

const AnswerForm = (props) => {

  const setCurrentAnswer = (color) => {

    if (props.currentAnswer.length < SIZE - 1) {
      props.setCurrentAnswer([...props.currentAnswer, color]);
      // console.log('did useEffect get triggered?')
    } else {
      const hist = props.history;
      hist.push({ colors: [...props.currentAnswer, color], states: {} });
      props.setHistory(hist);
      props.setCurrentAnswer([]);
      // console.log(props.currentAnswer, ':::: ', props.history);

    }
  };

  // useEffect(() => {
  //   // answer = Array(SIZE).fill(DEFAULT_COLOR);
  //   for (let i = 0; i < props.currentAnswer.length; i++) {
  //     answer[i] = props.currentAnswer[i];
  //   }
  //   console.log('props changed');
  // }, [props.currentAnswer]);

  return (
    <div className='answer-form'>
      <ColorsCard withClearBtn colors={props.currentAnswer} /> {/* colors={props.currentAnswer} */}
      <ButtonsCard
        colors={COLORS}
        onClick={setCurrentAnswer}
      />
    </div>
  );
};
export default AnswerForm;