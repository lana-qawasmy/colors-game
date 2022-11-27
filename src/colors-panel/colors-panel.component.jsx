import { useState, useEffect } from "react";
import CirlcePanel from "../circle-panel/circle-panel.component";
import "./color-panel.css";
import { COLORS, SIZE } from "../data/data";

const ColorPanel = (props) => {
  const circles = [...Array(SIZE)];
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    if (answer.length >= SIZE) {
      props.onAnswerSubmit && props.onAnswerSubmit(answer);
      setAnswer([]);
    }
  }, [answer]);

  const buttonClicked = (color) => {
    if (answer.length < SIZE) {
      setAnswer([...answer, color]);
    }
  };
  return (
    <div className="main">
      <button className="cancel" onClick={() => setAnswer([])}>
        X
      </button>
      <div className="row">
        {circles.map((c, index) => (
          <span
            key={`${c}_${index}`}
            className="circle"
            style={{ backgroundColor: answer[index] || "grey" }}
          ></span>
        ))}
        <div className="calcs"></div>
      </div>
      <div className="color-panel">
        {COLORS.map((color, index) => (
          <span
            key={`${color}_${index}`}
            className={`box ${color}`}
            style={{ backgroundColor: color }}
            onClick={() => buttonClicked(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPanel;
