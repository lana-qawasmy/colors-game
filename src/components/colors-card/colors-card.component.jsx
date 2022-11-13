import ColorCircle from '../color-circle/color-circle.component';
import './colors-card.css';

const ColorsCard = (props) => {

    return (

        <div className='card'>
            {
                props.children

            }
        </div>
    );
}

export default ColorsCard;