function solve() {
    const first = document.getElementById('text').value;
    const second = document.getElementById('naming-convention').value;
    let endResult = '';
    const regexp = /\w+/gm;
    let matched = first.match(regexp);


    if (second === 'Pascal Case'){
        for (let line of matched){
            let item = line.toLowerCase().slice(1);
            let letter = line[0].toUpperCase()
            result = letter+item
            endResult+=result
        }
        document.getElementById('result').textContent = endResult

    } else if (second === 'Camel Case'){
        for (let line of matched){
          let item = line.toLowerCase().slice(1);
          let letter = line[0].toUpperCase()
          result = letter+item
          endResult+=result
        }
        let firstLetter = endResult[0].toLowerCase();
        let word = endResult.slice(1);
        let endingResult = firstLetter+word
        document.getElementById('result').textContent = endingResult
    } else {
        document.getElementById('result').textContent = 'Error!'
    }
}