import ButtonsCard from '../buttons-card/buttons-card.component';
import ColorsCard from '../colors-card/colors-card.component';
import './answer-form.css';
import { COLORS, SIZE } from '../../data';
import { checkAnswer } from '../../calculations';



const AnswerForm = (props) => {
  const setCurrentAnswer = (color) => {
    if (props.currentAnswer.length < SIZE - 1)
      props.setCurrentAnswer([...props.currentAnswer, color]);

    else {
      const ans = [...props.currentAnswer, color];
      const stats = checkAnswer(ans, props.trueAnswer);
      console.log(stats);
      props.checkWin([...props.currentAnswer, color]);
      const hist = props.history;
      hist.push({ colors: [...props.currentAnswer, color], states: stats});
      props.setHistory(hist);
      props.setCurrentAnswer([]);
    }
  };

  return (
    <div className='answer-form'>
      <ColorsCard
        withClearBtn
        colors={props.currentAnswer}
        onClick={() => props.setCurrentAnswer([])}
      />

      <ButtonsCard
        colors={COLORS}
        onClick={setCurrentAnswer}
      />
    </div>
  );
};
export default AnswerForm;