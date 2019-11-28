import {
  gallowContainer,
  head,
  face,
  body,
  leftArm,
  rightArm,
  leftLeg,
  rightLeg,
} from './domLoader';

import svgImage from '../img/gallow_plain.svg';

gallowContainer.innerHTML = svgImage;

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
