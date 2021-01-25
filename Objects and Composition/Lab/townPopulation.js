function solve(arr){
    let registry = {};
    for (let line of arr){
        let [name, population] = line.split(' <-> ');
        population = Number(population)
        if (registry.hasOwnProperty(name)){
            registry[name] += population
        } else {
            registry[name] = population
        }        
    }
    
    for (let key in registry){
        console.log(`${key} : ${registry[key]}`)
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])