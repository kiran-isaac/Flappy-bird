class Ground {
    constructor(x) {
        this.x = x;
    };

    draw() {
        if (!bird.freeze) {
            this.x -= scrollSpeed;
        };
        ctx.drawImage(floor,this.x,canvas.height-100,canvas.width,250)
        if (this.x === -canvas.width) {
            this.x = canvas.width;
        };
    };
};