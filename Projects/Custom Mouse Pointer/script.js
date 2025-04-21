let body = document.querySelector('body');
let pointer = document.querySelector('.pointer');

body.addEventListener('mousemove', (evn) => {
    pointer.style.left = evn.clientX+'px';
    pointer.style.top = evn.clientY+'px';
})