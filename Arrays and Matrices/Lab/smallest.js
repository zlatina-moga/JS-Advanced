function solve(arr){
    arr.sort((a, b) => a-b);
    let smallest = arr.slice(0, 2);
    return smallest.join(' ')
}
solve([30, 15, 50, 5])