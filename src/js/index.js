import { getNewWord, drawMisses, drawWord } from './helpers';
import { hideHangMan, drawHangMan } from './gallow';
import '../css/style.css';

const gameOverText = document.querySelector('.gameOverText');
const gameOverButton = document.querySelector('#gameOverButton');
const gameOverDiv = document.querySelector('.gameOver');
const keyBoard = document.querySelector('.keyboard');
const keyBoardKeys = document.querySelectorAll('.keyboard__key');

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
  keyBoard.style.display = 'block';
  drawWord(currentWord, hits);
  drawMisses(misses);
  gameOverDiv.style.display = 'none';
  keyBoard.style.display = 'block';
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
      keyBoard.style.display = 'none';
      gameOverDiv.style.display = 'flex';
      gameOverText.innerText = 'You Win!';
      gameOverButton.innerText = 'Continue?';
      gameOverButton.addEventListener('click', () => {
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
      keyBoard.style.display = 'none';
      gameOverDiv.style.display = 'flex';
      gameOverText.innerText = 'You Loose!';
      gameOverButton.innerText = 'Restart?';
      gameOverButton.addEventListener('click', () => {
        initGame(1);
      });
    }
  }
};

keyBoardKeys.forEach(key => {
  key.addEventListener('click', e => {
    checkLetter(e.target.innerText.toLowerCase());
  });
});

document.addEventListener('keydown', e => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    keyBoardKeys.forEach(key => {
      if (key.innerText === e.key.toUpperCase()) {
        key.classList.toggle('keyboard__key--active');
        key.click();
        setTimeout(() => {
          key.classList.toggle('keyboard__key--active');
        }, 100);
      }
    });
  }
});

initGame(1);
