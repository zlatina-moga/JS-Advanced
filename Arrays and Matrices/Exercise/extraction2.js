function solve(arr) {
    return arr.reduce(function (result, currentValue, index, initialArr){
        if (currentValue >= result[result.length - 1] || result.length === 0) {
            result.push(currentValue)
        }
        return result;
    }, [] )
}