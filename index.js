const phrases = document.querySelectorAll('.typewriter p');
let currentPhrase = 0;
let repeatCount = 0;
const maxRepeats = 3; // Number of times to repeat each phrase

function showPhrase() {
  // Hide all phrases
  phrases.forEach(phrase => {
    phrase.style.display = 'none';
    phrase.style.animation = 'none';
  });
  
  // Show current phrase
  const phrase = phrases[currentPhrase];
  phrase.style.display = 'inline-block';
  phrase.style.animation = 'typing 4.5s steps(40, end) forwards';
  
  // Set timeout for next action
  setTimeout(() => {
    repeatCount++;
    
    if (repeatCount >= maxRepeats) {
      // Move to next phrase
      currentPhrase = (currentPhrase + 1) % phrases.length;
      repeatCount = 0;
    }
    
    // Queue next animation
    showPhrase();
  }, 4500);
}

// Start the animation
window.addEventListener('DOMContentLoaded', () => {
  showPhrase();
});