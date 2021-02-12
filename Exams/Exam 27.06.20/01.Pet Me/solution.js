function solve() {
    let buttonElement = document.querySelector('#container button');
    let inpulElements = Array.from(document.querySelectorAll('#container input'));
    let [nameElement, ageElement, kindElement, ownerElement] = inpulElements;
    let adoptionUlElement = document.querySelector('#adoption ul')
    let adoptedUlElement = document.querySelector('#adopted ul')

    buttonElement.addEventListener('click', e => {
        e.preventDefault();

        if (!inpulElements.every(x => x.value)){
            return;
        }
        if (!Number(ageElement.value)){
            return
        }

        let liElement = document.createElement('li');
        let pElement = document.createElement('p');
        let spanElement = document.createElement('span');
        let petButtonElement = document.createElement('button');


        pElement.innerHTML = `<strong>${nameElement.value}</strong> is a <strong>${ageElement.value}</strong> year old <strong>${kindElement.value}</strong>`;
        spanElement.textContent = `Owner: ${ownerElement.value}`;
        petButtonElement.textContent = 'Contact with owner'

        liElement.appendChild(pElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(petButtonElement);
        
        adoptionUlElement.appendChild(liElement);

        nameElement.value = '';
        ageElement.value = '';
        kindElement.value = '';
        ownerElement.value = '';

        petButtonElement.addEventListener('click', petButton)
    })

    function petButton(e){
        let parent = e.currentTarget.parentElement;
        e.currentTarget.remove()
        let divElement = document.createElement('div');
        let inputElement = document.createElement('input');
        let takeItBtnElement = document.createElement('button');

        inputElement.setAttribute('placeholder', 'Enter your names')
        takeItBtnElement.textContent = 'Yes! I take it!';

        divElement.appendChild(inputElement);
        divElement.appendChild(takeItBtnElement);

        parent.appendChild(divElement);

        takeItBtnElement.addEventListener('click', onTakeItBtn)
    }

    function onTakeItBtn(e){
        let parentBtnElement = e.currentTarget.parentElement;
        let liElement = e.currentTarget.parentElement.parentElement;

        let newOwnerInput = liElement.querySelector('input');
        let ownerNameSpan = liElement.querySelector('span');

        let newOwnerName = newOwnerInput.value;
        if (!newOwnerName){
            return
        }
        
        ownerNameSpan.textContent = `New Owner: ${newOwnerName}`;
        adoptedUlElement.appendChild(liElement);

        parentBtnElement.remove();

        let checkedBtnElement = document.createElement('button');
        checkedBtnElement.textContent = 'Checked';

        liElement.appendChild(checkedBtnElement);

        checkedBtnElement.addEventListener('click', e => {
            e.currentTarget.parentElement.remove()
        })
    }
}

