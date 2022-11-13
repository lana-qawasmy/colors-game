import "./game.css";
import ItemContainer from "../../components/items-container/items-container.component";
import { useEffect, useState } from "react";
import Header from "../../components/header/header.component";
import { COLORS } from "../../data/data";

const GamePage = () => {
  const generateRandomNumberArray = () => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(COLORS[Math.floor(Math.random() * COLORS.length)]);
    }
    return arr;
  };

  const question = generateRandomNumberArray();
  console.log(`q ${question}`)
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState([
    `#ACACAC`,
    `#ACACAC`,
    `#ACACAC`,
    `#ACACAC`,
  ]);

  useEffect(() => {}, []);

  useEffect(() => {
    const checkValid = (a, b) => {
        if (a.length != b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) return false;
        }
        return true;
    }

    const getArrayDifference = () => {
        let cc = 0, cr = 0;
        for (let i = 0; i < selected.length; i++) {
            if (selected[i] == question[i]) cc++;
        }
        for (let i = 0; i < answers.length; i++) {
            for (let j = 0; j < selected.length; j++) {
              if (i == j) continue;
                if (answers[i] == selected[j]) cr++;
            }
        }
        return [cc, cr];
    }

    const [cc, cr] = getArrayDifference();
    if (!selected.some((color) => color == `#ACACAC`)) {
      setAnswers([...answers, selected]);
      setSelected([`#ACACAC`, `#ACACAC`, `#ACACAC`, `#ACACAC`]);
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
      <ItemContainer colors={selected}></ItemContainer>
      <div className="slider">
        {answers.map((answer) => (
          <ItemContainer colors={answer} cc={1} cr={2}></ItemContainer>
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
