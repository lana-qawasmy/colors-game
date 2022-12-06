import AnAnswer from '../answer/answer';
import './container.css';

const TopContainer = (props) => {
    return(
        <div className='top-container'>
            {props.answer.map((ans, index) => <AnAnswer key={index} colors={ans.colors} result={ans.result} />)}
        </div>
    )
}

export default TopContainer;