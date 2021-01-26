function solve(arr){
    let catalogue = {};
    for (let line of arr){
        let items = line.split(' : ');
        let row = `${items[0]}: ${items[1]}`
        let letters = items[0].split('')
        let letter = letters[0]
        
        if (!catalogue.hasOwnProperty(letter)){
            catalogue[letter] = [row]
        } else {
            catalogue[letter].push(row)
        }
    }
    
    let sortedArr = Object.entries(catalogue)
    sortedArr.sort((a, b) => a[0].localeCompare(b[0]))

    for (let item of sortedArr){
        console.log(`${item[0]}`)
        item[1].sort((a, b) => a.localeCompare(b))
        .forEach(element => console.log(`  ${element}`));
    }
}

solve(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'])