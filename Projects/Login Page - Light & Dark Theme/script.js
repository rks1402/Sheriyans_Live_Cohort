let theme = document.querySelector('.theme');

theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        theme.innerHTML = 'Light UI';
        theme.style.color = '#fff';
        localStorage.setItem('theme', 'Dark');
    }
    else {
        theme.innerHTML = 'Dark UI';
        theme.style.color = '#111';
        localStorage.setItem('theme', 'Light');
    }
})