function solve(num1, num2){
    let divisor = 1;

    for (let i = 1; i <= num2; i++){
        if (num1 % i == 0 && num2 % i == 0){
            divisor = i
        }
    }
    console.log(divisor)
}

solve(15, 5)
//solve(2154, 458)