export default class Paddle {
    constructor(boardHeight, x, color, keys) {
        this.width = 5;
        this.height = 50;
        this.speed = 15;
        this.color = color;
        this.x = x;
        this.y = (boardHeight / 2) - (this.height / 2);
        this.keys = keys;
        console.log(this.keys.up)
        document.addEventListener('keydown', event => this.keyListener(event));
    }
    keyListener(event) {
        switch (event.keyCode) {
            case this.keys.up:
                this.moveUp();
                break;
            case this.keys.down:
                this.moveDown();
                break;
            default:
                return;
        }
    }
    moveUp() {
        if (this.y >= 3)
            this.y -= this.speed;
        // console.log(this.y)
    }
    moveDown() {

        if (this.y <= 97)
            this.y += this.speed;
        console.log(this.y)

    }
    render(context) {
        context.fillStyle = this.color
        context.fillRect(
            this.x, this.y,
            this.width, this.height
        )
    }
}