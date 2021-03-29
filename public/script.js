let borderContainer = document.getElementById('border-container');
let loadingP = document.getElementById('loading-p');
let idenUserWrap = document.getElementById('iden-username-wrap');
let genUserButton = document.getElementById('generate-identity');
let beginAnchor = document.getElementById('begin-anchor');
let newUsername = document.getElementById('entry-username');
let returningUsername = document.getElementById('return-username');

let whatModal = {
    newWrap: document.getElementById('entry-new-wrap'),
    returningWrap: document.getElementById('entry-returning-wrap')
};

// let socket = io.connect('http://localhost:8080');
let socket = io.connect('http://mgsolid.herokuapp.com/');

let generatedName = null;
let noCharsFinished = 0;
let chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!_-:;#~?/[]{}()*^%$£`;

borderContainer.style.opacity = 1;

socket.on('connect', () => {

    console.log(socket.id);
    console.log(window.localStorage);

    if (window.localStorage.user) {
        localStorage.setItem('id', socket.id);
        returningUsername.innerText = localStorage.user;

        init(true);
    } else {
        init(false);
    };
});

function rando(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let incrementCharInterval;

function incrementChars() {
    noCharsFinished++;
};

function generateUser(id) {
    console.log('generating user');
    genUserButton.removeEventListener('click', generateUser);

    let nameValueKeys = Object.keys(nameObj);
    let indexOne = rando(nameValueKeys.length - 1, 0);
    let poolOne = nameValueKeys[indexOne];

    let remainingNameValueKeys = nameValueKeys.filter(value => value !== poolOne);
    let indexTwo = rando(remainingNameValueKeys.length - 1, 0);
    let poolTwo = remainingNameValueKeys[indexTwo];

    let underscoring = Math.random() > 0.7;
    let capital = Math.random() > 0.3;
    let nameOne = nameObj[poolOne][rando(nameObj[poolOne].length - 1, 0)];
    let nameTwo = nameObj[poolTwo][rando(nameObj[poolTwo].length - 1, 0)];

    if (!underscoring && capital) nameTwo = nameTwo.charAt(0).toUpperCase() + nameTwo.slice(1);

    let user = `${nameOne}${underscoring ? '_' : ''}${nameTwo}${rando(1337, 0)}`;
    generatedName = user;

    localStorage.setItem('user', user);
    localStorage.setItem('id', id);
    localStorage.setItem('location', 0);

    console.log('storage', window.localStorage);

    genUserButton.style.opacity = 0;
    setTimeout(() => {
        genUserButton.style.display = 'none';

        window.requestAnimationFrame(animationTick);
        incrementCharInterval = setInterval(incrementChars, 400);

        setTimeout(() => {
            newUsername.style.display = 'initial';
            setTimeout(() => {
                newUsername.style.opacity = 1;
                beginAnchor.classList.remove('disabled');
            }, 10);
        }, 10);
    }, 2500);
};

function init(returning) {
    console.log('in init', returning);
    loadingP.style.opacity = 0;

    setTimeout(() => {
        loadingP.style.display = 'none';
        whatModal[returning ? 'returningWrap' : 'newWrap'].style.display = 'flex';
        setTimeout(() => {
            whatModal[returning ? 'returningWrap' : 'newWrap'].style.opacity = 1;
        }, 10);
    }, 2500);
};

function animationTick() {
    if (!generatedName) return;

    let splitChars = generatedName.split('');
    let splitCharsClone = generatedName.split('');

    for (let i = 0; i < splitChars.length; i++) {
        if ((i + 1) > noCharsFinished) {
            splitCharsClone[i] = chars[rando(chars.length - 1, 0)];
        };
    };

    newUsername.innerText = splitCharsClone.join('');

    if (noCharsFinished > generatedName.length) {
        if (incrementCharInterval) window.clearInterval(incrementCharInterval);
    } else {
        window.requestAnimationFrame(animationTick);
    };
};

genUserButton.addEventListener('click', generateUser);