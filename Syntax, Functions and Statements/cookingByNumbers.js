function solve(...params){
    let num = Number(params.shift())

    for (let commands of params){
        if (commands === 'chop'){
            num = num / 2;
            console.log(num)
        } else if (commands === 'dice'){
            num = Math.sqrt(num)
            console.log(num)
        } else if (commands === 'spice'){
            num += 1
            console.log(num)
        } else if (commands === 'bake'){
            num *= 3
            console.log(num)
        } else if (commands === 'fillet'){
            num -= num * 0.2
            console.log(num)
        }
    }
}

//solve ('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')