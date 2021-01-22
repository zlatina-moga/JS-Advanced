function solve(matrix){
    let biggestElement = -1000000000;

    for (let i = 0; i < matrix.length; i++){
        let item = matrix[i]
        for (let j = 0; j < item.length; j++){
            if (item[j] > biggestElement){
                biggestElement = item[j]
            }
        }
    }
    return biggestElement
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]])