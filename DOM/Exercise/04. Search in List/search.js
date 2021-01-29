function search() {
   let towns = document.querySelectorAll('#towns>li')
   let entry = document.querySelector('input').value;
   let counter = 0;

   for (const li of towns){
      if ((li.textContent).toLowerCase().includes(entry.toLowerCase())){
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         counter++
      } else {
         li.style.fontWeight = '';
         li.style.textDecoration = '';
      }
   }
   document.getElementById('result').textContent = `${counter} matches found`;
}
