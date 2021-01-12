function solve(input){
    let sum = 0;
    let reciproc = 0;
    let concat = '';
        
    for (let i = 0; i < input.length; i++){
        sum += input[i];  
        reciproc += 1 / input[i];
        concat += input[i];  
    }

    console.log(sum)
    console.log(reciproc)
    console.log(concat)
}

solve([1, 2, 3])