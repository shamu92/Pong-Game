export default class Ball {
    constructor(height, width, ) {
        // this.boardHeight 
        this.x = 150; // random x
        this.y = 75; // random y
        this.ballReset()
        this.vy = 1; //Math.floor(Math.random() * 12 - 6); // y direction
        this.vx = 1; //(7 - Math.abs(this.vy)); // x direction
        this.radius = 5;
    }

    drawBall(context) {
        context.fillStyle = "white"
        context.beginPath();
        context.arc(this.x, this.y, 5, 0, Math.PI * 2, true);
        context.closePath();
    }
    paddleCollision(p1, p2) {
        if (this.vx > 0) {

            const inRightEnd = this.x >= p2.x;

            if (inRightEnd) {
                if (this.y >= p2.y + this.radius && this.y <= (p2.y + p2.height)) {
                    this.vx *= -1;
                }
            }

        } else {
            const inLeftEnd = this.x <= p1.x + p1.width;

            if (inLeftEnd) {
                if (this.y >= p1.y - this.radius && this.y <= (p1.y + p1.height)) {
                    this.vx *= -1;
                }
            }
        }

    }


    ballBounce() {
        if (this.y <= 0 + this.radius || this.y >= 150 - this.radius) {
            this.vy *= -1
        }
    }
    ballReset() {
        this.x = 150
        this.y = 75
        this.vy = (Math.floor(Math.random() * 12 - 6)); // y direction
        // this.vx = (7 - Math.abs(this.vy));
        this.vx *= -1
    }

    point() {
        if (this.x >= 300 || this.x <= 0) {

            this.ballReset()

        }


    }
    render(context, p1, p2) {
        this.drawBall(context);
        this.point();
        this.x += this.vx;
        this.y += this.vy;
        this.ballBounce();
        this.paddleCollision(p1, p2);

    }
}