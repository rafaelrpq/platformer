
export default class Block {
    constructor({ pos, value, size = 16 }) {
        this.pos = {
            x: pos.x,
            y: pos.y,
        };

        this.value = value

        this.width = size;
        this.height = size;
    }

    draw(ctx) {
        ctx.font = '1rem open sans'
        // ctx.fillText(this.value[0], this.pos.x+this.width/4, this.pos.y + this.height/1.125)
        if (this.value === '#') return
        
        let m = 1 / parseInt(this.value.substring(0, 2))
        let c = parseInt(this.value[2]) * this.height * m
        
        if (m < 0) c = this.height + c
        
       
        ctx.strokeStyle = 'yellow';
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y + c);
        ctx.lineTo(this.pos.x + this.width, this.pos.y + c + this.height * m);
        ctx.closePath();
        ctx.stroke();

        ctx.fillStyle = 'red';
        ctx.fillRect(this.pos.x, this.pos.y + c, 1, 1);
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.pos.x+this.width-1, this.pos.y + c + this.height*m, 1, 1);



    }
}
