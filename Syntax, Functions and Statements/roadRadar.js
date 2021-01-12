function solve(speed, area){
    if (area === 'motorway'){
        let speedLimit = 130
        if (speed > 0 && speed <= speedLimit){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        } else if (speed > speedLimit){
            let difference = speed - speedLimit
            if (difference > 0 && difference < 21){
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`)
            } else if (difference > 20 && difference < 41){
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
            } else {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
            }
        }
    } else if (area === 'interstate'){
        let speedLimit = 90
        if (speed > 0 && speed <= speedLimit){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        } else if (speed > speedLimit){
            let difference = speed - speedLimit
            if (difference > 0 && difference < 21){
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`)
            } else if (difference > 20 && difference < 41){
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
            } else {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
            }
        }
    } else if (area === 'city'){
        let speedLimit = 50;
        if (speed > 0 && speed <= speedLimit){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        } else if (speed > speedLimit){
            let difference = speed - speedLimit
            if (difference > 0 && difference < 21){
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`)
            } else if (difference > 20 && difference < 41){
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
            } else {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
            }
        }
    } else if (area === 'residential'){
        let speedLimit = 20;
        if (speed > 0 && speed <= speedLimit){
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        } else if (speed > speedLimit){
            let difference = speed - speedLimit
            if (difference > 0 && difference < 21){
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`)
            } else if (difference > 20 && difference < 41){
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
            } else {
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
            }
        }
    }
}

//solve(40, 'city')
solve(200, 'motorway')