import {debounce} from '../utils/debounce';

const MAX_TABLET_WIDTH = 1024;

const description = document.querySelector('.hero__description');
const hero = document.querySelector('.hero');
let isTablet = window.innerWidth < MAX_TABLET_WIDTH;

function addHeroListeners() {
  hero.addEventListener('click', heroClickHandler);
}

function removeHeroListeners() {
  hero.removeEventListener('click', heroClickHandler);
}

function addDescrListeners() {
  description.addEventListener('click', descriptionClickHandler);
}

function removeDescrListeners() {
  description.removeEventListener('click', descriptionClickHandler);
}

const descriptionClickHandler = debounce((evt) => {
  evt.stopPropagation();
  description.classList.remove('active');
  removeDescrListeners();
  addHeroListeners();
}, 200);

const heroClickHandler = debounce(() => {
  description.classList.add('active');
  removeHeroListeners();
  addDescrListeners();
}, 200);

const onResizeHeroListenerToggler = debounce(() => {
  isTablet = window.innerWidth < MAX_TABLET_WIDTH;
  if (isTablet) {
    addHeroListeners();
  } else {
    removeHeroListeners();
  }
}, 500);

function onStartAddHeroListeners() {
  if (description && hero && isTablet) {
    hero.addEventListener('click', heroClickHandler);
  }
}

function onResizeAddHeroListeners() {
  window.addEventListener('resize', onResizeHeroListenerToggler);
}

export {onStartAddHeroListeners, onResizeAddHeroListeners};
