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
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
        super.draw(ctx)
    }
}

export class Triangle extends Block {
    constructor({pos, size, value}){
        super({ pos, size, value })
        this.pos 
    }

    draw(ctx){
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y + this.height);
        ctx.lineTo(this.pos.x + this.width, this.pos.y);
        ctx.lineTo(this.pos.x + this.width, this.pos.y + this.height);
        ctx.closePath();
        ctx.fillStyle = 'green';
        ctx.fill();
        super.draw (ctx)
    }
}

export class SmallTriangle extends Block {
    constructor({ pos, size, value }) {
        super({ pos, size, value })
        this.height /= 2
        this.pos.y += this.height;

    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y + this.height);
        ctx.lineTo(this.pos.x + this.width, this.pos.y);
        ctx.lineTo(this.pos.x + this.width, this.pos.y + this.height); 
        ctx.closePath();
        ctx.fillStyle = 'purple';
        ctx.fill();
        super.draw(ctx)
    }
}

export class Trapezoid extends Block {
    constructor({ pos, size, value }) {
        super({ pos, size, value })
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y + this.height / 2);
        ctx.lineTo(this.pos.x + this.width, this.pos.y)
        ctx.lineTo(this.pos.x + this.width, this.pos.y+this.height);
        ctx.lineTo(this.pos.x, this.pos.y + this.height);
        ctx.fillStyle = 'orange';
        ctx.closePath();
        ctx.fill();
        super.draw(ctx)
    }
}