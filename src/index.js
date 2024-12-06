import Player from './Player.js'
import level from './map.js'
import './input.js'
import input from './input.js'


const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');

// canvas.width = 1024;
// canvas.height = 576;

const blocks = level;

canvas.width = 320;
canvas.height = 240;

ctx.imageSmoothingEnabled = false;

const Game = {
    loop : 0,
}

const animations = {
    idle : {
        id     : 0,
        frames : 1,
    },
    up : {
        id     : 1,
        frames : 1,
    },
    run : {
        id     : 2,
        frames : 8,
    },
    run_up : {
        id     : 3,
        frames : 8,
    },
    run_down : {
        id     : 4,
        frames : 8,
    },
    jump : {
        id     : 5,
        frames : 8,
    },
};


const player = new Player ({
    pos : {
        x : 8,
        y : 0
    },
    size: {
        height: 8,
        width: 8
    },
    // spriteSrc : '../res/player.png',
    animations,
    canvas
})

function playerHandler() {
    let xVel = 0.5;
    if (input.keys.LEFT) {
        player.vel.x = -xVel
    } else if (input.keys.RIGHT) {
        player.vel.x = xVel
    } else {
        player.vel.x = 0
    }

    if (input.keys.UP) {
        player.vel.y = -5
    }
    // else if (input.keys.DOWN) {
    //     player.vel.y = 5
    // } else {
    //     player.vel.y = 0
    // }
}

input.handler = playerHandler;


console.log (blocks)

const cenario = new Image()
cenario.src = '../res/cenario.png'

const gravity = .5;

function render () {
    Game.loop = requestAnimationFrame (render)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(cenario, 0, 0)

    // ctx.fillText ('bottom ' + (player.pos.y + player.height),20, 20)
    // ctx.fillText ('x '+player.pos.x+' y '+player.pos.y,20, 40)
    // ctx.fillText ('vx '+player.vel.x +' vy ' + player.vel.y,20, 60)

    blocks.forEach(block => block.draw(ctx))

    // TODO
    input.handler();
    player.move (gravity, blocks)
    player.draw(ctx)
}

render()
