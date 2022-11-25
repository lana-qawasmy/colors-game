import ButtonsCard from '../buttons-card/buttons-card.component';
import ColorsCard from '../colors-card/colors-card.component';
import './answer-form.css';
import { COLORS, SIZE } from '../../data';

const AnswerForm = (props) => {
  const setCurrentAnswer = (color) => {
    const ans = props.currentAnswer;
    ans.push(color);
    props.setCurrentAnswer(ans);
    if (props.currentAnswer.length === SIZE) {
      const hist = props.history;
      hist.push({ colors: props.currentAnswer, states: {} });
      props.setHistory(hist);
      props.setCurrentAnswer([]);
      console.log(props.currentAnswer, ':::: ', props.history);
    }
  };
  return (
    <div className='answer-form'>
      <ColorsCard withClearBtn colors={props.currentAnswer} /> {/* colors={props.currentAnswer} */}
      <ButtonsCard onClick={setCurrentAnswer}
        colors={COLORS}
      />
    </div>
  );
};
export default AnswerForm;