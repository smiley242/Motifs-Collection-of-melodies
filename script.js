console.log("welcome to Motifs");

// Initialize variables
let songIndex=0;
let audioElement = new Audio('songs/Bad_Liar.mp3');
let myProgressBar =document.getElementById('myProgressBar');
let masterSongName =document.getElementById('masterSongName');


let songs=[
    {songName: 'Bad Liar',filePath: 'songs/Bad_Liar.mp3', coverPath: 'covers/Bad_Liar.jpeg'},
    {songName: 'At My Worst',filePath: 'songs/At_My_Worst.mp3', coverPath: 'covers/At_My_Worst.jpeg'},
    {songName: 'Believer',filePath: 'songs/Believer.mp3', coverPath: 'covers/Believer.jpeg'},
    {songName: 'Chor Bazari',filePath: 'songs/chor_Bazari.mp3', coverPath: 'covers/chor_Bazari.jpeg'},
    {songName: 'Dandelions',filePath: 'songs/Dandelions.mp3', coverPath: 'covers/Dandelions.jpeg'},
    {songName: 'Kinna Sona',filePath: 'songs/Kinna_Sona.mp3', coverPath: 'covers/Kinna_Sona.jpeg'},
    {songName: 'Mann Bharrya',filePath: 'songs/Mann_Bharrya.mp3', coverPath: 'covers/Mann_Bharrya.jpeg'},
    {songName: 'Only you',filePath: 'songs/Only_you.mp3', coverPath: 'covers/Only_you.jpeg'},
    {songName: 'Radioactive',filePath: 'songs/Radioactive.mp3', coverPath: 'covers/Radioactive.jpeg'},
    {songName: 'Sakhiyaan',filePath: 'songs/Sakhiyaan.mp3', coverPath: 'covers/Sakhiyaan.jpeg'},
    {songName: 'Tokyo Drift',filePath: 'songs/Tokyo_Drift.mp3', coverPath: 'covers/Tokyo_Drift.jpeg'},
]

// audioElement.play();

// handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate',()=>{
// update seek bar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays= ()=>
{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
     
        })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=11){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})