import { Player } from './player';

class Game {
    constructor(canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        this.width = width;
        this.height = height;
        this.ctx = canvas.getContext('2d');
        this.player = new Player(this.ctx, width / 10, this.height / 10);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    drawBorder() {
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.stroke();
    }

    checkState() {
        const borders = this.player.getBorders();
        return (borders.xMin >= 0 && borders.xMax <= this.width && borders.yMin >= 0 && borders.yMax <= this.height);
    }

    lose() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'red';
        this.ctx.strokeRect(0, 0, this.width, this.height);

        this.ctx.font = '28px serif';
        this.ctx.fillStyle = 'red';
        this.ctx.fillText('Vous avez perdu!', this.width / 3, this.height / 3);
    }


    play() {
        this.clear();
        this.drawBorder();
        this.player.draw();
        //console.log(`test ${this.checkState()}`);
        if (this.checkState()) {
            requestAnimationFrame(this.play.bind(this));
        } else {
            this.lose();
        }
    }
}


const game = new Game(document.getElementsByTagName('canvas')[0], 400, 400);
game.play();