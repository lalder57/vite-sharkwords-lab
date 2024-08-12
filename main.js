import './style.css';
import getRandomWord from './src/randomWord';
import setSharkImage from './src/sharkImage';
import { setupWord, isLetterInWord, revealLetterInWord } from './src/word';
import setupGuesses from './src/guess';



document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;



const initSharkwords = () => {
  let numWrong = 0;
  const word = getRandomWord();
  
  
  setupWord(document.querySelector("#word-container"), word);
  console.log(isLetterInWord(word[0]), '(should be true)');
  console.log(isLetterInWord('1'), '(should be false)');
  revealLetterInWord(word[0]);

  const handleGuess = (guessEvent, letter) => {
    console.log(letter);
    // disable button after click
    const button = guessEvent.target;
    button.setAttribute('disabled', true);
    
    // handle correct/incorrect guess
    if (isLetterInWord(letter)) {
      revealLetterInWord(letter);
    } else {
      numWrong += 1;
      setSharkImage(document.querySelector("#shark-img"), numWrong);
    }
    console.log(numWrong);
  };

  setupGuesses(document.querySelector("#letter-buttons"), handleGuess);
  setSharkImage(document.querySelector("#shark-img"), numWrong);
  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();




