function focus() {
    const input = Array.from(document.querySelectorAll('input'))
    input.forEach(element => {
        element.addEventListener('focus', onFocus);
        element.addEventListener('blur', onBlur)
    });

    function onFocus(ev){
        ev.target.parentNode.className = 'focused';
    }

    function onBlur(ev){
        ev.target.parentNode.className = '';
    }
}