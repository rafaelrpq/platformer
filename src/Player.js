import Sprite from "./Sprite.js";
import { Box, Triangle, SmallTriangle, Trapezoid } from "./Block.js";

export default class Player extends Sprite {
    constructor({ pos, size, spriteSrc, animations }) {
        super({ pos, size, spriteSrc, animations });
        this.vel = {
            x: 0,
            y: 0,
        }
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


            // Verificação específica para SmallTriangle:
            if (block instanceof SmallTriangle) {
                let m = (-block.height) / block.width;
                let c = (block.pos.y + block.height) - m * block.pos.x;

                let reta = m * playerBottomCenterX + c;

                const playerBottomCenterX = this.pos.x + this.width / 2;
                const playerBottomCenterY = this.pos.y + this.height;

                // Verifica se o ponto inferior central do jogador está abaixo da hipotenusa
                if (playerBottomCenterY > reta) {
                    // Ajusta a posição vertical do jogador
                    this.pos.y = reta - this.height;
                }

                // const blockCenterX = block.pos.x + block.width / 2;
                // const playerCenterX = this.pos.x + this.width / 2;
                // const relativeX = blockCenterX - playerCenterX;

                // // Ajusta a posição vertical do jogador com base na inclinação do triângulo
                // this.pos.y = block.pos.y - block.height/2 - this.height - Math.abs(relativeX);
            }

            if (this.checkCollision(block)) {
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
