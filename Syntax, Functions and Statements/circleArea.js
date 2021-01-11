function solve(input){
    if (typeof input == "number"){
        let formula = Math.pow(input, 2) * 3.141592;
        console.log(formula.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)
    }
}

//solve(5)
solve('name')