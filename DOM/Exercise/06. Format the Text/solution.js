function solve() {
    const strInput = document.getElementById('input').value;
    let element = document.getElementById('output');

    let input = strInput.split('.').filter((i) => i.length > 0);
    
    for (let i = 0; i < input.length; i+= 3){
        let arr = [];
        for (let y = 0; y < 3; y++){
            if (input [i + y]) {
                arr.push(input[i + y])
            }
        }
        let paragraph = arr.join('. ') + ".";
        element.innerHTML += `<p>${paragraph}</p>`
    }
}