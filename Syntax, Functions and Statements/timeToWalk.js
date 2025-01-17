function solve(steps, footprint, speedkmh){
    const speed = speedkmh * 1000/3600;
    const distance = steps * footprint;
    const rest = Math.floor(distance / 500)*60
    const time = distance / speed + rest;

    const hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
    const minutes = Math.floor((time - hours*3600) / 60).toFixed(0).padStart(2, '0');
    const seconds = (time - hours*60*60 - minutes*60).toFixed(0).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`
}

//solve(4000, 0.6, 5)
solve(2564, 0.70, 5.5)