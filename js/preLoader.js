const preLoader = document.getElementById('preLoader');
const body = document.querySelector('body');

const css = window.document.styleSheets[0];
css.insertRule(`
@keyframes swirl {
    0% {
      transform: rotate(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: rotate(-540deg) scale(0);
      opacity: 0;
    }
}`, css.cssRules.length);

const timeOut = () => {
    body.style.overflow = 'auto'
    preLoader.style.width = 0
    preLoader.style.height = 0
}

preLoader.addEventListener('click', () => {
    preLoader.style.animation = 'swirl 1s ease-in both'
    setTimeout(timeOut, 1000)
})



