import CirlcePanel from "../circle-panel/circle-panel.component";
import "./answer-list.css";

const AnswerList = (props) => {
  return (
    <div className='list'>
      {props.answers.map((answer, index) => (
        <CirlcePanel key={answer + index} value={answer} calcs={answer.calcs}/>
      ))}
    </div>
  );
};
export default AnswerList;
