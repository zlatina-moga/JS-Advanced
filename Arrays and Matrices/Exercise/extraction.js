function solve(arr){
    let result = [];

    for (let i = 0; i < arr.length; i++){
        let element = arr[i]

        if (element >= result[result.length-1] || result.length === 0){
            result.push(element)
        }
        
    }
    return result;
}