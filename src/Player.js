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

    // checkSlopeCollision(block) {
    //     // Calcula o coeficiente angular (m)
    //     const m = -(block.height/ block.value[1]) / (block.width); 
      
    //     console.log (block.value, m)
    //     // Calcula o coeficiente linear (c)
    //     const c = block.pos.y - m * block.pos.x;
      
    //     // Posição x do ponto de referência do sprite
    //     const spriteX = this.pos.x + this.width / 2;
      
    //     // Calcula a coordenada y da reta na posição x do sprite
    //     const slopeY = m * spriteX + c;
      
    //     // Posição y do ponto de referência do sprite
    //     const spriteY = this.pos.y + this.height;
      
    //     // Detecta a colisão
    //     if (spriteY > slopeY) {
    //       // Colisão detectada
      
    //       // Calcula a diferença entre as coordenadas y
    //       const differenceY = spriteY - slopeY;
      
    //       // Ajusta a posição y do sprite (fração = 1 neste exemplo)
    //       this.pos.y -= differenceY;
      
    //       // Impede o movimento vertical do sprite
    //       this.vel.y = 0;
    //     }
    //   }

    checkVerticalCollision(blocks) {
        blocks.forEach(block => {
            if (this.checkCollision(block)) {

                if (block.value !== '#') {
                    let ang = this.vel.x > 0 ? 1 : -1;

                    let m =  (1 / block.value[1]); 
                    let c = block.height -( m * block.height * block.value[2])

                    let center = this.pos.x + this.width / 2;

                    let offsetX = block.pos.x - center;
                    

                    this.pos.y += offsetX;
                    this.vel.y = 0;
                    

                    console.log (block.value, m, c, offsetX)

                    return
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
