import './history-block.css';
import ColorsCard from '../colors-card/colors-card.component';

const history = [
  {
    stats: { cc: 0, cr: 2 },
    colors: ['red', 'green', 'purple', 'orange']
  },
  {
    stats: { cc: 1, cr: 0 },
    colors: ['yellow', 'yellow', 'yellow', 'yellow']
  },
  {
    stats: { cc: 1, cr: 0 },
    colors: ['blue', 'blue', 'blue', 'blue']
  }
];

const HistoryBlock = (props) => {
  return (
    <div className='history-block'>
      {props.history?.map((card, index) => <ColorsCard key={"Card_" + Date.now() + index} 
      stats={card.stats || {cc:0, cr:0}} colors={card.colors} />)}
    </div>
  );
};

export default HistoryBlock;
