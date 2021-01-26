function solve(arr){
    let products = {}
    for (let line of arr){
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!products.hasOwnProperty(product)){
            products[product] = {town, price}
        }
        if (products[product].price > price){
            products[product] = {town, price}
        }
    }
    for (let line in products){
        console.log(`${line} -> ${products[line].price} (${products[line].town})`)
    }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])