import './colors-card.css';
import Card from '../card/card.component';
import { DEFAULT_COLOR, SIZE } from '../../data';



const ColorsCard = (props) => {

  // let answers;
  // if (props.colors?.length === SIZE) {
  //   console.log('received as : ', props.colors);
  //   answers = props.colors;
  // }
  // else {
  //   console.log('hhhh', props.colors);
  //   answers = new Array(4).fill(DEFAULT_COLOR);
  // }

  //   const renderCards = (arr) => ['grey', 'grey', 'grey', 'grey'].map((color, index) =>
  //   <div
  //     className='circle'
  //     key={"color_" + Date.now() + index}
  //     style={{ backgroundColor: arr[index] || color}}
  //   />
  // );

  console.log(props.colors);

  return (
    <div className='colors-card'>
      <Card>
        {props.withClearBtn && <button className='clear-btn'>x</button>}
        {/* {renderCards(props.colors)} */}

        {
          Array(SIZE).fill(DEFAULT_COLOR).map((defaultColor, index) =>
            <div
              className='circle'
              key={"color_" + Date.now() + index}
              style={{ backgroundColor: props.colors[index] || defaultColor }}
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