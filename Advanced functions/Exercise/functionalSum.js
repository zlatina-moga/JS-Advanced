function add(a){
    let sum = 0;
    sum += a;

    function calc(b) {
        sum += b;
        return calc
    }
    calc.toString = () => sum;
    return calc
}


add(1)(6)(-3)