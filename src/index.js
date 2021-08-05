import items from './menu.json';
import itemTemplate from './templates/menu-item.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const itemsList = document.querySelector('.js-menu');
const menuItems = itemTemplate(items);
itemsList.innerHTML = menuItems;
const theme = localStorage.getItem('theme');
const themeToggle = document.querySelector('#theme-switch-toggle');

if (theme === 'DARK') {
  themeToggle.checked = true;
  document.body.classList.add(Theme.DARK);
} else {
  document.body.classList.add(Theme.LIGHT);
}

themeToggle.addEventListener('change', () => {
  const bodyElem = document.body;
  const newTheme = bodyElem.classList.contains(Theme.LIGHT) ? 'DARK' : 'LIGHT';
  const oldTheme = !bodyElem.classList.contains(Theme.LIGHT) ? 'DARK' : 'LIGHT';
  bodyElem.classList.remove(Theme[oldTheme]);
  bodyElem.classList.add(Theme[newTheme]);
  localStorage.setItem('theme', newTheme);
});