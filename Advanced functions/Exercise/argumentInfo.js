function solve (){
    let result = {};

    for (let arg of arguments){
        console.log(`${typeof(arg)}: ${arg}`);

        if (!result[typeof(arg)]){
            result[typeof(arg)] = 1
        } else {
            result[typeof(arg)] ++
        }
    }
    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);
    sorted.forEach(kvp => {
        console.log(`${kvp[0]} = ${kvp[1]}`)
    })
}

//solve('cat', 42, function () { console.log('Hello world!'); })
solve( { name: 'bob'}, { name: 'pesho'}, 3.333, 9.999, 'dog')