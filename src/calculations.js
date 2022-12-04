import { COLORS, SIZE } from './data';

/**
 * Generates a random array of colors
 * @returns {array<string>} array of colors
 */
const qGenerator = () => {
  const colors = [];
  let rand;
  for (let i = 0; i < SIZE; i++) {
    rand = Math.floor(Math.random() * 10) % COLORS.length;
    colors.push(COLORS[rand]);
  }
  return colors;
};

/**
 * finds out if user wins by comparing his answer with the expected answer
 * @param {array<string>} expectedAns
 * @param {array<string>} userAns
 * @returns {boolean}
 */
const compare = (expectedAns, userAns) => {
  if (userAns.length !== expectedAns.length) return false;

  let equal = true;
  let i = 0;
  while (equal && i < SIZE) {
    if (userAns[i] !== expectedAns[i])
      equal = false;
    else
      i++;
  }
  return equal;
};
 /**
  * calculates cc and cr
  * @param {array<string>} answer 
  * @param {array<string>} question 
  */
const checkAnswer = (answer, question) => {
  let cc = 0, cr = 0;

  const map = {};
  for (let i = 0; i < question.length; i++) {
    if (!map[question[i]])
      map[question[i]] = 0;
    map[question[i]]++;
  }

  for (let i = 0; i < answer.length; i++) {
    if (map[answer[i]]) {
      cr += 1;
      map[answer[i]]--;
    }
  }

  for (let i = 0; i < answer.length; i++) {
    if (question[i] === answer[i]) {
      cc += 1;
      cr--;
    }
  }
  return { cc, cr }
}

export { qGenerator, compare , checkAnswer};