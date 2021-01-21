document.addEventListener("DOMContentLoaded", () => {
   const typeArray = ['movie', 'series', 'episode'];
   const selectInput = document.querySelector('.search__ganre input');
   const searchSelect = document.querySelector('.search__select');
   const searchGanre = document.querySelector('.search__ganre');
   const searchButton = document.querySelector('.search__button');
   const searchByTitle = document.querySelector('.search__title-input');

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

   searchByTitle.addEventListener('keyup', _ => {
      let reg = /[а-яА-ЯёЁ]/g;
      if (searchByTitle.value.search(reg) !=  -1) {
         searchByTitle.value = searchByTitle.value.replace(reg, '');
      }
   });


   function hideSelectBlock(){
      searchSelect.style.cssText = 'max-height: 0px; border: none;';
      searchButton.style.top = '200px';
      searchButton.style.transitionDelay = '0.5s';
   };

   function scrollBy(number){
      window.scrollBy({
         top: number,
         left: 0,
         behavior: 'smooth'
      });
   }

   searchGanre.addEventListener('mouseleave', hideSelectBlock);

   searchButton.addEventListener('click', () => {
      const errorBlock = document.querySelectorAll('.search__error div').forEach(item => item.remove());
      const showFilms = document.querySelectorAll('.search__wrapper-show').forEach(item => item.remove());
      const allButtonsPagin = document.querySelectorAll('.search__paginator button').forEach(item => item.remove());
      const firstScreen = document.querySelector('.search').clientHeight;
      const searchPaginator = document.querySelector('.all__page');
      const searchPaginatorBlock = document.querySelector('.search__paginator');

      searchPaginatorBlock.style.paddingBottom = '0px';
      searchPaginator.innerText = '';

      let request;
      let strAPI = 'http://www.omdbapi.com/?apikey=e87d2168';

      if(window.XMLHttpRequest) 
         request = new XMLHttpRequest();
      else 
         request = new ActiveXObject("Microsoft.XMLHTTP");

      if(selectInput.value.length > 0){
         strAPI += '&type=' + selectInput.value;
      } 

      if(searchByTitle.value.length > 0){
         strAPI += '&s=' + searchByTitle.value.toLowerCase();
      } else {
         searchByTitle.placeholder = 'Enter a snippet of the movie title';
         return;
      }

      request.open("GET", strAPI);
      request.send();

      request.onreadystatechange = function(){
         if(request.readyState === 4 && request.status === 200){
            let parse = (JSON.parse(request.response));

            if(parse.Response === 'False'){
               const searchErrorBlock = document.querySelector('.search__error');
               const createDiv = document.createElement('div');

               if(parse.Error === 'Movie not found!' || parse.Error === 'Too many results.'){
                  createDiv.innerText = parse.Error;
                  createDiv.classList.add('search__response-error');
               } 

               searchErrorBlock.append(createDiv);
               return;
            } else {
               const searchShow = document.querySelector('.search__show');
               

               if(searchShow){
                  for(let i = 0; i < parse.Search.length; i++){
                     const wrapperFilms = document.createElement('div'),
                           leftPart = wrapperFilms.cloneNode(false),
                           rightPart = wrapperFilms.cloneNode(false),
                           poster = document.createElement('img'),
                           type = wrapperFilms.cloneNode(false),
                           title = wrapperFilms.cloneNode(false),
                           year = wrapperFilms.cloneNode(false),
                           buttonDetails =  document.createElement('button'),
                           upPart = wrapperFilms.cloneNode(false),
                           downPare = wrapperFilms.cloneNode(false);

                     wrapperFilms.classList.add('search__wrapper-show');
                     leftPart.classList.add('search__left-part');
                     rightPart.classList.add('search__right-part');
                     
                     poster.classList.add('search__image');
                     poster.src = parse.Search[i].Poster;

                     type.classList.add('search__type-films');
                     type.innerText = parse.Search[i].Type;

                     title.classList.add('search__title-film');
                     title.innerText = parse.Search[i].Title;

                     year.classList.add('search__year');
                     year.innerText = parse.Search[i].Year;

                     buttonDetails.classList.add('search__button-details');
                     buttonDetails.innerText = 'Details';
                     buttonDetails.setAttribute('data-id', parse.Search[i].imdbID);

                     searchShow.append(wrapperFilms);
                     wrapperFilms.append(leftPart);
                     wrapperFilms.append(rightPart);
                     leftPart.append(poster);
                     rightPart.append(upPart);
                     rightPart.append(downPare);
                     upPart.append(type);
                     upPart.append(title);
                     upPart.append(year);
                     downPare.append(buttonDetails);
                  }

                  scrollBy(firstScreen);
               }
            } 

            if(parse.Response !== 'False'){
               const createButtonPagin = document.createElement('button');
               const prevPage = document.querySelector('.prev__page');
               const nextPage = document.querySelector('.next__page');
               const searchShow = document.querySelector('.search__show').clientHeight;
               
               

               const buttonPrevPage = createButtonPagin.cloneNode(false);
               const buttonNextPage = createButtonPagin.cloneNode(false);        

               prevPage.append(buttonPrevPage);
               nextPage.append(buttonNextPage);

               buttonPrevPage.innerText = '<<';
               buttonNextPage.innerText = '>>';
               searchPaginator.innerText = '1';
               searchPaginatorBlock.style.paddingBottom = '50px';

               function disabladPrevButton(){
                  if(parseInt(searchPaginator.innerText) === 1) {
                     const disabled = document.querySelector('.prev__page button');
                     disabled.setAttribute("disabled", "disabled");
                  }
               }

               disabladPrevButton();

               
               buttonNextPage.addEventListener('click', () => {
                  if(parseInt(searchPaginator.innerText) < Math.ceil(parseInt(parse.totalResults)/10)){
                     searchPaginator.innerText = parseInt(searchPaginator.innerText)+1;
                     if(parseInt(searchPaginator.innerText) === Math.ceil(parseInt(parse.totalResults)/10)) {
                        const disabled = document.querySelector('.next__page button');
                        disabled.setAttribute("disabled", "disabled");
                     }

                     if(parseInt(searchPaginator.innerText) > 1){
                        const disabled = document.querySelector('.prev__page button');
                        disabled.removeAttribute('disabled');
                     }
                  }
               });

               buttonPrevPage.addEventListener('click', () => {
                  if(parseInt(searchPaginator.innerText) > 0){
                     searchPaginator.innerText = parseInt(searchPaginator.innerText)-1;
                     if(parseInt(searchPaginator.innerText) === 1){
                        disabladPrevButton();
                     }

                     if(parseInt(searchPaginator.innerText) < Math.ceil(parseInt(parse.totalResults)/10)){
                        const disabled = document.querySelector('.next__page button');
                        disabled.removeAttribute('disabled');
                     }
                  } 
               });


               const paginButtons = document.querySelectorAll('.search__paginator button').forEach(item => {
                  item.addEventListener('click', () => {
                     const heightFilmsBlock = document.querySelector('.search__all-films').clientHeight;
                     scrollBy(-(heightFilmsBlock-window.innerHeight));
                     let newRequest = new XMLHttpRequest();

                     let paginStr = strAPI + '&page=' + searchPaginator.innerText;

                     newRequest.open("GET", paginStr);
                     newRequest.send();

                     newRequest.onreadystatechange = function(){
                        if(newRequest.readyState === 4 && newRequest.status === 200){
                           let parseNewRequest = (JSON.parse(newRequest.response));
                           const searchImage = document.querySelectorAll('.search__image');
                           const searchTitle = document.querySelectorAll('.search__title-film');
                           const searchYear = document.querySelectorAll('.search__year');
                           const searchButton = document.querySelectorAll('.search__button-details');

                           for(let i = 0; i < parseNewRequest.Search.length; i++){
                              searchImage[i].src = parseNewRequest.Search[i].Poster;
                              searchTitle[i].innerText = parseNewRequest.Search[i].Title;
                              searchYear[i].innerText = parseNewRequest.Search[i].Year;
                              searchButton[i].setAttribute('data-id', parseNewRequest.Search[i].imdbID);
                           }
                        }
                     }
                  })
               });
            }
            const buttonDetails = document.querySelectorAll('.search__button-details').forEach(item => {
               item.addEventListener('click', () => {
                  let requestDetails;
                  let strDetails = `http://www.omdbapi.com/?apikey=e87d2168&i=${item.dataset.id}`;

                  if(window.XMLHttpRequest) 
                     requestDetails = new XMLHttpRequest();
                  else 
                     requestDetails = new ActiveXObject("Microsoft.XMLHTTP");

                  

                  requestDetails.open("GET", strDetails);
                  requestDetails.send();

                  requestDetails.onreadystatechange = function(){
                     if(requestDetails.readyState === 4 && requestDetails.status === 200){
                        let parseRequestDetails = JSON.parse(requestDetails.response);
                        const modal = document.querySelector('.modal');
                        const modalAnswer = document.querySelectorAll('.modal__answer');
                        const posterModal = document.querySelector('.modal__left-part img');
                        const exit = document.querySelector('.modal__cross').addEventListener('click', () => {
                           if(modal.classList.contains('modal__show')){
                              modal.classList.remove('modal__show');
                              modal.classList.add('modal__hide');
                              document.body.style.overflow = 'visible';
                           }
                        });

                        if(modal.classList.contains('modal__hide')){
                           modal.classList.remove('modal__hide');
                           modal.classList.add('modal__show');
                           document.body.style.overflow = 'hidden';
                        }

                        modalAnswer[0].innerText = parseRequestDetails.Title;
                        modalAnswer[1].innerText = parseRequestDetails.Released;
                        modalAnswer[2].innerText = parseRequestDetails.Genre;
                        modalAnswer[3].innerText = parseRequestDetails.Country;
                        modalAnswer[4].innerText = parseRequestDetails.Director;
                        modalAnswer[5].innerText = parseRequestDetails.Writer;
                        modalAnswer[6].innerText = parseRequestDetails.Actors;
                        modalAnswer[7].innerText = parseRequestDetails.Awards;
                        posterModal.src = parseRequestDetails.Poster;

                        
                     }
                  }
               })
            });
         }
      } 
   })
});



