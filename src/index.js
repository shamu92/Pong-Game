import './game.css';
import Game from './Game'

// game instance
var game = new Game();
const ms = 30;

// self invoking function
(function gameLoop() {
    game.render()
    setTimeout(gameLoop, ms);
}());