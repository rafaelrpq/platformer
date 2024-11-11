import Sprite from "./Sprite.js";
import  Block from "./Block.js";

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
                this.pos.y + this.height > block.pos.y
        );
    }

    checkVerticalCollision(blocks) {
        blocks.forEach(block => {
            if (this.checkCollision(block)) {
                let m = 0;
                let c = 0;
                if (block.value !== '#') {
                    if (block.value[0] === '/') {
                        m = 1/ block.value[1]
                        c = m * block.value[2] * block.height
                    } else {
                        m = -1/block.value[1]
                        c = -m * block.value[2] * block.height
                    }
                    // console.log ('m ',m, ' c ',c)
                    let offsetY = Math.abs (this.pos.y * Math.abs(this.pos.x * m) + c) - this.canvas.height 
                    console.log (offsetY)
                    
                }

                if (this.vel.y > 0) {
                    this.pos.y = block.pos.y - this.height -1;
                    this.vel.y = 0;
                }
                if (this.vel.y < 0) {
                    this.pos.y = block.pos.y + block.height +1;
                    this.vel.y = 0;
                }                
            }
        })
    }

    checkHorizontalCollision(blocks) {
        blocks.forEach(block => {
            if (this.checkCollision(block)) {

                if (block.value !== '#') return
                
                if (this.vel.x > 0) {
                   
                    this.vel.x = 0;
                    this.pos.x = block.pos.x - this.width;
                }

                if (this.vel.x < 0) {
                    this.vel.x = 0;
                    this.pos.x = block.pos.x + block.width;
                }

               
            }
        })
    }


    move(gravity, blocks) {
        this.pos.x += this.vel.x;

        this.checkHorizontalCollision(blocks)
        this.applyGravity(gravity)
        this.checkVerticalCollision(blocks)

    }
}
