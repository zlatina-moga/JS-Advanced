function solve(arr){
    let smallest = arr.sort((a, b) => a - b);
    let first = smallest.shift()
    let last = smallest.pop()
    let result = []
    result.unshift(first)
    result.push(last)

    while (smallest.length > 0){
        let element = smallest.shift()
        result.push(element)
        let lastEl = smallest.pop()
        result.push(lastEl)
    }
    return result;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])