let input = {}

export default input = {
    keys: {
        UP : false,
        DOWN : false,
        LEFT : false,
        RIGHT : false,
    },

    listener: (e) => {
        let status = e.type === 'keydown' ? true : false
        switch (e.code) {
            case 'ArrowUp':
                input.keys.UP = status
                break;
            case 'ArrowDown':
                input.keys.DOWN = status
                break;
            case 'ArrowLeft':
                input.keys.LEFT = status
                break;
            case 'ArrowRight':
                input.keys.RIGHT = status
                break;
        }
    },

    handler : () => null,

}


addEventListener ('keydown', input.listener)
addEventListener ('keyup', input.listener)