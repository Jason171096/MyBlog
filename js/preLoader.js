window.onload = function () {

  const preLoader = document.getElementById('preLoader');
  const tag = document.getElementById('tagPreloader')
  const bounce = document.getElementById('bouncePreloader')
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

  const timeOutDisplay = () => {
    body.style.overflow = 'auto'
    preLoader.style.width = 0
    preLoader.style.height = 0
    bounce.style.width = 0
    bounce.style.height = 0
  }
  const animationDisplay = () => {
    preLoader.style.animation = 'swirl 1s ease-in both'
    setTimeout(timeOutDisplay, 1000)
  }

  const changeTagText = () => {
    tag.innerText = "READY TO START!"
  }

  function load() {
    setTimeout(changeTagText, 2500)
    setTimeout(animationDisplay, 3000)
    
  }

  load()
}


