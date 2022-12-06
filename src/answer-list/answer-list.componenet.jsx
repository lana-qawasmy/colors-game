import AnswerPanel from "../answer-panel/answer-panel.component";
import "./answer-list.css";

const AnswerList = (props) => {
  return (
    <div className="list">
      {props.answers.map((ans, index) => (
        <AnswerPanel key={ans + index} value={ans.answer} statistics={ans.statistics} />
      ))}
    </div>
  );
};
export default AnswerList;
