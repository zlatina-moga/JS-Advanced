function solve(obj){
    if (obj.dizziness === true){
        let requiredWater = 0.1 * obj.weight * obj.experience;
        obj.levelOfHydrated += requiredWater
        obj.dizziness = false   
    }
    return obj;
}

solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false })