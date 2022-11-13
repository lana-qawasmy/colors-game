import React from "react";
import './color.css'
import { COLORSARR } from '../../data/ColorsArray/colorsArray'
import { useState } from "react";
const ColorContainer = () => {
    // const colorArray = [...COLORSARR];
    const [answer, setAnswer] = useState([]);
    // console.log(answer);
    const handleCellColor = (colorItem) => {
        if (answer.length < 5) {
            setAnswer([...answer, colorItem])
        }
    }
    return (
        <div className="colorDiv">
            {COLORSARR.map((colorItem) => {
                return <span
                    className="spanColor"
                    key={colorItem}
                    style={{ backgroundColor: colorItem }}
                    onClick={() => handleCellColor(colorItem)}
                />
            })
            }


        </div>
    );
}

export default ColorContainer;