import './history-block.css';
import ColorsCard from '../colors-card/colors-card.component';

const HistoryBlock = () => {
  return (
    <div className='history-block'>
        <ColorsCard stats colors={['red', 'green', 'purple', 'orange']}/>
        <ColorsCard stats colors={['yellow', 'yellow', 'yellow', 'yellow']}/>
        <ColorsCard stats colors={['blue', 'blue', 'blue', 'blue']}/>
    </div>
  );
};

export default HistoryBlock;