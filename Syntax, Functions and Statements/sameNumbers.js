function solve(num){
    let sum = 0;
    let numToStr = num.toString()
    let result = '';

    for (let i = 0; i < numToStr.length; i++){
        sum += Number(numToStr[i])
        for (let j = i + 1; j < numToStr.length; j++){
            if (numToStr[i] !== numToStr[j]){
                result = 'false'
            }
        }
    }
    if (result === 'false'){
        console.log('false')
    } else {
        console.log('true')
    }
    console.log(sum)
}
//solve(2222222)
solve(1234)