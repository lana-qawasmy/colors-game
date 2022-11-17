import { COLORS, Circles } from "./data";
const GetRandColor = () => {
    let ret = [];
    for (let i = 0; i < Circles; i++) {
        ret.push(COLORS[parseInt(Math.random() * 100) % COLORS.length]);
    }
    return ret;
};


const GetState = (answer, HiddenResult) => {
    let cc = 0, cr = 0;
    const map = {};
    for (let i = 0; i < HiddenResult.length; i++) {
        if (!map[HiddenResult[i]])
            map[HiddenResult[i]] = 0;
        map[HiddenResult[i]]++;
    }

    for (let i = 0; i < answer.length; i++) {
        if (map[answer[i]]) {
            cr += 1;
            map[answer[i]]--;
        }
    }

    for (let i = 0; i < answer.length; i++) {
        if (HiddenResult[i] === answer[i]) {
            cc += 1;
            cr--;
        }
    }
    return { cc, cr };
};


export {
    GetState,
    GetRandColor
};