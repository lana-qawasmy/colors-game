import { useState, useEffect } from "react";
import CirlcePanel from "../circle-panel/circle-panel.component";
import "./color-panel.css";
import { COLORS } from "../data/data";

const ColorPanel = (props) => {
  const [currentRow, setCurrentRow] = useState([]);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    if (currentRow.length === 4) {
      props.onAnwerSubmit(currentRow);
      setAnswer([]);
    }
  }, [currentRow]);

  const buttonClicked = (color) => {
    if (currentRow.length < 4) {
      setAnswer([...currentRow, color]);
    }
  };
  return (
    <div style={{ pinterEvents: props.disabled ? "none" : "all" }}>
      <span className="cancel" onClick={() => setAnswer([])}>
        X
      </span>
      <CirlcePanel value={currentRow}/>
      <div className="color-panel">
        {COLORS.map((color) => (
          <span
            key={color}
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
