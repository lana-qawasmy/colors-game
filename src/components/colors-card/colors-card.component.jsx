import './colors-card.css';
import Card from '../card/card.component';
import { DEFAULT_COLOR, SIZE } from '../../data';

const renderCards = (arr) => arr.map((color, index) =>
  <div
    className='circle'
    key={"color_" + Date.now() + index}
    style={{ backgroundColor: color }}
  />
);

const ColorsCard = (props) => {
  let answers;
  if (props.colors?.length === SIZE)
    answers = props.colors;
  else
    answers = new Array(4).fill(DEFAULT_COLOR);

  return (
    <div className='colors-card'>
      <Card>
        {props.withClearBtn && <button className='clear-btn'>x</button>}
        {renderCards(answers)}
        {props.stats && <div className='stats'>
          CC: <b>{props.stats.cc}</b> <br /> CR: <b>{props.stats.cr}</b>
        </div>}
      </Card>
    </div>
  );
};
export default ColorsCard;