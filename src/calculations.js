import { COLORS, SIZE } from './data';

/**
 * Generates a random array of colors
 * @returns {array<String>} array of colors
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
 * @param {array<String>} expectedAns
 * @param {array<String>} userAns
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

export { qGenerator, compare };