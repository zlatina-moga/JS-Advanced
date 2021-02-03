function create(words) {
   for (let word of words){
      let div = document.createElement('div');
      let p = document.createElement('p');
      const elementP = document.getElementById('content')
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', function () {
         p.style.display = 'block'
      })
      elementP.appendChild(div);
   }  
}