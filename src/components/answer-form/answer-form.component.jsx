import ButtonsCard from '../buttons-card/buttons-card.component';
import ColorsCard from '../colors-card/colors-card.component';
import './answer-form.css';
import { COLORS, DEFAULT_COLOR, SIZE } from '../../data';
import { useEffect } from 'react';

const AnswerForm = (props) => {
  const setCurrentAnswer = (color) => {
    const ans = props.currentAnswer;
    ans.push(color);
    props.setCurrentAnswer(ans);
    console.log('did useEffect get triggered?')
    if (props.currentAnswer.length === SIZE) {
      const hist = props.history;
      hist.push({ colors: props.currentAnswer, states: {} });
      props.setHistory(hist);
      props.setCurrentAnswer([]);
      console.log(props.currentAnswer, ':::: ', props.history);
    }
  };

  let answer = Array(SIZE).fill(DEFAULT_COLOR);

  useEffect(() => {
    answer = Array(SIZE).fill(DEFAULT_COLOR);
    for (let i = 0; i < props.currentAnswer.length; i++) {
      answer[i] = props.currentAnswer[i];
    }
    console.log('props changed');
  }, [props]);

  return (
    <div className='answer-form'>
      <ColorsCard withClearBtn colors={answer} /> {/* colors={props.currentAnswer} */}
      <ButtonsCard onClick={setCurrentAnswer}
        colors={COLORS}
      />
    </div>
  );
};
export default AnswerForm;