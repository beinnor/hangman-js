import { getNewWord, drawMisses, drawWord } from './helpers';
import { hideHangMan, drawHangMan } from './gallow';
// import '../css/paper.min.css';
import '../css/style.css';

const inputDiv = document.querySelector('#inputDiv');
const gameOverDiv = document.querySelector('#gameOver');

const maxMisses = 6;
let level; // lvl 1 starts with 3 letter words, lvl 2 with 4 letter words and so on
let currentWord;
let misses;
let hits;

const initGame = lvl => {
  level = lvl;
  currentWord = getNewWord(level);
  misses = [];
  hits = [];
  gameOverDiv.style.display = 'none';
  inputDiv.style.display = 'flex';
  drawWord(currentWord, hits);
  drawMisses(misses);
  const levelText = document.querySelector('#levelText');
  gameOverDiv.style.display = 'none';
  levelText.textContent = `Level ${level}`;
  hideHangMan();
};

const checkForWin = () => {
  return currentWord.every(letter => {
    return hits.includes(letter);
  });
};

const checkLetter = letter => {
  if (currentWord.includes(letter)) {
    hits.push(letter);
    drawWord(currentWord, hits);
    if (checkForWin()) {
      gameOverDiv.style.display = 'flex';
      inputDiv.style.display = 'none';
      const gameoverText = document.querySelector('#gameOverText');
      const gameoverButton = document.querySelector(
        '#gameOverButton',
      );
      gameoverText.innerText = 'You Win!';
      gameoverText.className = 'text-success';
      gameoverButton.innerText = 'Continue?';
      gameoverButton.className = 'text-success';
      gameoverButton.addEventListener('click', () => {
        level += 1;
        initGame(level);
      });
    }
  } else {
    if (!misses.includes(letter)) {
      misses.push(letter);
      drawHangMan(misses.length);
    }
    drawMisses(misses);
    if (misses.length > maxMisses) {
      gameOverDiv.style.display = 'flex';
      inputDiv.style.display = 'none';
      const gameoverText = document.querySelector('#gameOverText');
      const gameoverButton = document.querySelector(
        '#gameOverButton',
      );
      gameoverText.innerText = 'You Loose!';
      gameoverText.className = 'text-danger';
      gameoverButton.innerText = 'Restart?';
      gameoverButton.className = 'text-danger';
      gameoverButton.addEventListener('click', () => {
        initGame(1);
      });
    }
  }
};

const charInput = document.getElementById('charInput');

charInput.addEventListener('change', e => {
  e.preventDefault();
  checkLetter(e.target.value);
  charInput.value = '';
});

initGame(1);
