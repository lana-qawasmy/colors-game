import "./game.css";
import ItemContainer from "../../components/items-container/item-container.component";
import { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import { COLORS } from "../../data/data";
import { generateRandomNumberArray } from "../../utils/game.util";
import { useRef } from "react";

const GamePage = () => {

  const question = useRef(generateRandomNumberArray());
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState([null, null, null, null]);

  const countCC = (arr) => {
    let cc = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == question.current[i]) cc++;
    }
    return cc;
  }

  const countCR = (arr) => {
    let cr = 0;
    const checkQuestion = [...question.current];
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

  useEffect(() => {
    const checkValid = (a, b) => {
      if (a.length != b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) return false;
      }
      return true;
    }
    if (!selected.some((color) => color == null)) {
      setAnswers([selected, ...answers]);
      setSelected([null, null, null, null]);
    }
  }, [selected]);

  const updateSelected = (color, i) => {
    const newSelected = [...selected];
    newSelected[i] = color;
    setSelected(newSelected);
  };

  return (
    <div className="game-container">
      <Header steps={answers.length}></Header>
      <ItemContainer colors={[null, null, null, null]}></ItemContainer>
      <div className="slider">
        {answers.map((answer) => (
          <ItemContainer key={(Math.floor(Math.random()*10000)).toString()} colors={answer} cc={countCC(answer)} cr={countCR(answer)}></ItemContainer>
        ))}
      </div>
      <ItemContainer colors={selected}></ItemContainer>
      <ItemContainer
        colors={COLORS}
        setSelected={setSelected}
        selected={selected}
        squared
      ></ItemContainer>
    </div>
  );
};

export default GamePage;
