import "./game.css";
import ItemContainer from "../../components/items-container/item-container.component";
import { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import { COLORS } from "../../data/data";
import { generateRandomNumberArray } from "../../utils/game.util";
import { useRef } from "react";

const GamePage = () => {

  const [question, setQuestion] = useState([null, null, null, null]);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState([null, null, null, null]);
  const [isWin, setWin] = useState(false)
  console.log(question)

  const updateSelected = (sel) => {
    if (isWin == false) setSelected(sel)
  }

  useEffect(() => {
    setQuestion(generateRandomNumberArray());
  }, [])


  const calculateDifference = () => {
    const checkQuestion = [...question];
    const countCC = (arr) => {
      let cc = 0;
      for (let i = 0; i < checkQuestion.length; i++) {
        if (arr[i] == checkQuestion[i]) {
          cc++;
          checkQuestion[i] = null;
        }
      }
      return cc;
    }

    const countCR = (arr) => {
      let cr = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == checkQuestion[i]) continue;
        for (let j = 0; j < checkQuestion.length; j++) {
          if (i == j || checkQuestion[j] == null) continue;
          if (arr[i] == checkQuestion[j]) {
            checkQuestion[j] = null;
            cr++;
          }
        }
      }
      return cr;
    }
    return [countCC, countCR];
  }

  const [countCC, countCR] = calculateDifference();

  useEffect(() => {
    if (!selected.some((color) => color == null)) {
      setAnswers([selected, ...answers]);
      const [countCC] = calculateDifference();
      if (countCC(selected) == 4) setWin(true);
      setSelected([null, null, null, null]);
    }
  }, [selected]);

  return (
    <div className="game-container">
      <Header steps={answers.length}></Header>
      <ItemContainer colors={isWin ? question : [null, null, null, null]}></ItemContainer>
      <div className="play-again-container">
        {isWin &&
          <button
            onClick={() => {
              console.log(`resetting`)
              setQuestion(generateRandomNumberArray());
              setWin(false)
              setSelected([null, null, null, null])
              setAnswers([])
            }}
            className="play-again">Play Again!</button>}
      </div>
      <div className="slider">
        {answers.map((answer) => {
          const cc = countCC(answer)
          const cr = countCR(answer)
          return <ItemContainer key={(Math.floor(Math.random() * 10000)).toString()} colors={answer} cc={cc} cr={cr}></ItemContainer>
        })}
      </div>
      <ItemContainer colors={selected}></ItemContainer>
      <ItemContainer

        colors={COLORS}
        setSelected={updateSelected}
        selected={selected}
        squared
      ></ItemContainer>
    </div>
  );
};

export default GamePage;
