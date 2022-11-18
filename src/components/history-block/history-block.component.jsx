import './history-block.css';
import ColorsCard from '../colors-card/colors-card.component';

const HistoryBlock = () => {
  return (
    <div className='history-block'>
      <ColorsCard stats={{ cc: 0, cr: 2 }} colors={['red', 'green', 'purple', 'orange']} />
      <ColorsCard stats={{ cc: 1, cr: 0 }} colors={['yellow', 'yellow', 'yellow', 'yellow']} />
      <ColorsCard stats={{ cc: 1, cr: 0 }} colors={['blue', 'blue', 'blue', 'blue']} />
    </div>
  );
};

export default HistoryBlock;