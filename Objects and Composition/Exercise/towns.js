function solve(arr){
    let result = [];
    let heading = arr.shift()
    for (let line of arr){
        let [city, Latitude, paramenter] = line.split(' | ');
        let Town = city.split('| ')[1]
        Latitude = Number(Latitude).toFixed(2);
        Latitude = Number(Latitude)
        let Longitude = paramenter.split(' |')[0]
        Longitude = Number(Longitude).toFixed(2);
        Longitude = Number(Longitude)
        result.push({Town, Latitude, Longitude})
    }
    console.log(JSON.stringify(result))
}

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])