import { COLORS, Circles } from "./data";
const GetRandColor = () => {
    let ret = [];
    for (let i = 0; i < Circles; i++) {
        ret.push(COLORS[parseInt(Math.random() * 100) % COLORS.length]);
    }
    return ret;
};

const GetState = (answer) => {

    return { cc: 5, cr: 0 };
};

export {
    GetState,
    GetRandColor
};