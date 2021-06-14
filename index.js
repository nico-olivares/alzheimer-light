const disclaimer = document.getElementById('disclaimer');
const light = document.getElementById('light');
const button = document.getElementById('light-button');
const pop = new Audio('./pop.mp3');

// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

oscillator.type = 'square';
oscillator.frequency.setValueAtTime(30000, audioCtx.currentTime); // value in hertz
oscillator.connect(audioCtx.destination);


button.addEventListener('click', () => {
    disclaimer.style.display = 'none';
    light.style.display = 'block';
    interval();
})

function turnOn() {
    light.style.backgroundColor = 'white';
    
}

function turnOff() {
    light.style.backgroundColor = 'black';
    
}

let offMoment = () => {
    setTimeout(turnOff, 1);
}

let interval = () => {
    setInterval(() => {
        turnOn();
        // pop.play();
        offMoment();
    }, 25);
}