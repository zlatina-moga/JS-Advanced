function addItem() {
    const input = document.getElementById('newItemText').value;
    let newLi = document.createElement('li');
    newLi.textContent = input;
    const ulElement = document.getElementById('items');
    ulElement.appendChild(newLi)
}