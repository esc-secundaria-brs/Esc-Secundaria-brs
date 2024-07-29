
/*abrir y cerrar la lista desplegable*/

const toggleButton = document.getElementById('toggleButton');
const codigo = document.getElementById('codigo');

toggleButton.addEventListener('click', function(){
 if (codigo.style.display === 'none') {
  codigo.style.display = 'block';
 } else {
  codigo.style.display = 'none';
 }
});

/*Lista desplegable*/

let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
 listElement.addEventListener('click', ()=>{
  listElement.classList.toggle('arrow');
  
  let menu = listElement.nextElementSibling;
  if(menu.style.height) {
   menu.style.height = null;
   } else {
    menu.style.height = menu.scrollHeight + 'px';
   }
 });
});

/* Fondo de inicio( Titulo y otras cosas ) */

let elements = document.getElementsByClassName('gallery');
let order = 0;

setInterval(() => {
  elements.item(order).style.opacity = '0';
  order + 1 == elements.length ? order = 0 : order+=1;
  elements.item(order).style.opacity = '1';
},4000);

/*  */