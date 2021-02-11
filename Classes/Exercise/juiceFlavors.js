function solve(arr){
    const juices = new Map();
    const bottles = new Map();
    for (let line of arr){
        let [juiceName, juiceQuantity] = line.split(' => ');
        juiceQuantity = Number(juiceQuantity)

        if (!juices.has(juiceName)){
            juices.set(juiceName, juiceQuantity)
        } else {
            juices.set(juiceName, (juices.get(juiceName) + juiceQuantity));
        }

        if (bottles.has(juiceName)){
            bottles.set(juiceName, (juices.get(juiceName)));
        } else if (juices.get(juiceName) >= 1000) {
            bottles.set(juiceName, (juices.get(juiceName)))
        }
    }
    const result = Array.from(bottles).filter(x => x[1] >= 1000);
    result.forEach(kvp => {
        console.log(`${kvp[0]} => ${Math.floor(kvp[1]/1000)}`)
    });
}

solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])