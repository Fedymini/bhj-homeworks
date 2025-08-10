let cookie = document.getElementById('cookie');
let clicker__counter = document.getElementById('clicker__counter');

cookie.onclick = function() {
    clicker__counter.textContent++;
    if (clicker__counter.textContent % 2 === 0) {
        cookie.width = 200;
    } else {
        cookie.width = 250;
    }
}       

