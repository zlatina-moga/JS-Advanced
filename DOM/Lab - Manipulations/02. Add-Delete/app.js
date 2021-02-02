function addItem() {
    const input = document.getElementById('newItemText').value;
    const newLi = createElement('li', input);

    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove();
    })
    newLi.appendChild(deleteBtn)

    document.getElementById('items').appendChild(newLi);
    input.value = '';

    function createElement(type, content){
        const element = document.createElement(type);
        element.textContent = content
        return element;
    }
}