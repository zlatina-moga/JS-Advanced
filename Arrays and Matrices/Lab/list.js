function solve(arr){
    let counter = 0
    let sorted = arr.sort((a, b) => a.localeCompare(b))

    for (let line of sorted){
        counter++
        console.log(`${counter}.${line}`)
    }
}

solve(["John", "Bob", "Christina", "Ema"])