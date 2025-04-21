let moods = [
    { title: 'Happy', emoji: '😊', bgcolor: 'yellow' },
    { title: 'Sad', emoji: '😢', bgcolor: 'blue' },
    { title: 'Angry', emoji: '😡', bgcolor: 'red' },
    { title: 'Crazy', emoji: '🤪', bgcolor: 'green' },
    { title: 'Confused', emoji: '😕', bgcolor: 'purple' },
    { title: 'Hungry', emoji: '😋', bgcolor: 'orange' },
    { title: 'Tired', emoji: '😴', bgcolor: 'black' },
    { title: 'Very Happy', emoji: '😄', bgcolor: 'pink' },
    { title: 'Very Sad', emoji: '😭', bgcolor: 'brown' },
    { title: 'Laughing', emoji: '😂', bgcolor: 'gray' }
];

let box = document.querySelector('.box');
let emoji = document.querySelector('.box h3');
let title = document.querySelector('.box p');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let mood = moods[Math.floor(Math.random() * moods.length)];

    box.style.backgroundColor = mood.bgcolor;
    emoji.innerHTML = mood.emoji;
    title.innerHTML = mood.title;

    // Adjust text color for better visibility
    if (['yellow', 'pink', 'orange'].includes(mood.bgcolor)) {
        title.style.color = 'black';  // Dark text for bright backgrounds
    } else {
        title.style.color = 'white';  // Light text for dark backgrounds
    }
});
