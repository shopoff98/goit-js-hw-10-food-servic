import menu from '../menu.json';
import menuCardsTempl from './templates/menu-cards.hbs';
import './sass/main.scss';


const menuCardsList = document.querySelector('.js-menu');
const checkboxEl = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



checkboxEl.addEventListener('change', onChangeTheme);



const menuCards = makeListCards(menu);
menuCardsList.insertAdjacentHTML('beforeend', menuCards);

function makeListCards(cards) {
    return menuCardsTempl(cards)
};

function onChangeTheme(e) {
    if (e.target.checked) {
        bodyEl.classList.add('dark-theme');
        localStorage.removeItem('LIGHT');
        localStorage.setItem('DARK', theme.DARK)
    }
    else {
        bodyEl.classList.remove('dark-theme');
        localStorage.removeItem('DARK');
        localStorage.setItem('LIGHT', theme.LIGHT)
    }
    
}



function defaultTheme() {
    if (localStorage.getItem('DARK')) {
        bodyEl.classList.add('dark-theme');
        checkboxEl.checked = true;
    }
}

defaultTheme()