import './dot.css';
import { setUserInput,userInput } from '../../../data/data';

const Dot = (props) =>{
const handleClick =(color) =>{
    setUserInput(color);
    console.log(userInput);
    props.setUserInput([...userInput]);
};

return(
    <button className={props.color ==='grey'?"disabled-dot":"dot"}
     style={{backgroundColor: props.color}} onClick={() => handleClick(props.color)}
     disabled={props.state}
     ></button>
);
};

export default Dot;