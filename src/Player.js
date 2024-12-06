import Sprite from "./Sprite.js";
import Block from "./Block.js";

export default class Player extends Sprite {
    constructor({ pos, size, spriteSrc, animations, canvas }) {
        super({ pos, size, spriteSrc, animations });
        this.vel = {
            x: 0,
            y: 0,
        }
        this.canvas = canvas
    }

    applyGravity(gravity) {
        this.pos.y += this.vel.y + gravity;
        this.vel.y += gravity;
    }

    checkCollision(block) {
        return (
            this.pos.x < block.pos.x + block.width &&
            this.pos.x + this.width > block.pos.x &&
            this.pos.y < block.pos.y + block.height &&
            this.pos.y + this.height + this.vel.y > block.pos.y
        );
    }


    collideSlope(block) {
        let m = 1 / parseInt(block.value.substring(0, 2))
        let c = parseInt(block.value[2]) * block.height * m

        if (m > 0) c =  c - block.height

        let ratio = this.height / this.width

        console.log (ratio)

        this.pos.y = block.pos.y - (this.height/ratio)*1.5 + c - ((this.pos.x - block.pos.x) * Math.abs(m))
        this.vel.y = 0
        return;

    }


    checkVerticalCollision(blocks) {
        blocks.forEach(block => {
            if (this.checkCollision(block)) {

                if (block.value === '#') {
                    if (this.vel.y > 0) {
                        this.pos.y = block.pos.y - this.height;
                        this.vel.y = 0;
                    }

                    if (this.vel.y < 0) {
                        this.pos.y = block.pos.y + block.height;
                        this.vel.y = 0;
                    }

                    return
                }

                this.collideSlope(block)
            }
        });
    }



    checkHorizontalCollision(blocks) {
        blocks.forEach(block => {
            if (this.checkCollision(block)) {

                if (block.value !== '#') return

                if (this.vel.x > 0) {
                    this.pos.x = block.pos.x - this.width;
                    this.vel.x = 0;
                }

                if (this.vel.x < 0) {
                    this.pos.x = block.pos.x + block.width;
                    this.vel.x = 0;
                }


            }
        })
    }


    move(gravity, blocks) {
        this.pos.x += this.vel.x;
        // this.pos.y += this.vel.y;


        this.checkHorizontalCollision(blocks)
        this.applyGravity(gravity)
        this.checkVerticalCollision(blocks)

    }
}
