class Bird {
    constructor(y) {
        ctx.fillStyle = "#ebdb34";
        this.x = canvas.width*0.25
        this.size = 0.8;
        this.y = y;
        this.yVel = 0;
        this.score = 0;
        this.freeze = false;
        this.width = 90*this.size;
        this.height = 75*this.size;
    };
    
    update() {
        this.checkCollision();
        if (!(this.y + this.yVel <= 0)) {
            if (!this.freeze) {
                this.y += this.yVel;
            };
        } else {
            this.y -= this.y-2
            this.yvel = 0;
        };
        if (!this.freeze) {
            this.yVel += gravity;
        };
        this.draw();
    };

    draw() {
        ctx.fillStyle = "#e1ff00";
        ctx.strokeStyle = "#e1ff00";
        if (!this.freeze) {
            if (this.yVel > 15) {
                ctx.drawImage(bird13,this.x,this.y,125*this.size,65*this.size)
            } else if (this.yVel > 14.5) {
                ctx.drawImage(bird12,this.x,this.y,125*this.size,65*this.size)
            } else if (this.yVel > 14) {
                ctx.drawImage(bird11,this.x,this.y,125*this.size,65*this.size)
            } else if (this.yVel > 13.5) {
                ctx.drawImage(bird10,this.x,this.y,125*this.size,65*this.size)
            } else if (this.yVel > 13) {
                ctx.drawImage(bird9,this.x,this.y,125*this.size,65*this.size)
            } else if (this.yVel > 12.5) {
                ctx.drawImage(bird8,this.x,this.y,125*this.size,65*this.size)
            } else if (this.yVel > 12) {
                ctx.drawImage(bird7,this.x,this.y,125*this.size,65*this.size)
            } else if (this.yVel > 11.5) {
                ctx.drawImage(bird6,this.x,this.y,125*this.size,65*this.size)
            } else if (this.yVel > 11) {
                ctx.drawImage(bird5,this.x,this.y,125*this.size,65*this.size)
            } else if (this.yVel > 10.5) {
                ctx.drawImage(bird4,this.x,this.y,125*this.size,65*this.size)
            } else if (this.yVel > 10) {
                ctx.drawImage(bird3,this.x,this.y,125*this.size,65*this.size)
            } else if (this.yVel > 9.5) {
                ctx.drawImage(bird2,this.x,this.y,125*this.size,65*this.size)
            } else if (this.yVel <= 9) {
                ctx.drawImage(bird1,this.x,this.y,125*this.size,65*this.size)
            };
        };
    };

    jump() {
        this.yVel = -jumpHeight;
    };

    checkCollision() {
        //ground
        if (this.y >= canvas.height-100) {
            this.death();
            this.y = canvas.height-100;
        };

        //bottom pipe
        if ((this.y+this.height >= pipe.height && this.x + this.width >= pipe.x && this.x + 27 <= pipe.x + pipeWidth) || (this.y+this.height>= pipe2.height && this.x + this.width >= pipe2.x && this.x + 27 <= pipe2.x + pipeWidth)) {
            this.death();
        };

        //top pipe
        if ((this.x + this.width >= pipe.x && this.x + 27 <= pipe.x + pipeWidth && this.y <= pipe.height2) || (this.x + this.width >= pipe2.x && this.x + 27 <= pipe2.x + pipeWidth && this.y <= pipe2.height2)) {
            this.death();
        };

    };

    death() {
        this.freeze = true;
        ctx.font = "100px Arial";
        ctx.fillStyle = "#000000";
        ctx.drawImage(playbtn,canvas.width/2 - 151,500)
        window.addEventListener("click", ((evt => {
            if (this.freeze) {
                this.y = canvas.height/2
                this.yVel = 0;
                this.score = 0;
                this.freeze = false;
                setup()
            } else {
                this.jump()
            };

        })));
    };
};