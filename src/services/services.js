import { COLORS, Circles } from "./data";

const GetRandColor = () => {
    let ret = [];
    for(let i = 0; i < Circles; i++)
    {
        ret.push(parseInt(rand() * 100) % COLORS.length);
    }
    return ret;
};

export default {
    GetRandColor
};