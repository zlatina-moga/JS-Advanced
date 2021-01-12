function solve(fruit, weight, price){
    let kgWeight = weight / 1000
    let money = price * kgWeight
    console.log(`I need $${money.toFixed(2)} to buy ${kgWeight.toFixed(2)} kilograms ${fruit}.`)
}

//solve('orange', 2500, 1.8)
solve('apple', 1563, 2.35)