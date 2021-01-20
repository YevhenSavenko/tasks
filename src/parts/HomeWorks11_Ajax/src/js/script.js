// let request;
// if(window.XMLHttpRequest){
//  request = new XMLHttpRequest();
// }
// else{
//  request = new ActiveXObject("Microsoft.XMLHTTP");
// }
// // request.open("GET", "http://www.omdbapi.com/?apikey=e87d2168&s=Batman");
// request.open("GET", "http://www.omdbapi.com/?apikey=e87d2168&s=Batman&page=41");
// request.send();

// request.onreadystatechange = function(){
//  console.log("readyState = " + request.readyState);
//  if(request.readyState === 4 && request.status === 200){
//     let parse = (JSON.parse(request.response));
//     console.log(parse.Search);
//     console.log(parse.totalResults);
//  }
// }
// http://www.omdbapi.com/

document.addEventListener("DOMContentLoaded", () => {
   const typeArray = ['movie', 'series', 'episode'];
   const selectInput = document.querySelector('.search__ganre input');
   const searchSelect = document.querySelector('.search__select');
   const searchGanre = document.querySelector('.search__ganre');
   const searchButton = document.querySelector('.search__button');
   

   selectInput.addEventListener('click', (e) => {
      function createSelect(){
         const removeGanres = document.querySelectorAll('.search__select div').forEach(item => item.remove());
         const createDiv = document.createElement('div');
      
         for(let i = 0; i < typeArray.length; i++){
            if(selectInput.value !== typeArray[i]){
               const cloneDiv = createDiv.cloneNode(false);

               cloneDiv.addEventListener('click', () => {
                  selectInput.value = typeArray[i];
                  hideSelectBlock();
               });
      
               cloneDiv.innerText = typeArray[i];
               searchSelect.append(cloneDiv);
            }
         }
      }

      createSelect();

      if(searchSelect.style.maxHeight === '0px'){
         searchSelect.style.cssText = 'max-height: 400px; border-top: none; transition-delay: 0.5s';
         searchButton.style.top = '270px';
         searchButton.style.transitionDelay = '0s';
      }
   });


   function hideSelectBlock(){
      searchSelect.style.cssText = 'max-height: 0px; border: none;';
      searchButton.style.top = '200px';
      searchButton.style.transitionDelay = '0.5s';
   };

   searchGanre.addEventListener('mouseleave', hideSelectBlock);


});



