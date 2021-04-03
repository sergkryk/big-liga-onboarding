const loader = document.querySelector('.loader');
const hero = document.querySelector('.hero');

function hideLoader() {
  loader.classList.add('loader--hidden');
  hero.classList.add('hero--visible');
}

function removeListeners() {
  document.removeEventListener('keypress', onEnterKeyPressHideLoader);
  loader.removeEventListener('touchstart', onTouchHideLoader);
}

function onEnterKeyPressHideLoader(evt) {
  if (evt.keyCode === 13) {
    hideLoader();
    removeListeners();
  }
}

function onTouchHideLoader() {
  hideLoader();
  removeListeners();
}

function initLoaderListeners() {
  if (loader && hero) {
    document.addEventListener('keypress', onEnterKeyPressHideLoader);
    loader.addEventListener('click', onTouchHideLoader);
  }
}

export {initLoaderListeners};
