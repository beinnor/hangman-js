import lame from './lame';

const h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('Hello Basic Webpack Setup'));

const outputBox = document.createElement('div');


const button = document.createElement('BUTTON');
button.appendChild(document.createTextNode('Click Me!'));

button.addEventListener('click', () => {
  lame(outputBox, 'Hallaisen!');
});

document.body.appendChild(h1);
document.body.appendChild(button);
document.body.appendChild(outputBox);
