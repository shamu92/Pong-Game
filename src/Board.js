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
        context.fillStyle = 'url(https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQKxVZhP9zVOcuL2ZWniZPk3BB_DIywl9gI-6lCu9J1Q0KZCW3S)';

        context.fillRect(0, 0, this.width, this.height)
    }
    render(context) {
        context.clearRect(0, 0, this.width, this.height)
            // this.drawBoard(context)
        this.drawLine(context)
    }
}