import './css/styles.css';

function createHeader() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Adoye Restaurant';
    header.appendChild(h1);

    const nav = document.createElement('nav');
    const home = document.createElement('button');
    home.textContent = 'Home';
    home.id = 'home';
    const menu = document.createElement('button');
    menu.textContent = 'Menu';
    menu.id = 'menu';
    const about = document.createElement('button');
    about.textContent = 'About';
    about.id = 'about';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(about);
    header.appendChild(nav);

    return header;
}

export default createHeader;