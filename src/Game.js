import Board from './Board'
import Paddle from './Paddle'
import { player1Keys, player2Keys } from './keys'
import Ball from './Ball'
const gap = 10;

export default class Game {
    constructor() {
        const canvas = document.getElementById('game');
        this.width = canvas.width;
        this.height = canvas.height;
        this.context = canvas.getContext('2d');
        this.context.fillStyle = 'white';

        this.board = new Board(this.height, this.width)

        this.p1 = new Paddle(this.height, 5, "orange", player1Keys)
        this.p2 = new Paddle(this.height, this.width - 10, "blue", player2Keys)

        this.ball = new Ball()

    }

    render() {
        this.board.render(this.context)
        this.p1.render(this.context)
        this.p2.render(this.context)
        this.ball.render(this.context, this.p1, this.p2)

    }
}