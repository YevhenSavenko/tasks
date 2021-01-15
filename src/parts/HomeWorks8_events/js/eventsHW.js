const links = document.querySelectorAll('.links ul li a');

links.forEach(item => {
   if(item.innerHTML.indexOf('http') === 0 ){
       item.style.borderBottom = '2px dotted darkcyan';
   }
})


const folders = document.querySelectorAll('.inside__folders');
const openFolder = document.querySelectorAll('.folser__open');

openFolder.forEach((item, index) => {
    item.addEventListener('click', _ => {
        if(_.target.nodeName === 'LI'){
            if(window.getComputedStyle(folders[index]).display === 'none'){
                folders[index].style.display = 'block';
            } else {
                folders[index].style.display = 'none';
            }
        }
    });
});


