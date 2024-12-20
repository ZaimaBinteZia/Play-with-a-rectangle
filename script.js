let divelement = document.querySelector('.rectangle');

function changetocircle() {
    divelement.style.borderRadius = '50%';
}

function hide() {
    divelement.style.display = 'none';
}

function show() {
    divelement.style.display = 'block';
}

function changecolor() {
    let colors = ['red', 'blue', 'green', 'indogo', 'yellow', 'purple', 'pink'];

    let random_number = Math.random() * colors.length;
    let floored_random_number = Math.floor(random_number);
    divelement.style.backgroundColor = colors[floored_random_number];
}

divelement.onmouseenter = function () {
    divelement.style.backgroundColor = 'skyblue';
}

divelement.onmouseout = function () {
    divelement.style = 'none'
}

