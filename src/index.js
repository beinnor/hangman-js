
const h1 = document.createElement('h1');
h1.appendChild(document.createTextNode('Hello Basic Webpack Setup'));


const button = document.createElement('BUTTON');
button.appendChild(document.createTextNode('Click Me!'));

const clickHandler = () => {
  alert('You clicked me!');
}

button.addEventListener('click', clickHandler);

document.body.appendChild(h1);
document.body.appendChild(button);
