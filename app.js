const qwerty = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
let missed = 0;
const letter = document.getElementsByClassName('letter');

const start = document.querySelector('.start');
const resetButton = document.createElement('button');

const phrases = ["welcome to command line"];

function getRandomPhraseAsArray(arr) {
    const randomPhrase = Math.floor(Math.random() * arr.length);
    const phraseCount = randomPhrase;
    const pickPhrase = arr[phraseCount];
    const splitPhrase = pickPhrase.split("");
    
    return splitPhrase;
}

function addPhraseToDisplay(arr) {
    const ul = phraseDiv.firstElementChild;
    for (let i =0; i < arr.length; i += 1) {
        const li = document.createElement("LI");
        li.textContent = arr[i];
        if (arr[i] == ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
        ul.appendChild(li);
    }
}

function checkLetter(button) {
    let letterFound = null;
    for (let i = 0; i < letter.length; i += 1) {
        if (letter[i].textContent.toLowerCase() === button.textContent) {
           letter[i].classList.add('show');
           letterFound = letter[i].textContent;
        } 
    }
    if (letterFound === null) {
        let tries = document.getElementsByClassName('tries');
        let lostLive = tries[missed].firstElementChild;
        lostLive.setAttribute('src', 'images/lostHeart.png');
        missed = missed + 1;
     }
    return letterFound;
};

function checkWin() {
    const show = document.querySelectorAll('.show');
     if (show.length === letter.length) {
        overlay.className = 'win';
        overlay.style.display = 'initial';
        start.style.fontSize = '25px';
        start.textContent = 'You Won!';    
     } else if (missed >= 5) {
        overlay.className = 'lose';
        overlay.style.display = 'initial';
        start.style.fontSize = '25px';
        start.textContent = 'You Lost';
     }  
     reset();
}

function reset() {
    resetButton.className = 'restart';
    resetButton.textContent = 'Restart';
    if (overlay.style.display === 'initial') {
        overlay.append(resetButton);
    }
}



const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 


// EVENT LISTENERS

start.addEventListener('click',(e) => {
    start.style.display = 'none';
});

qwerty.addEventListener('click',(e) => {
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        button.className = 'chosen';
        button.setAttribute('disabled', true);
        let letterFound = checkLetter(button); 
    }
    checkWin();
});

resetButton.addEventListener('click',(e) => {
   const restart = document.location.href = '';
});
