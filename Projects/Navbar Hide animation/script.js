let nav = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if(st > lastScrollTop){
        nav.classList.add('hide');
    }
    else if(st < lastScrollTop){
        nav.classList.remove('hide');
    }

    lastScrollTop = st <= 0 ? 0 : st;
});