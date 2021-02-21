function solve(){

    const mainElement = document.querySelector('main');
    const archiveSection = document.querySelector('.archive-section')
    const olSection = document.querySelector('.archive-section>ol')

    document.querySelector('form>button').addEventListener('click', e => {
       e.preventDefault();
       const name = document.getElementById('creator').value;
       const title = document.getElementById('title').value;
       const category = document.getElementById('category').value;
       const content = document.getElementById('content').value;

       const article = create('article');
       const h1 = create('h1', title);
       article.appendChild(h1)

       const p1 = create('p', `Category:\n`);
       const strong = create('strong', category);
       p1.appendChild(strong);
       article.appendChild(p1);

       const p2 = create('p', `Creator:\n`);
       const strong1 = create('strong', name);
       p2.appendChild(strong1);
       article.appendChild(p2);

       const paragraph = create('p', content);
       article.appendChild(paragraph)

       const div = create('div');
       div.className = 'buttons';
       const deleteBtn = create('button', 'Delete');
       deleteBtn.className = 'btn delete';
       div.appendChild(deleteBtn)
       const archivebtn = create('button', 'Archive')
       archivebtn.className = 'btn archive';
       div.appendChild(archivebtn);
       article.appendChild(div)

       mainElement.lastElementChild.appendChild(article);

       archivebtn.addEventListener('click', e => {
         article.remove()
         const li = create('li', title);
         archiveSection.lastElementChild.appendChild(li)

         Array.from(olSection.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(g => olSection.appendChild(g))
       })

       deleteBtn.addEventListener('click', e => {
          article.remove()
       })

       document.getElementById('creator').value = '';
       document.getElementById('title').value = '';
       document.getElementById('category').value = '';
       document.getElementById('content').value = '';

    })

    function create (type, content){
       let result = document.createElement(type);
       if (content){
          result.textContent = content;
       }
       return result;
    }
}
