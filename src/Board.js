export default class Board {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    drawLine(context) {
        context.setLineDash([8, 5]);
        context.fill();
        context.beginPath();
        context.moveTo(this.width / 2, 0);
        context.lineTo(this.width / 2, this.height);
        context.lineWidth = 2;
        context.strokeStyle = 'white';
        context.stroke();
    }
    drawBoard(context) {
        context.fillStyle = 'brown';

        context.fillRect(0, 0, this.width, this.height)
    }
    render(context) {
        context.clearRect(0, 0, this.width, this.height)
            // this.drawBoard(context)
        this.drawLine(context)
    }
}