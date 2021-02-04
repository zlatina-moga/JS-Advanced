function addItem() {
    const inputText = document.getElementById('newItemText').value;
    const inputValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option');
    const parent = document.getElementById('menu');
    parent.appendChild(option);
    option.textContent = inputText + ' ' + inputValue;

    
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = ''
}