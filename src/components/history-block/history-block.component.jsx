import './history-block.css';
import ColorsCard from '../colors-card/colors-card.component';

const HistoryBlock = (props) => {
  return (
    <div className='history-block'>
      {props.history?.map((card, index) => {
        console.log('card-stats', card.states);
        return <ColorsCard
          key={"Card_" + Date.now() + index}
          stats={card.states}
          colors={card.colors}
        />;
      })}
    </div>
  );
};

export default HistoryBlock;
