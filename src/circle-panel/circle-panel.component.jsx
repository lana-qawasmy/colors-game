import "./circle-panel.css";

const CirlcePanel = (props) => {
  return (
    <div className="circle-panel">
      {props.value.map((color, index) => (
        <span
          key={color + "_" + index}
          className="circle"
          style={{ backgroundColor: props.hidden ? "grey" : color }}
        ></span>
      ))}
      {!props.question ? (
        <span className="calcs">
          CC: {props.calcs.cc}
          <br />
          CR: {props.calcs.cr}
        </span>
      ) : (
        <div className="calcs"></div>
      )}
    </div>
  );
};

export default CirlcePanel;
