function solve(arr){
    let result = [];

    for (let i = 0; i < arr.length; i+=2){
        result[result.length] = arr[i]
    }
    console.log(result.join(' '))
}