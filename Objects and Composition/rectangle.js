function rectangle (width, height, color){
    const rectangle = {
        width,
        height,
        color,
        calcArea(){
           const area = this.width * this.height;
           return area;
        }
    }
    return rectangle;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
