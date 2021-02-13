function solve(arr){
    let result = [];
    let counter = 0;

    for (let line of arr){
        counter++
        if (line === 'add'){
            let lastEl = result.length-1;
            lastEl += counter;
            result.push(counter)
        } else if (line === 'remove'){
            result.pop()
        }
    }

    if (result.length > 0){
        for (let line of result){
            console.log(line)
        }
    } else {
        console.log('Empty')
    }   
}
solve(['remove', 
'remove', 
'remove'])

