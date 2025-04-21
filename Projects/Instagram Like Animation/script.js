let img = document.querySelector('img');
let icon = document.querySelector('i');

img.addEventListener('dblclick', () => {
    icon.classList.add('animate');
    setTimeout(() => {
        icon.classList.remove('animate');
    }, 1000)
})