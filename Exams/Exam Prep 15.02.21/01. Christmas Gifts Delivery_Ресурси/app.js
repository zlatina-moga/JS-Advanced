function solution() {
    const [gifts, sent, discarded] = document.querySelectorAll('section ul')
    const input = document.querySelector('input')
    document.querySelector('div button').addEventListener('click', add);

    function add(){
        const name = input.value;
        input.value = '';

        const element = createElement('li', name, 'gift');
        const sendButton = createElement('button', 'Send', 'sendButton')
        const discardButton = createElement('button', 'Discard', 'discardButton')
        element.appendChild(sendButton);
        element.appendChild(discardButton)

        sendButton.addEventListener('click', () => sendGifts(name, element));
        discardButton.addEventListener('click', () => discardGifts(name, element))

        gifts.appendChild(element);

        Array.from(gifts.children)
             .sort((a, b) => a.textContent.localeCompare(b.textContent))
             .forEach(g => gifts.appendChild(g))

    }

    function sendGifts(name, element){
        element.remove();
        const el = createElement('li', name, 'div')
        sent.appendChild(el)
    }

    function discardGifts(name, element){
        element.remove();
        const el = createElement('li', name, 'div')
        discarded.appendChild(el)
    }

    function createElement(type, content, className){
        const result = document.createElement(type)
        result.textContent = content;
        if (className){
            result.className = className
        }
        return result;
    }
}