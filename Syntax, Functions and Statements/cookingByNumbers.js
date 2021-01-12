function solve(...params){
    let num = Number(params.shift())
    let result = 0

    let commands = params.shift();
    while (params > 0){
        if (commands === 'chop'){
            result = num / 2;
            console.log(result)
        } else if (commands === 'dice'){
            let iteractions = 0
            for (let i = result; i > 0; i--){
                if (i % 3 === 0){
                result -= i
                iteractions += 1
                }
            }
            result = iteractions
            console.log(result)
        } else if (commands === 'spice'){
            result += 1
            console.log(result)
        } else if (commands === 'bake'){
            result *= 3
            console.log(result)
        } else if (commands === 'fillet'){
            result -= result * 0.2
            console.log(result)
        }
        commands = params.shift();
    }
}

solve ('32', 'chop', 'chop', 'chop', 'chop', 'chop')