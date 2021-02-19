function solve() {
    const inputFields = document.querySelectorAll('#container>input');
    const moviesSection = document.querySelector('#movies>ul');
    const archiveSection = document.querySelector('#archive>ul');

    document.querySelector('#container>button').addEventListener('click', e => {
        e.preventDefault();
        const movieName = inputFields[0].value;
        const movieHall = inputFields[1].value;
        const movieTicket = inputFields[2].value;

        if (!movieName || !movieHall || !Number(movieTicket)){
            return;
        };

        const li = create('li');
        const span = create('span', `${movieName}`);
        li.appendChild(span)
        const strong = create('strong', `Hall: ${movieHall}`);
        li.appendChild(strong)

        const div = create('div');
        const strongDiv = create('strong', `${movieTicket}`);
        div.appendChild(strongDiv)
        const inputDiv = create('input');
        inputDiv.placeholder = 'Tickets Sold';
        div.appendChild(inputDiv)
        const archiveBtn = create('button', 'Archive');
        div.appendChild(archiveBtn);

        li.appendChild(div);

        moviesSection.appendChild(li);

        inputFields[0].value = '';
        inputFields[1].value = '';
        inputFields[2].value = '';

        archiveBtn.addEventListener('click', e => {
            e.target.parentElement.parentElement.remove()
            const count = inputDiv.value;      
            if (!Number(count)){
                return;
            }
            const totalProfit = (count * movieTicket).toFixed(2);
            const liElement = create('li');
            const spanElement = create('span', movieName);
            liElement.appendChild(spanElement)
            const strongElement = create('strong', `Total amount: ${totalProfit}`)   
            liElement.appendChild(strongElement)
            const deleteBtn = create('button', 'Delete') ;
            liElement.appendChild(deleteBtn)
            
            archiveSection.appendChild(liElement);

            deleteBtn.addEventListener('click', e => {
                e.target.parentElement.remove();
            })
        })
    })

    document.querySelector('#archive>button').addEventListener('click', e => {
        Array.from(archiveSection.children).forEach(el => el.remove());
    })

    function create(type, content){
        let result = document.createElement(type);
        if(content){
            result.textContent = content;
        }
        return result;
    }
}