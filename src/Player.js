import Sprite from "./Sprite.js";
import  Block from "./Block.js";

export default class Player extends Sprite {
    constructor ({ pos, size, spriteSrc, animations, canvas }) {
        super ({ pos, size, spriteSrc, animations });
        this.vel = {
            x: 0,
            y: 0,
        }
        this.canvas = canvas
    }

    applyGravity (gravity) {
        this.pos.y += this.vel.y + gravity;
        this.vel.y += gravity;
    }

    checkCollision (block) {
        return (
                this.pos.x < block.pos.x + block.width &&
                this.pos.x + this.width > block.pos.x &&
                this.pos.y < block.pos.y + block.height &&
            this.pos.y + this.height + this.vel.y > block.pos.y
        );
    }

   

    checkVerticalCollision(blocks) {
        blocks.forEach(block => {
            if (this.checkCollision(block)) {

                if (block.value !== '#') {

                    if (block.value.substring(1) === '20') {
                        block.height = 8
                        console.log (block.pos.y, block.height)
                    }

                    let m = (1 / block.value[1]);                   
                    let c = m * block.height * block.value[2]

                    let center = this.pos.x + this.width / 2;

                    // let offsetX = block.pos.x - center;
                    let offsetX = block.pos.x - this.pos.x;
                    
                    let check = m * center + c
                    console.log(`value ${block.value}, check ${check}, m ${m}, c ${c}, offset ${offsetX}`);
                    
                    if (this.pos.y + this.height/2 < check) {
                        this.pos.y = block.pos.y - m * block.height/2 - offsetX;
                        this.vel.y = 0;
                        
    
    
                        return

                    }

                }

                if (this.vel.y > 0) {
                    this.pos.y = block.pos.y - this.height;
                    this.vel.y = 0;
                }
                if (this.vel.y < 0) {
                    this.pos.y = block.pos.y + block.height;
                    this.vel.y = 0;
                }                
            }
        })
    }



    checkHorizontalCollision (blocks) {
        blocks.forEach (block => {
            if (this.checkCollision (block)) {

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


    move (gravity, blocks) {
        this.pos.x += this.vel.x;
        // this.pos.y += this.vel.y;


        this.checkHorizontalCollision (blocks)
        this.applyGravity (gravity)
        this.checkVerticalCollision (blocks)

    }
}
