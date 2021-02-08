function solve(arr, arg){
    const map = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    }
    return arr.sort(map[arg])
}

//solve([14, 7, 17, 6, 8], 'asc')
solve([14, 7, 17, 6, 8], 'desc')