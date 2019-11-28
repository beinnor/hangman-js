import {
  gameoverButton,
  gameoverText,
  gameOverDiv,
} from './domLoader';
import { getNewWord, drawMisses, drawWord } from './helpers';
import { hideHangMan, drawHangMan } from './gallow';
import '../css/style.css';

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
  drawWord(currentWord, hits);
  drawMisses(misses);
  gameOverDiv.style.display = 'none';
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

document.addEventListener('keydown', e => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    checkLetter(e.key);
  }
});

initGame(1);
