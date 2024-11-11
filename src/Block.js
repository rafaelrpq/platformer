class Block {
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
        ctx.fillStyle = 'red';
        ctx.font = '1rem open sans'
        ctx.fillText(this.value, this.pos.x+this.width/4, this.pos.y + this.height/1.125)
    }
}

export class Box extends Block {
    constructor({ pos, size, value }) {
        super({ pos, size, value })
    }

    draw(ctx) {
        super.draw(ctx)
    }
}


export class SmallSlopedBox1 extends Block {
    constructor({ pos, size, value }) {
        super({ pos, size, value })
        
        this.m = (1 / 2) * (this.value == 2 ? 1 : -1)
        this.c = 0;

        this.offsetY = Math.abs (this.pos.y) - (Math.abs (this.pos.x) * this.m) + this.c
    }
    
    draw(ctx) {
        super.draw(ctx)
    }
}

export class SmallSlopedBox2 extends Block {
    constructor({ pos, size, value }) {
        super({ pos, size, value })
        this.m = (1 / 2) * (this.value == 3 ? 1 : -1)
        this.c = this.height * m;
    }
    draw(ctx) {
        super.draw(ctx)
    }
}

export class SlopedBox extends Block {
    constructor({pos, size, value}){
        super({ pos, size, value })

        this.m = 1 * (this.value == 4 ? 1 : -1);
        this.c = 0;
    }

    draw(ctx){
        super.draw (ctx)
    }
}