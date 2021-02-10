class List {
    constructor (){
        this.elements = [];
        this.size = 0
    }

    add (element) {
        this.elements.push(element);
        this.size++
        return this.elements.sort((a, b) => a - b);
    }

    remove (num) {
        if (num < 0 || num > this.elements.length){
            return
        }
        this.size--
        return this.elements.splice(num, 1);
    }

    get (num) {
        if (num < 0 || num > this.elements.length){
            return
        }
        return this.elements[num]
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));