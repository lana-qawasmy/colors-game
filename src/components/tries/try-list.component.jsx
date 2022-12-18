import './try-list.css';
import Row from '../row/row';
import { listOfTries } from '../../data/data';

const TryList = (props) =>{
    const tries =[listOfTries().list];
    props.setUserInput(listOfTries().userInput);
    const evaluationscc = [listOfTries().evalcc];
    const evaluationscr = [listOfTries().evalcr];
    return(
        <div className="tries-container">
            list container
            {tries.map((item,index) =>{
                return(
                    <div key={Math.random()*2000}>
                        {
                            item.map((current) =>
                            {
                                return (
                                    <div key={Math.random()*2000}>
                                        <Row  key={Math.random()*511} data ={current} state = {true}></Row>
                                        <span key={Math.random()*1000}>cc: {evaluationscc[index]}</span>
                                        <span key={Math.random()*2000}>cr: {evaluationscr[index]}</span>
                                    </div>
                                )
                            })
                        }

                    </div>
                    
                ) 
            })}
        </div>
    );
    
};

export default TryList;