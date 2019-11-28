import words from './words';

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
  const wordDiv = document.querySelector('.correctLetters');
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
  const missedDiv = document.querySelector('.wrongLetters');
  missedDiv.innerText = misses;
};
