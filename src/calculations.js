import {COLORS, SIZE} from './data'

/**
 * Generates a random array of colors
 * @returns {array<String>} array of colors
 */
const qGenerator = () => {
  const colors = [];
  let rand;
  for (let i = 0; i < SIZE; i++) {
    rand = Math.floor(Math.random() * 10 ) % COLORS.length; 
    colors.push(COLORS[rand]);
  }
  return colors
}

export {qGenerator}