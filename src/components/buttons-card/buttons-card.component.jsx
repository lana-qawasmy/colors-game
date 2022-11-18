import './buttons-card.css';
import Card from '../card/card.component';

const ButtonsCard = (props) => {
  return (
    <div className='buttons-card'>
      <Card>
        {props.colors.map((color, index) =>
          <button
            key={'button_' + Date.now() + index}
            style={{ backgroundColor: color }}
          />)}
      </Card>
    </div>
  );
};

export default ButtonsCard;