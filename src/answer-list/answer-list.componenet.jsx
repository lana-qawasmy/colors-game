import CirlcePanel from "../circle-panel/circle-panel.component";
import "./answer-list.css";

const AnswerList = (props) => {
  return (
    <div className="list">
      {props.answers.map((ans, index) => (
        <CirlcePanel key={ans + index} value={ans.answer} calcs={ans.calcs} />
      ))}
    </div>
  );
};
export default AnswerList;
