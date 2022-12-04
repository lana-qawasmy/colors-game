import './colors-card.css';
import Card from '../card/card.component';
import { DEFAULT_COLOR, SIZE } from '../../data';

const ColorsCard = (props) => {
  return (
    <div className='colors-card'>
      <Card>
        {props.withClearBtn && <button
          className='clear-btn'
          onClick={() => {props.onClick()}}
        >
          x
        </button>}
        {
          Array(SIZE).fill(DEFAULT_COLOR).map((defaultColor, index) =>
            <div
              className='circle'
              key={"color_" + Date.now() + index}
              style={{ backgroundColor: !props.hide && (props.colors[index] || defaultColor) }}
            />)
        }
        {props.stats && <div className='stats'>
          CC: <b>{props.stats.cc}</b> <br /> CR: <b>{props.stats.cr}</b>
        </div>}
      </Card>
    </div>
  );
};
export default ColorsCard;