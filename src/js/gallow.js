import svgImage from '../img/gallow_plain.svg';

const gallowContainer = document.querySelector('.gallow');

gallowContainer.innerHTML = svgImage;

const head = document.querySelector('#head');
const face = document.querySelector('#face');
const body = document.querySelector('#body');
const leftArm = document.querySelector('#arm_left');
const rightArm = document.querySelector('#arm_right');
const leftLeg = document.querySelector('#leg_left');
const rightLeg = document.querySelector('#leg_right');

export const hideHangMan = () => {
  head.style.visibility = 'hidden';
  face.style.visibility = 'hidden';
  body.style.visibility = 'hidden';
  leftArm.style.visibility = 'hidden';
  rightArm.style.visibility = 'hidden';
  leftLeg.style.visibility = 'hidden';
  rightLeg.style.visibility = 'hidden';
};

export const drawHangMan = misses => {
  switch (misses) {
    case 1:
      head.style.visibility = 'visible';
      break;
    case 2:
      body.style.visibility = 'visible';
      break;
    case 3:
      leftArm.style.visibility = 'visible';
      break;
    case 4:
      rightArm.style.visibility = 'visible';
      break;
    case 5:
      leftLeg.style.visibility = 'visible';
      break;
    case 6:
      rightLeg.style.visibility = 'visible';
      break;
    case 7:
      face.style.visibility = 'visible';
      break;
    default:
      break;
  }
};
