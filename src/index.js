import './css/styles.css';
import home from './home';
import displayMenu from './menu';
import about from './about'
import createHeader from './header';
import createFooter from './footer';

const body = document.body;
const content = document.getElementById('content');


body.prepend(createHeader());

// Initially display home content
content.appendChild(home());

// Event listeners for navigation
const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');

homeButton.addEventListener('click', () => {
    content.innerHTML = ''; // Clear existing content
    content.appendChild(home()); // Load home content
});

menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(displayMenu())
})

aboutButton.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(about())
})

body.appendChild(createFooter())
    // Add similar event listeners for menuButton and aboutButton