function solve(arr) {
    arr.sort(criteria);
    arr.forEach(element => {
        console.log(element)
    });

    function criteria(current, next){
        if (current.length === next.length){
            return current.localeCompare(next);
        }
        return current.length - next.length;
    }
}

