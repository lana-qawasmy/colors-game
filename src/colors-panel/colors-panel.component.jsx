import { useState, useEffect } from "react";
import AnswerPanel from "../answer-panel/answer-panel.component";
import "./color-panel.css";
import { COLORS, SIZE } from "../data/data";

const ColorPanel = (props) => {
  const colorFields = [...Array(SIZE)];
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    if (answer.length >= SIZE) {
      props.onAnswerSubmit && props.onAnswerSubmit(answer);
      setAnswer([]);
    }
  }, [answer]);

  const chooseColor = (color) => {
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
        {colorFields.map((c, index) => (
          <span
            key={`${c}_${index}`}
            className="color-field"
            style={{ backgroundColor: answer[index] || "grey" }}
          ></span>
        ))}
        <div className="statistics"></div>
      </div>
      <div className="color-panel">
        {COLORS.map((color, index) => (
          <span
            key={`${color}_${index}`}
            className={`box ${color}`}
            style={{ backgroundColor: color }}
            onClick={() => chooseColor(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPanel;
