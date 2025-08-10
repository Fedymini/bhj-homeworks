let timer = document.getElementById('timer');
let time = parseInt(timer.textContent);

function updateTimer() {
    timer.textContent = time;
    
    if (time <= 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    } else {
        time--;
    }
}

let timerInterval = setInterval(updateTimer, 1000);