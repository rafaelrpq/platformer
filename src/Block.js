
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
    }
}
