let btn = document.querySelector('button');
let body = document.querySelector('body');

btn.addEventListener('click', () => {
    let x = Math.random()*90;
    let y = Math.random()*90;
    let rot = Math.random()*360;

    let img = document.createElement('img');
    img.setAttribute('src', 'img1.png');
    img.style.height = '200px';
    img.style.position = 'absolute'
    img.style.left = x+'%';
    img.style.top = y+'%';
    img.style.rotate = rot+'deg';
    
    body.appendChild(img);
})