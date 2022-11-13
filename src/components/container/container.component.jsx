import './container.css';
import Panel from '../panel/panel.component';
import Answer from '../answer/answer';

const Container = () => {
    const answerColors = [];
    return (
        <div className='container'>
            <div className='bottom'>
                <Answer />
                <Panel />
            </div>
        </div>
    )
}

export default Container;