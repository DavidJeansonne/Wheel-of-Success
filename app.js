const qwerty = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const missed = 0;

const start = document.querySelector('.start');

const phrases = [
    "Welcome To Wheel Of Success",
    "Tough Cookie",
    "One in a million",
    "Too Long",
    "Stay Positive"
];

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
    const letterFound = null;
    const letter = document.getElementsByClassName('letter');
    for (let i = 0; i < letter.length; i += 1) {
        if (letter[i].textContent.toLowerCase() === button.textContent) {
           letter[i].classList.add('show');
        } 
    }
    return letterFound;
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
        if (letterFound === null ) {
           const tries = document.querySelectorAll('.tries');
            const lostLive = tries[missed].firstElementChild;
            missed += 1;
            lostLive.setAttribute('src', 'images/lostHeart.png');
          }
    }
});