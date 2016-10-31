export default class Ball {
    constructor(height, width, ) {
        // this.boardHeight 
        this.x = 150; // random x
        this.y = 75; // random y
        this.ballReset()
        this.vy = Math.floor(Math.random() * 12 - 6); // y direction
        this.vx = (7 - Math.abs(this.vy)); // x direction
        this.radius = 5;
    }
    drawBall(context) {
        context.fillStyle = "white"
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        // context.fill();
        context.closePath();
    }
    paddleCollision(p1, p2) {
        if (this.vx > 0) {

            const inRightEnd = this.x >= p2.x - p2.width;

            if (inRightEnd) {
                if (this.y >= p2.y + this.radius && this.y <= (p2.y + p2.height)) {
                    this.vx *= -1;
                    var ping = new Audio('../sounds/pong-01.wav')
                    ping.play()
                }
            }
        } else {
            const inLeftEnd = this.x <= p1.x + p1.width * 2;
            if (inLeftEnd) {
                if (this.y >= p1.y - this.radius && this.y <= (p1.y + p1.height)) {
                    this.vx *= -1;
                    var ping = new Audio('../sounds/pong-02.wav')
                    ping.play()
                }
            }
        }
    }
    ballBounce() {
        if (this.y <= 0 + this.radius || this.y >= 150 - this.radius) {
            this.vy *= -1
            var ping = new Audio('../sounds/pong-03.wav')
                    ping.play()
        }
    }
    ballReset() {
        this.x = 150
        this.y = 75
            // y direction
            // this.vx = (7 - Math.abs(this.vy));
        this.vx *= -1
        this.vy = Math.floor(Math.random() * 12 - 6);

    }

    point() {
        if (this.x >= 300 || this.x <= 0) {
            // this.vy = Math.floor(Math.random() * 12 - 6);
            this.ballReset()

        }
    }
    score(p1Score, p2Score) {
        if (this.x <= 0 + this.radius) {
            this.ballReset();
            p1Score.score++;
        } else if (this.x >= game.width) {
            this.ballReset();
            p2Score.score++
        }
    }

    render(context, p1, p2, p1Score, p2Score) {
        this.point();
        this.x += this.vx;
        this.y += this.vy;
        this.ballBounce();
        this.paddleCollision(p1, p2);
        this.score(p1Score, p2Score)
        this.drawBall(context);
    }
}