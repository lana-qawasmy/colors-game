import "./circle-panel.css";

const initalColors = new Array(4).fill('grey');

const CirlcePanel = (props) => {
  return (
    <div className="circle-panel">
      {initalColors.map((color, index) => {
        <span
          key={color + index}
          className="circle"
          style={{
            backgroundColor: (!props.hidden && props.value[index]) || color
          }}
        ></span>;
      })}
      {props.calcs && (
        <span className="calcs">
          CC: {props.calcs.cc}
          <br />
          CR: {props.calcs.cr}
        </span>
      )}
    </div>
  );
};

export default CirlcePanel;
