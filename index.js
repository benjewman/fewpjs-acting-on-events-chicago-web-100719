// Your code here
const dodger = document.getElementById("dodger");

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
    dodger.style.left = `${left + 1}px`;
}

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
    else if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    }
});

