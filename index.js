// Active page 
document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll("nav ul li a");
  let currentUrl = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
      if (link.getAttribute("href") === currentUrl) {
          link.classList.add("active");
      }
  });
});

// Typewriter
const phrases = ["Samir", "Student", "Learner", "Developer"];
const changingElement = document.querySelector('.changing');
let currentPhrase = 0;

function showPhrase() {
    const phrase = phrases[currentPhrase];
    
    // Type out the phrase
    changingElement.style.animation = 'typing 2s steps(20, end) forwards';
    changingElement.textContent = phrase;
    
    // Wait after typing
    setTimeout(() => {
        // Delete the phrase
        changingElement.style.animation = 'deleting 2s steps(20, end) forwards';
        
        // After deleting, move to next phrase
        setTimeout(() => {
            currentPhrase = (currentPhrase + 1) % phrases.length;
            showPhrase();
        }, 2000);
    }, 3000);
}

// Start the animation
showPhrase();

// Words
// Arrays of words for each span
const words1 = ["studying", "pursuing", "enrolled"];
const words2 = ["have a profound", "hold a deep", "have a strong"];
const words3 = ["Android", "Mobile", "Software"];
const words4 = ["novice", "beginner", "learner"];
const words5 = ["programming", "coding", "development"];
const words6 = ["possess strong", "demonstrate solid", "showcase great"];
const words7 = ["analytical and problem-solving", "critical thinking and reasoning", "logical and decision-making"];

// Function to update words at different intervals
function updateWord(id, wordsArray, interval) {
  let index = 0;
  const element = document.getElementById(id);
  setInterval(() => {
    element.textContent = wordsArray[index];
    index = (index + 1) % wordsArray.length;
  }, interval);
}

// Call function for each word with different intervals
updateWord("word1", words1, 2000);
updateWord("word2", words2, 3000);
updateWord("word3", words3, 4500);
updateWord("word4", words4, 5000);
updateWord("word5", words5, 3000);
updateWord("word6", words6, 6500);
updateWord("word7", words7, 7000);
