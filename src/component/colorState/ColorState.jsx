
import { COLORS } from '../../Colors/colorArr';
import Row from '../choose-color/Row';

import './colorState.css';

const ColorState = (props) => {

  const handelColor = (color) => {
    if (props.answer.length < 4) {
      props.setAnswer([...props.answer, color]);
    }
    else {
      props.setAnswerList([...props.answerList , props.answer])
      console.log('====================================');
      console.log(props.answerList);
      console.log('====================================');
      props.setAnswer([]);
    }
  }
  return (
    <div className="Color1">
      <span className="Empty" onClick={() => props.setAnswer([])}>X</span>
      <Row value={props.answer} />
      <div className="Color">
        {COLORS.map(color => <span key={color}
          style={{ backgroundColor: color }}
          className="color-choice"
          onClick={() => handelColor(color)}
        >
        </span>)}
      </div>
    </div>
  )
}

export default ColorState;