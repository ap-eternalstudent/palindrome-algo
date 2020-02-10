let word = "";

const submitBtn = document.querySelector(".submitBtn");
const inputBox = document.querySelector(".input-box-field");

const messageText = document.querySelector(".message-text");

function submitWord() {
    word = document.querySelector(".input-box-field").value.toLowerCase();
    checkLength();
}

function inputLength() {
    return inputBox.value.length;
}

function checkLength() {
    if(inputLength() > 2)  {
        checkWord();
    } else if (inputLength() < 1){
        createNoEmptyStringMessage(); 
    } else {
        createTooShortMessage();
    }
}

function checkForKeypress(event) { 
    if (event.keyCode === 13){
        submitWord(); 
    }    
}


function createSuccessMessage() {
        messageText.innerHTML = "It's a palindrome!" 
        messageText.className = "message-success";
}
function createFailMessage() {
        messageText.innerHTML = "It's NOT a palindrome!" 
        messageText.className = "message-fail";
}
function createTooShortMessage() {
        messageText.innerHTML = "The word's too short" 
        messageText.className = "message-fail";
}
function createNoEmptyStringMessage() {
        messageText.innerHTML = "Don't leave the field empty" 
        messageText.className = "message-fail";
}



function checkWord() {
    
    let letters = [];
    let reverseword = "";

    for (let i = 0; i < word.length; i++) {
        letters.push(word[i]);
    };
    
    for (let i = 0; i < word.length; i++) {
        reverseword += letters.pop();
    };
    
    if (word === reverseword) {
        createSuccessMessage();
    } else {
        createFailMessage();
    };
};


submitBtn.addEventListener("click", submitWord);
inputBox.addEventListener("keypress", checkForKeypress);



