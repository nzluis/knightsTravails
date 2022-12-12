const Square = (position, path) => {
    if (position[0] < 0 || position[0] > 7 || position[1] < 0 || position[1] > 7) {
        return null;
    }
    return {position, path}
}

const knightMoves = function(start, end) {
    let queue = []
    queue.push(Square(start, [start]))
    let square = queue.shift()
    while (square.position[0] !== end[0] || square.position[1] !== end[1]) {
        let moves = [
            [square.position[0] + 1, square.position[1] + 2],
            [square.position[0] + 1, square.position[1] - 2],
            [square.position[0] + 2, square.position[1] - 1],
            [square.position[0] + 2, square.position[1] + 1],
            [square.position[0] - 1, square.position[1] + 2],
            [square.position[0] - 1, square.position[1] - 2],
            [square.position[0] - 2, square.position[1] - 1],
            [square.position[0] - 2, square.position[1] + 1],
        ]
        moves.forEach((move) => {
            let vertex = Square(move, square.path.concat([move]))
            if (vertex) queue.push(vertex)
        })
        square = queue.shift()
    }
    console.log( `Shortest path (${square.path.length -1} steps) to get to target:`)
    square.path.forEach((position) => {
        console.log(position)
    })
}
knightMoves([0, 0], [2, 1]);
knightMoves([3, 3], [4, 3]);
knightMoves([0, 0], [7, 7]);