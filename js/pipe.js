class Pipe {
    constructor(start) {
        this.height = canvas.height-(100+Math.floor(Math.random()*550)+50);
        this.height2 = this.height - pipeGap;
        this.x = start;
    };

    newPipe() {
        this.height = canvas.height-(100+Math.floor(Math.random()*550)+50);
        this.height2 = this.height - pipeGap;
        this.x = canvas.width + pipeSpacing*2;
    };

    draw() {
        if (!bird.freeze) {
            this.x -= scrollSpeed
        };

        if (this.x + pipeWidth <= 0) {
            this.newPipe()
        };
        ctx.fillStyle = "#00FF00"
        ctx.drawImage(pipebase,this.x,this.height,pipeWidth,canvas.height-this.height-100);
        ctx.drawImage(pipebase,this.x,0,pipeWidth,this.height2);
        ctx.drawImage(pipetop,this.x-5,this.height,pipeWidth+10,50)
        ctx.drawImage(pipetop,this.x-5,this.height2,pipeWidth+10,-50)
    };
};