export default class Sprite {
    /*
        @param animations: state : { frames }
    */
    constructor({pos, size, spriteSrc, ...animations}) {
        this.pos = pos;

        this.center = this.width / 2;

        this.width = this.height = size;

        if (typeof size === 'object') {
            this.width = size.width;
            this.height = size.height;
        }

        if (spriteSrc) {
            this.img = new Image();
            this.img.src = spriteSrc;
        }
    }

    draw(ctx) {
        if (this.img) {
            ctx.drawImage(this.img, 0, 0, this.width, this.height, this.pos.x, this.pos.y, this.width, this.height);
            return;
        }
        ctx.fillStyle = 'red';
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
}
