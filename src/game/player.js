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
        console.log(ev);
        console.log(this);
    }
};