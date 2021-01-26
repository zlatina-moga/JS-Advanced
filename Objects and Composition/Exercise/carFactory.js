function solve(car){
    if (car.power <= 90){
        delete car.power;
        car.engine = {power: 90, volume: 1800}
    } else if (car.power <= 120){
        delete car.power;
        car.engine = {power: 120, volume: 2400}
    } else if (car.power <= 200){
        delete car.power;
        car.engine = {power: 200, volume: 3500}
    }

    let color = car.color;
    delete car.color
    let type = car.carriage;
    delete car.carriage;
    car.carriage = {'type': type, 'color': color}

    
    let wheel = car.wheelsize;
    delete car.wheelsize;
    if (wheel % 2 !== 0){
        car.wheels = [wheel, wheel, wheel, wheel]
    } else {
        wheel -= 1;
        car.wheels = [wheel, wheel, wheel, wheel]
    }
    return car;
}

solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 })