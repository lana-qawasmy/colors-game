import { COLORS } from "../data/data";

const generateRandomNumberArray = () => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr.push(COLORS[Math.floor(Math.random() * COLORS.length)]);
    }
    return arr;
};

export {
    generateRandomNumberArray
}