import Block from './Block.js'
const size = 16;


const map = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
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
        1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
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
    let value = '#'
    this.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value != 0) {


                switch (value) {
                    case 1:
                        value = '#';
                        break;
                    case 2:
                        value = '-20';
                        break;
                    case 3:
                        value = '-21';
                        break;
                    case 4:
                        value = '-10';
                        break;
                    case 5:
                        value = '+20';
                        break;
                    case 6:
                        value = '+21';
                        break;
                    case 7:
                        value = '+10';
                        break;
                }

                blocks.push (
                    new Block({
                        pos: {
                            x: x * size,
                            y: y * size,
                        },
                        size,
                        value
                    })
                )
            }
        })
    })
    return blocks;
}

let level = []

export default level = map.parse2D(20).createObjectFrom2D(size);
