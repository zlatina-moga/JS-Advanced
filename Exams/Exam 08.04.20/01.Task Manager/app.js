function solve() {
    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');
    const sections = document.querySelectorAll('section')
    const [addSection, openSection, progressSection, completeSection] = sections

    document.getElementById('add').addEventListener('click', e => {
        e.preventDefault();
        if (!taskInput.value || !descriptionInput.value || !dateInput.value){
            return;
        }

        const article = create('article');
        const h3 = create('h3', `${taskInput.value}`)
        const p1 = create('p', `Description: ${descriptionInput.value}`)
        const p2 = create('p', `Due Date: ${dateInput.value}`)

        const div = create('div');
        div.className = 'flex';

        const greenBtn = create('button', 'Start')
        greenBtn.className = 'green';
        div.appendChild(greenBtn)
        const redBtn = create('button', 'Delete');
        redBtn.className = 'red';
        div.appendChild(redBtn);

        article.appendChild(h3)
        article.appendChild(p1)
        article.appendChild(p2)
        article.appendChild(div)

        openSection.lastElementChild.appendChild(article);

        taskInput.value = '';
        descriptionInput.value = '';
        dateInput.value = '';

        redBtn.addEventListener('click', e => {article.remove()})
        greenBtn.addEventListener('click', e => {
            progressSection.lastElementChild.appendChild(article)

            greenBtn.classList.remove('green');
            greenBtn.classList.add('red')
            greenBtn.innerText = 'Delete';

            redBtn.classList.remove('red');
            redBtn.classList.add('orange')
            redBtn.innerText = 'Finish';

            greenBtn.addEventListener('click', e => {article.remove()})
            redBtn.addEventListener('click', e => {
                e.target.parentElement.remove();
                completeSection.lastElementChild.appendChild(article);
            })
        })

        redBtn.addEventListener('click', e => {article.remove()})
    })

    function create (type, content){
        let result = document.createElement(type);
        if (content){
            result.textContent = content;
        }      
        return result;
    }
}