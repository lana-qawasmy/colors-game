import './color-circle.css';

const ColorCircle = (props) => {
    return (

        <div className='color-input-container' style={{ backgroundColor: props.color }}>

        </div>
    );
}

export default ColorCircle;