function solve(arr, rotation){
    for (let i = 0; i < rotation; i++){
        let element = arr.pop();
        arr.unshift(element);
    }
    console.log(arr.join(' '))
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)