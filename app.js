const section = document.querySelector('section');
const logo = document.querySelector('.logo');
const FPS = 80;

section.style.height = window.innerHeight + 'px';
section.style.width = window.innerWidth + 'px';

let xPosition = 10;
let yPosition = 10;
let xSpeed = 3;
let ySpeed = 3;

function update(){
    logo.style.left = xPosition + 'px';
    logo.style.top = yPosition + 'px';
}


setInterval(() => {
    if(xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0){
        logo.style.fill = randomColor()
        xSpeed = -xSpeed;
    }
    if(yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0){
        logo.style.fill = randomColor()
        ySpeed = -ySpeed;
    }
    xPosition += xSpeed;
    yPosition += ySpeed;
    update();
}, 1000/FPS);

function randomColor(){
    let color = '#';
    color += Math.random().toString(16).slice(2,8).toUpperCase();
    return color;
}

window.addEventListener('resize', ()=>{
    xPosition = 10;
    yPosition = 10;
    section.style.height = window.innerHeight + 'px';
    section.style.width = window.innerWidth + 'px';
})