import { COLORS, Circles } from "./data";
const GetRandColor = (Arr) => {
    let ret = [];
    for (let i = 0; i < Circles; i++) {
        ret.push(parseInt(Math.random() * 100) % COLORS.length);
    }
    console.log(ret);
    Arr = ret;
};

export default {
    GetRandColor
};