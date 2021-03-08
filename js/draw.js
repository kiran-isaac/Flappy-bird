const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const framerate = 10;
const gravity = 1;
const scrollSpeed = 5;
const jumpHeight = 12;
const pipeGap = 200;
const pipeWidth = 100;
const pipeSpacing = 100;

const background = new Image();
background.src = "images/background.png";
const playbtn = new Image();
playbtn.src = "images/playbtn.png";
const floor = new Image();
floor.src = "images/floor.png";
const bird1 = new Image();
bird1.src = "images/bird1.png";
const bird2 = new Image();
bird2.src = "images/bird2.png";
const bird3 = new Image();
bird3.src = "images/bird3.png";
const bird4 = new Image();
bird4.src = "images/bird4.png";
const bird5 = new Image();
bird5.src = "images/bird5.png";
const bird6 = new Image();
bird6.src = "images/bird6.png";
const bird7 = new Image();
bird7.src = "images/bird7.png";
const bird8 = new Image();
bird8.src = "images/bird8.png";
const bird9 = new Image();
bird9.src = "images/bird9.png";
const bird10 = new Image();
bird10.src = "images/bird10.png";
const bird11 = new Image();
bird11.src = "images/bird11.png";
const bird12 = new Image();
bird12.src = "images/bird12.png";
const bird13 = new Image();
bird13.src = "images/bird13.png";
const pipebase = new Image();
pipebase.src = "images/pipe.png.";
const pipetop = new Image();
pipetop.src = "images/pipetop.png.";

var bird;
var ground;
var ground2;
var pipe;
var pipe2;

const draw = function() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(background,0,0,canvas.width+20,canvas.height+20);
    ground.draw();
    ground2.draw();
    pipe.draw();
    pipe2.draw();
};


const setup = function() {
    ground = new Ground(0);
    ground2 = new Ground(canvas.width);
    pipe = new Pipe(canvas.width);
    pipe2 = new Pipe(canvas.width + 325+ pipeSpacing);
};

window.addEventListener("keydown", ((evt => {
    const key  = evt.key.replace("Arrow", "");
    if (key === " " || key === "Up" || key === "w") {
        bird.jump();
    };
})));

ctx.drawImage(background,0,0,canvas.width+20,canvas.height+20);
ctx.drawImage(bird1,canvas.width*0.25,canvas.height*0.5)
setTimeout(function() {
    window.setInterval(() => {
        draw();
        bird.update();
    }, framerate);

    bird = new Bird(canvas.height/2)
    setup()
},0);