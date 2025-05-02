class MusicPlayer {
    constructor(songs, audioElement){
        this.songs = songs;
        this.audioElement = audioElement;
        this.currentIndex = 0;
    }
    
    loadSong() {
        let currentSong = this.songs[this.currentIndex];
        this.audioElement.setAttribute('src', currentSong.src);
        document.querySelector('.song-title').innerHTML = currentSong.title;
        document.querySelector('.song-artist').innerHTML = currentSong.artist;
    
        // Fetch song as Blob and read tags - logic for displaying song's cover photo
        fetch(currentSong.src)
            .then(response => response.blob())
            .then(blob => {
                jsmediatags.read(blob, {
                    onSuccess: function(tag) {
                        let picture = tag.tags.picture;
                        if (picture) {
                            let base64String = "";
                            for (let i = 0; i < picture.data.length; i++) {
                                base64String += String.fromCharCode(picture.data[i]);
                            }
                            let imageUri = `data:${picture.format};base64,${btoa(base64String)}`;
                            document.querySelector("img").src = imageUri;
                        } else {
                            document.querySelector("img").src = "https://images.unsplash.com/photo-1611001716885-b3402558a62b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // fallback
                        }
                    },
                    onError: function(error) {
                        console.log("Error reading tags: ", error);
                    }
                });
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
    }    
    

    play() {
        this.audioElement.play();
    }

    pause() {
        this.audioElement.pause();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.songs.length;
        this.loadSong();
        this.play();
    }

    previous() {
        this.currentIndex = (this.currentIndex - 1 + this.songs.length) % this.songs.length;
        this.loadSong();
        this.play();
    }

}

const songs = [
    {
        title : 'Illuminati',
        artist : 'Sushin Shyam',
        src : 'Songs/Illuminati.mp3'
    },
    {
        title : 'Wake Me Up',
        artist : 'aleemrk',
        src : 'Songs/Wake Me Up.mp3'
    },
    {
        title : 'Jo Tum Mere Ho',
        artist : 'Anuv Jain',
        src : 'Songs/Jo Tum Mere Ho.mp3'
    },
    {
        title : 'Udd Gaye',
        artist : 'Ved',
        src : 'Songs/Udd Gaye.mp3'
    },

]


let playPauseBtn = document.querySelector(".play-pause");
let playIcon = document.querySelector("#play");
let pauseIcon = document.querySelector("#pause");
let audioPlayer = document.querySelector("#audio-player")
let playNextIcon = document.querySelector("#next");
let playPreviousIcon = document.querySelector("#previous");
let progressBar = document.querySelector("#progress-bar");
let currentTimeEl = document.querySelector("#current-time");
let durationEl = document.querySelector("#duration");
let volumeBar = document.querySelector("#volume-bar")

let musicPlayer = new MusicPlayer(songs, audioPlayer)
musicPlayer.loadSong();

playPauseBtn.addEventListener('click', () => {
    if(playIcon.hidden){
        musicPlayer.pause();
        playIcon.hidden = false;
        pauseIcon.hidden = true;
    }else{
        musicPlayer.play();
        playIcon.hidden = true;
        pauseIcon.hidden = false;
    }
})

playNextIcon.addEventListener('click', () => {
    musicPlayer.next();
    if(!playIcon.hidden){
        playIcon.hidden = true;
        pauseIcon.hidden = false;
    }    
})

playPreviousIcon.addEventListener('click', () => {
    musicPlayer.previous();
    if(!playIcon.hidden){
        playIcon.hidden = true;
        pauseIcon.hidden = false;
    }   
})

audioPlayer.addEventListener('timeupdate', () => {
    let current = audioPlayer.currentTime;
    let duration = audioPlayer.duration;

    if(!isNaN(duration)){
        progressBar.value = (current / duration) * 100;
        currentTimeEl.innerText = formatTime(current);
        durationEl.innerText = formatTime(duration);
    }
})

// helper function
function formatTime(seconds){
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

// let's user to select progress
progressBar.addEventListener('input', () => {
    let duration = audioPlayer.duration;

    if(!isNaN(duration)){
        let selectedTime = (progressBar.value / 100) * duration;
        audioPlayer.currentTime = selectedTime;
    }
})

// let's user to select volume level
volumeBar.addEventListener('input', () => {
    audioPlayer.volume = volumeBar.value
})

// auto-play next song
audioPlayer.addEventListener('ended', () => {
    musicPlayer.next();
})


// dark mode - light mode

let modeBtn = document.querySelector(".mode");
modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        modeBtn.innerHTML = 'LIGHT <i class="ri-sun-line"></i>';
        localStorage.setItem('theme', 'dark');
    }else {
        modeBtn.innerHTML = 'DARK <i class="ri-moon-fill"></i>';
        localStorage.setItem('theme', 'light');
    }
})

// check theme-mode previously used and apply according to that

if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark');
    modeBtn.innerHTML = 'LIGHT <i class="ri-sun-line"></i>';
}else if(localStorage.getItem('theme') === 'light'){
    document.body.classList.remove('dark');
    modeBtn.innerHTML = 'DARK <i class="ri-moon-fill"></i>';
}