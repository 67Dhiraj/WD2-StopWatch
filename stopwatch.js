let timer;
let time = 0;
let isRunning = false;

function updateTime() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    document.querySelector('.display').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    time++;
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    time = 0;
    isRunning = false;
    document.querySelector('.display').textContent = '00:00:00';
}

function lapTime() {
    const lapsList = document.querySelector('.laps');
    const lapItem = document.createElement('li');
    lapItem.textContent = document.querySelector('.display').textContent;
    lapsList.appendChild(lapItem);
}

document.querySelector('.start').addEventListener('click', startTimer);
document.querySelector('.pause').addEventListener('click', pauseTimer);
document.querySelector('.reset').addEventListener('click', resetTimer);
document.querySelector('.lap').addEventListener('click', lapTime);
