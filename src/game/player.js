"use strict"

export const ARROW_MAP = {
    37: 'left',
    40: 'up',
    39: 'right',
    38: 'down'
};

export class Player {

    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.x = 0;
        this.y = 0;
        this.speed = 5;

        document.addEventListener('keydown', this.keydown.bind(this));
    }

    keydown(ev) {
        const arrow = ARROW_MAP[ev.keyCode];
        if (arrow === 'left') {
            this.x -= this.speed;
        }
        if (arrow === 'right') {
            this.x += this.speed;
        }
        if (arrow === 'up') {
            this.y += this.speed;
        }
        if (arrow === 'down') {
            this.y -= this.speed;
        }
        console.log(this);

        /*1 =='1' => VRAI
        1 === '1' => FAUX*/
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = 'yellow';
        this.ctx.fill();
    }

    getBorders() {
        return {
            xMin: this.x,
            xMax: this.x + this.width,
            yMin: this.y,
            yMax: this.y + this.height
        };
    }
};