import {Box, Triangle, SmallTriangle, Trapezoid} from './Block.js'
const size = 16;


const map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 1, 1, 5, 6, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0,
        1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 
    ]
    
    
Array.prototype.parse2D = function (len) {
    const rows = [];
    for (let i = 0; i < this.length; i += len) {
        rows.push(this.slice(i, i + len))
    }
    return rows;
}

Array.prototype.createObjectFrom2D = function (size) {
    const blocks = [];
    let block;
    this.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value != 0) {
               

                switch (value) {
                    case 1:
                        block = new Box({
                            pos: {
                                x: x * size,
                                y: y * size,
                            },
                            size,
                            value
                        })
                        break;
                    case 2:
                        block = new SmallTriangle({
                            pos: {
                                x: x * size,
                                y: y * size,
                            },
                            size,
                            value

                        })
                        break;
                    case 3:
                        block = new Trapezoid ({
                            pos: {
                                x: x * size,
                                y: y * size,
                            },
                            size,
                            value

                        })
                        break;
                    case 4:
                        block = new Triangle({
                            pos: {
                                x: x * size,
                                y: y * size,
                            },
                            size,
                            value

                        })
                        break;
                    default:
                        block = new Box({
                            pos: {
                                x: x * size,
                                y: y * size,
                            },
                            size,
                            value

                        })
                        break;
                }

                blocks.push(block)
            }
        })
    })
    return blocks;
}

let level = []

export default level = map.parse2D(20).createObjectFrom2D(size); 



