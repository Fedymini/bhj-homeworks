let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let deadCount = 0;
let lostCount = 0;

function resetGame() {
    deadCount = 0;
    lostCount = 0;
    dead.textContent = deadCount;
    lost.textContent = lostCount;
}

for (let i = 1; i <= 9; i++) {
    let hole = document.getElementById(`hole${i}`);
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            deadCount++;
            dead.textContent = deadCount;
        } else {
            lostCount++;
            lost.textContent = lostCount;
        }

        if (deadCount === 10) {
            alert('Вы победили!');
            resetGame();
        } else if (lostCount === 5) {
            alert('Вы проиграли!');
            resetGame();
        }
    };
}