document.addEventListener("DOMContentLoaded", () => {
    const randomButton = document.querySelector('#random_button');
    const randomOut = document.querySelector('#random_out');

    randomButton.addEventListener('click', () => {
        randomOut.innerHTML = Math.floor(Math.random()*101);
    });

    const coordinatesBlock = document.querySelector('#coordinates_read');
    const coordinatesOut = document.querySelector('#coordinates_out');
    const coordinatesClick = document.querySelector('#how_click');

    coordinatesBlock.addEventListener('mousemove', event => {
        coordinatesOut.innerHTML = `X = ${event.offsetX}; Y = ${event.offsetY}`;
    });

    coordinatesBlock.addEventListener('click', _ => {
        coordinatesClick.innerHTML = 'Left click';
    });

    coordinatesBlock.addEventListener('contextmenu', _ => {
        coordinatesClick.innerHTML = 'Right click';
        _.preventDefault();
    });

    const opacityButton = document.querySelector('#opacity_button');
    const opacityText = document.querySelector('#opacity_text');
    let flag = false;

    opacityButton.addEventListener('click', _ => {
        if(flag === true){
            opacityText.style.display = 'block';
            opacityButton.innerHTML = 'Hide text';
            flag = false;
        } else if(flag === false){
            opacityText.style.display = 'none';
            opacityButton.innerHTML = 'Show text';
            flag = true;
        }
    });

    const tabsContent = document.querySelectorAll('.right_part');
    const tabsButtons = document.querySelectorAll('.button_tabs');
    const menuTabs = document.querySelector('.buttons');

    function hideContent(){
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        tabsButtons.forEach(item => {
            item.classList.remove('tabs_active');
        })
    }
    
    function showOneTabs(index = 0){
        tabsContent[index].style.display = 'block';
        tabsButtons[index].classList.add('tabs_active');
    }

    hideContent();
    showOneTabs();

    menuTabs.addEventListener('click', e => {
        if(e.target && e.target.classList.contains('button_tabs')){
            tabsButtons.forEach((item, index) => {
                if(e.target === item){
                    hideContent();
                    showOneTabs(index);
                }
            });
        }

    });

    let arrNews = 
    [
        {
            title: 'What is a  Lorem Ipsum?',
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum vero
            officiis unde, adipisci consectetur, molestias ratione dolor
            facilis, aut vel aperiam dolorum eligendi praesentium rem ex facere
            cumque deserunt omnis beatae ea odit. Impedit cumque voluptates
            architecto eligendi nesciunt magni nostrum aut incidunt
            reprehenderit, eos hic expedita commodi ratione quia earum
            aspernatur saepe sint est consequatur laborum cupiditate esse
            repellat suscipit porro? Eaque optio explicabo qui dolores incidunt?
            Sit quam reprehenderit laboriosam maiores autem dolorum! Nesciunt
            velit praesentium, ea odio aperiam impedit assumenda tempora modi!`
        },
        {
            title: 'Why do we use it?',
            content: `Nesciunt delectus reiciendis quas perferendis eius rem quis eveniet!
            Doloremque alias quod repudiandae voluptatem et saepe aliquid error
            natus laudantium nisi cumque sapiente consectetur doloribus,
            deleniti impedit. Amet aspernatur explicabo fugiat beatae voluptate
            illum possimus ipsam nobis repellendus officia dolorum, et,
            consequuntur autem ipsum ea labore quibusdam quidem! Cupiditate eum,
            dolore magnam facere est aliquam dicta voluptate dolorum
            dignissimos, modi impedit? Repellat cum odit vitae? Inventore
            minima, ad corrupti suscipit laboriosam officia veritatis eligendi
            minus enim. Corporis quo corrupti ex rem facilis magni perferendis
            tempore! Blanditiis architecto distinctio dignissimos quibusdam quos
            harum doloribus asperiores magnam aliquam perferendis maiores in
            ipsum sint exercitationem deleniti commodi, vitae eius quaerat
            placeat nisi sed beatae?`
        },
        {
            title: 'Where does it come from?',
            content: `Voluptatem a, ullam reprehenderit dolorum
            non, aliquid ducimus autem minus totam eos, pariatur vero velit
            laboriosam? Excepturi commodi nesciunt omnis dolorem, ea obcaecati
            numquam dicta unde ab voluptatem eligendi. Aspernatur laudantium,
            temporibus, veritatis amet maxime possimus obcaecati voluptatem
            veniam maiores cupiditate dolore ipsum nam, odit ipsa dolor
            voluptatum dolorum adipisci inventore molestiae iste. Deleniti amet
            provident harum est minus quia ducimus reiciendis voluptatum
            recusandae id iusto excepturi dolorum quos ratione cupiditate
            aperiam praesentium, nesciunt temporibus enim omnis animi vero. Nisi
            id ad cumque eius veritatis amet quisquam mollitia deleniti ab
            illum. Fugit, placeat ipsam. Odio saepe, voluptates consequuntur
            repudiandae cum cupiditate magni suscipit esse.`
        }
    ];

    const newsBlock = document.querySelector('.news_block');

    for(i = 0; i < arrNews.length; i++){
        const post = document.createElement('div');
        const postTitle = document.createElement('h4');
        const postContent = post.cloneNode();
        const postUp = post.cloneNode();
        const buttonRemove = document.createElement('button');

        post.insertAdjacentElement('afterbegin', postUp);
        newsBlock.insertAdjacentElement('afterbegin', post);
        postUp.append(postTitle);
        postUp.append(buttonRemove);
        post.append(postContent);

        buttonRemove.innerHTML = 'X [remove]';
        postUp.classList.add('post_up');
        post.classList.add('post');
        buttonRemove.classList.add('post_button');

        postTitle.innerHTML = arrNews[i].title;
        postContent.innerHTML = arrNews[i].content;
    }

    const posts = document.querySelectorAll('.post');
    const buttonRemove = document.querySelectorAll('.post_button').forEach((item, index) => {
        item.addEventListener('click', e => {
            posts[index].remove();
        });
    });


    let count = 5;
    const add = document.querySelector('#add_percent').addEventListener('click', _ => {
        const loadding = document.querySelector('.loadding');
        // const style = getComputedStyle(loadding, null).width;

        if(count > 100){
            loadding.style.width = 0 + '%';
            count = 5;
        }

        loadding.style.width = `${count}%`;
        count += 5;
        
    });

    const table = document.querySelectorAll('.table table td')
    
    table.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.background = 'darkcyan';
        });
    });

    table.forEach(item => {
        item.addEventListener('mouseleave', () => {
            item.style.background = 'transparent';
        });
    });


    const noCopy = document.querySelector('.no_copy');
    noCopy.addEventListener('mousedown', e => {
        e.preventDefault();
    });
    noCopy.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });


    let countLike = 0;
    const likeBlock = document.querySelector('.like_block');
    
    likeBlock.addEventListener('click', () => {
        const likeText = document.querySelector('.number_like').innerHTML = countLike+=1;
    });

    likeBlock.addEventListener('mousedown', e => {
        e.preventDefault();
    });

    const calc = document.querySelectorAll('.calculate_wrapper table td');
    const out_calc = document.querySelector('#calculate_out');
    const calcResult = document.querySelector('#calc_result');
    let leftPart = 0;
    let rightPart = 0;
    let symbol = '';
    let result = 0;

    out_calc.addEventListener('keydown', _ => {
        if(_.code !== 'Backspace'){
            _.preventDefault();
        }
    })

    calc.forEach(item => {
        item.addEventListener('mousedown', (_) => {
            item.style.background = 'darkcyan';
            _.preventDefault();
        });
        item.addEventListener('click', () => {
            if((parseInt(item.innerHTML) && out_calc.value.length < 13) || item.innerHTML === '0'){
                if(out_calc.value[0] === '0'){
                    out_calc.value = parseFloat(out_calc.value + item.innerHTML);
                } else {
                    out_calc.value += item.innerHTML;
                }
            }
        });
        item.addEventListener('mouseup', () => {
            item.style.background = 'none';
        });
        item.addEventListener('mouseleave', () => {
            item.style.background = 'none';
        });
    });

    calc.forEach(item => {
        if(item.innerHTML === '+' || item.innerHTML === '-' || item.innerHTML === '/' || item.innerHTML === '*'){
            item.addEventListener('click', () => {
                leftPart = parseFloat(out_calc.value);
                out_calc.value = 0;
                symbol = item.innerHTML;
            })
        }
    });

    calcResult.addEventListener('click', () => {
        rightPart = parseFloat(out_calc.value);

        switch (symbol) {
            case '+':
                result = leftPart + rightPart;
            break;
            case '-':
                result = leftPart - rightPart;
            break;
            case '*':
                result = leftPart * rightPart;
            break;
            case '/':
                if(rightPart === 0){
                    result = 0;
                }else{
                    result = leftPart / rightPart;
                }
            break;
        
            default:
            break;
        }

    
        if(parseFloat(result) / parseInt(result) === 0){
            out_calc.value = parseInt(result);
        } else {
            out_calc.value = parseFloat(result);
        }

        rightPart = leftPart = 0;
    });
    

    // calc.forEach(item => {
    //     item.addEventListener('click', () => {
    //         if(item.innerHTML === '/' || item.innerHTML === '*' || item.innerHTML === '-' || item.innerHTML === '+'){
    //             out_calc.value += ' ' + item.innerHTML + ' ';
    //         } else if(item.innerHTML === '='){
    //             out_calc.value += ' ' + item.innerHTML;
                
    //         } else {
    //             out_calc.value += item.innerHTML;
    //         }
    //     })
    // });

    // calcResult.addEventListener('click', () => {
    //     let arrCalc = out_calc.value.split(' ');
        
    //     for(let i = 0; i < arrCalc.length; i++){
    //         if(i % 2 === 0){
    //             arrCalc[i] = parseInt(arrCalc[i]);
    //         }
    //     }

    //     for(let i = 0; i < arrCalc.length; i++){
    //         if(i % 2 !== 0){
                
    //             if((isNaN(arrCalc[i-1])) || (typeof(arrCalc[i+1]) !== 'undefined' && isNaN(arrCalc[i+1]))){
    //                 out_calc.value = 'Error';
    //                 break;

    //             }
    //         }
    //     }
    // });

    const menuCategories = document.querySelectorAll('.menu_categories');
    const menuItem = document.querySelectorAll('.menu_item');
    const blockTasks = document.querySelector('.task_11');

    function hideMenuItem(){
        menuItem.forEach(item => {
            item.style.maxHeight = '0px';
        }) 
    }

    blockTasks.addEventListener('click', _ => {
        if(_.target.nodeName !== 'LI'){
            hideMenuItem();
        } 
    })

    menuCategories.forEach((item, index) => {
        item.addEventListener('click', _ => {
            hideMenuItem();
            menuItem[index].style.maxHeight = 'none';
            menuItem[index].style.minWidth = `${menuCategories[index].getBoundingClientRect().width + 40}px`;
        });
    });


    const scroll = document.querySelector('.scroll');
    const topButton = document.querySelector('.top_button');

    scroll.addEventListener('scroll', e => {
        if(e.target.scrollTop > 100){
            topButton.style.display = 'block';
        } else {
            topButton.style.display = 'none';
        }
    })


});