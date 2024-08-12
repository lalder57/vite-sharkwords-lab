let word;

function setupWord(element, initWord) {
  word = initWord;

  word.split("").forEach(() => {
    element.insertAdjacentHTML('beforeend', `<div class="letter-box"></div>`);
  });
}

function isLetterInWord(letter) {}

function revealLetterInWord(letter) {}


export {setupWord, isLetterInWord, revealLetterInWord};