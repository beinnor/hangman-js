import { popUp, logIt } from './helpers';

const h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('Hello Basic Webpack Setup'));


const button = document.createElement('BUTTON');
button.appendChild(document.createTextNode('Click Me!'));

button.addEventListener('click', () => {
  popUp('ouch!');
  logIt('User just pressed the button!');
});

document.body.appendChild(h1);
document.body.appendChild(button);
