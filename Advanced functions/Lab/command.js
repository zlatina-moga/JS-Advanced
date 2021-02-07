function solution() {
    let str = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    function append(strToAppend) {
        str += strToAppend
    }

    function removeStart(n) {
        str = str.substring(n)
    }

    function removeEnd(n) {
        str = str.slice(0, -n)
    }

    function print(params) {
        console.log(str)
    }

}
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();