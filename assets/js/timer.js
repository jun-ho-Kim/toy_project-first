const timeStudied = document.getElementById("js-timeStudied"),
    playBtn = document.getElementById("js-playBtn");

const START_ICON = '<i class="fas fa-play"></i>';
const PASUE_ICON = '<i class="fas fa-pause"></i>';


let RECORDING_TIME = false,
    totalSeconds = 0;



const stopTimer = () => {
    totalSeconds;
    // timeStudied.innerHTML = `${minutes}:${seconds}`;
}

const studyTimer = () => {
    let seconds = Math.floor(totalSeconds%60);
    let minutes = Math.floor(totalSeconds/60);
    ++totalSeconds;
    timeStudied.innerHTML = `${minutes}:${seconds}`;
    console.log("study start");
    
}

const handlePlayBtn = () => {
    interval = setInterval(studyTimer, 1000);
    if(!RECORDING_TIME) {
        RECORDING_TIME = true;
        // interval = setInterval(studyTimer, 1000);
        
        console.log("start");
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        // totalSeconds+=5;
        console.log("pause");
        // clearInterval(interval);
        // totalSeconds= "";
        RECORDING_TIME = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        // totalSeconds.
    }
};


function init() {
    // if(!RECORDING_TIME) {
    playBtn.addEventListener("click", handlePlayBtn);
    // } else {
    // playBtn.addEventListener("click", function () { Clock.pause(); });  
    }
// }
init();
