function solve(arr) {
    let result = [];
    for (let line of arr){
        let [command, word] = line.split(' ');
        if (command === 'add'){
            result.push(word)
        } else if (command === 'remove'){
            let index = result.indexOf(word)
            result.splice(index, 1)
        } else if (command === 'print'){
            console.log(result.join(','))
        }
    }
}

solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])