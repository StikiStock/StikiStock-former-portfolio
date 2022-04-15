"use strict";

function assignshape1() {
    document.getElementById('description-id').style.animation = "liquify_white 0.2s forwards"
}

function assignshape2() {
    document.getElementById('description-id').style.animation = "liquify_dark 0.2s forwards"
}

function randnum(min, max) {
    Math.floor(Math.random() * (max - min + 1) + min)
}

let order = 2
function order_change() {
    
    order++;
    if (order%2 === 0) {
        document.getElementById('colorselector').innerHTML = 'Light';
        assignshape1()
    }
    if (order%2 === 1) {
        document.getElementById('colorselector').innerHTML = 'Dark';
        assignshape2()
    }
}

let needs_plain_white = ['.darkmode-white'];
let needs_readable_white = ['.darkmode-low-white'];

function toggle_darkmode() {
    document.body.classList.toggle('dark-bg');
    document.getElementById('description-id').classList.toggle('darkmode-description-toggle');
    
    let x, i;
    x = document.querySelectorAll(needs_plain_white);
    for (i = 0; i < x.length; i++) {
        x[i].classList.toggle('white');
    }
    x = document.querySelectorAll(needs_readable_white);
    for (i = 0; i < x.length; i++) {
        x[i].classList.toggle('low-white');
    }
    document.getElementById('self-portrait-id').classList.toggle('self-portrait-invert-reverse');
}

let is = Math.pow(100, -1)
console.log(is)

toggle_darkmode();