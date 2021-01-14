const headerCount = document.querySelector('.header__count');
const topArrow = document.querySelector('.top__arrow');
const bottomArrow = document.querySelector('.bottom__arrow');

topArrow.addEventListener('click', () => {
    headerCount.innerHTML = parseInt(headerCount.innerHTML)+1;
    topArrow.addEventListener('mousedown', e => {
        e.preventDefault();
    });
});

bottomArrow.addEventListener('click', () => {
    headerCount.innerHTML = parseInt(headerCount.innerHTML)-1;
    bottomArrow.addEventListener('mousedown', e => {
        e.preventDefault();
    });
});



const addColor = document.querySelector('.add__color');
const ulColor = document.querySelector('.random__color ul');

addColor.addEventListener('click', () => {
    const li = document.createElement('li');
    li.style.background = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    ulColor.append(li);
});

ulColor.addEventListener('click', e => {
    if(e.target.nodeName === 'LI'){
        e.target.remove();
    }
});

const palette = document.querySelectorAll('.palette__color ul li');
const paletteText = document.querySelector('.palette__text');

palette.forEach(item => {
    item.addEventListener('click', _ => {
        paletteText.style.color = `#${item.dataset.color}`;
    });
});

const commentsNew = document.querySelector('.comments__new');
const nameInput = document.querySelector('.comments__name input');
const commentContent = document.querySelector('.coments__content textarea');
const addComment = document.querySelector('.add__comment');

addComment.addEventListener('click', () => {
    if(nameInput.value.length >= 2 && commentContent.value.length >= 10){
        const nameComment = document.createElement('h4');
        const commentBody = document.createElement('div');
        const data = commentBody.cloneNode();


        nameComment.innerHTML = nameInput.value;
        commentBody.innerHTML = commentContent.value;

        let day = new Date().getDate();
        let month = new Date().getMonth()+1;
        let year = new Date().getFullYear();

        data.innerHTML = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
        data.classList.add('date__comment');
        nameComment.classList.add('name__top');


        commentsNew.append(nameComment);
        commentsNew.append(data);
        commentsNew.append(commentBody);
    

        nameInput.value = commentContent.value = '';


    } else {

    }
});


const countrys = [
    'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 
    'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 
    'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 
    'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 
    'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 
    'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cura?ao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 
    'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 
    'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 
    'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 
    'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 
    'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 
    'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 
    'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 
    'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 
    'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 
    'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 
    'R?union', 'Romania', 'Russia', 'Rwanda', 'Saint Barth?lemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 
    'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'S?o Tom? and Pr?ncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 
    'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 
    'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 
    'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 
    'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 
    'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'
];

const inputCountry = document.querySelector('.input__contry input');
const selectCountry = document.querySelector('.select__country');


inputCountry.addEventListener('input', () => {
    let countrysCheck = [];

    function removeAll(){
        const countryItem = document.querySelectorAll('.select__country div');
        countryItem.forEach(item => {
            item.remove();
        });
    }

    for(let i = 0; i < countrys.length; i++){

        if(inputCountry.value.length === 0){}
        else if(inputCountry.value.toLowerCase() === countrys[i].toLowerCase().slice(0, inputCountry.value.length)){
            if(inputCountry.value.toLowerCase() === countrys[i].toLowerCase()){
                removeAll();
            } else {
                countrysCheck.push(countrys[i]);
            }
        }
    }

    removeAll()

    if(countrysCheck.length > 0){
        let diapasone = countrysCheck.length;

        if(countrysCheck.length > 5){
            diapasone = 5
        }

        for(let i = 0; i < diapasone; i++){
            const countryItem = document.createElement('div');
            countryItem.innerText = countrysCheck[i];
            countryItem.classList.add('country__block');

            countryItem.addEventListener('click', () => {
                inputCountry.value = countryItem.innerText;
                removeAll();
            });

            selectCountry.append(countryItem);
        }
    }

    
});
