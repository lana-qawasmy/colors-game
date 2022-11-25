import { useState } from "react";
import COLORS from "../../data";
import "./answerform.css";
import { useEffect } from "react";
import { QUESTION_SIZE } from "../../res/data";

const AnswerForm=(props)=>{
  const points = [...Array(QUESTION_SIZE).keys()];
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
      if (answer.length >= QUESTION_SIZE) {
          props.onSubmit && props.onSubmit(answer);
          setAnswer([]);
      }
      // eslint-disable-next-line
  }, [answer]);

  const handleClick = (color) => {
      if (answer.length < QUESTION_SIZE) {
          setAnswer([...answer, color]);
      }
  }

    return(
      <div className="answer-form">
            <button onClick={() => setAnswer([])}>X</button>
            <div className="row">
                {
                    points.map((p, ind) =>
                        <span key={`${p}_${ind}`} className="point" style={{ backgroundColor: answer[ind] || 'grey' }}></span>
                    )
                }
                <div className="stat-placeholder" />
            </div>
            <div className="row answer">
                {
                    COLORS.map((c, ind) =>
                        <span
                            key={`${c}_${ind}`}
                            className="point square"
                            style={{ backgroundColor: c }}
                            onClick={() => handleClick(c)}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default AnswerForm;