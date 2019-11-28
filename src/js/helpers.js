import words from './words';
import { wordDiv, missedDiv } from './domLoader';

export const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const getNewWord = lvl => {
  const wordSize = lvl + 2;
  const possibleWords = words.filter(
    word => word.length === wordSize,
  );

  return Array.from(
    possibleWords[getRandomInt(possibleWords.length)],
  );
};

export const drawWord = (word, hits) => {
  wordDiv.innerHTML = '';
  word.forEach(letter => {
    const div = document.createElement('span');
    if (hits.includes(letter)) {
      div.innerText = letter;
    } else {
      div.innerText = '_';
    }
    wordDiv.appendChild(div);
  });
};

export const drawMisses = misses => {
  missedDiv.innerText = misses;
};
