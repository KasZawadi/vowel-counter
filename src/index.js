// dom declarations
const btn = document.querySelector("button");
const vowelCount = document.querySelector(".vowel-count");
const word = document.querySelector(".text-input");

// were calling the event
btn.addEventListener("click", countingVowel);

// the logic for the event
function countingVowel() {
  let count = 0;

  let wordVal = word.value.toLowerCase();
  for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];
    if (letter.match(/([aeiou])/)) {
      count++;
    }
    vowelCount.innerHTML = `${word.value.toUpperCase()} has ${count} vowels.`;
  }
}
