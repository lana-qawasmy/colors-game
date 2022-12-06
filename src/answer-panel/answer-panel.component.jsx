import "./answer-panel.css";

const AnswerPanel = (props) => {
  console.log(props.colors);
  return (
    <div className="answer-panel">
      {props.colors.map((color, index) => (
        <span
          key={color + "_" + index}
          className="answer"
          style={{ backgroundColor: props.hidden ? "grey" : color }}
        ></span>
      ))}
      {!props.question ? (
        <span className="statistics">
          CC: {props.statistics.cc}
          <br />
          CR: {props.statistics.cr}
        </span>
      ) : (
        <div className="statistics"></div>
      )}
    </div>
  );
};

export default AnswerPanel;
