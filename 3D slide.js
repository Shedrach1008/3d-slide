// Select all cards
const cards = document.querySelectorAll('.card');

// Function to toggle the 'selected' class
function toggleCardSelection(event) {
  const card = event.currentTarget;

  // Check if the card is already selected
  if (card.classList.contains('selected')) {
    card.classList.remove('selected'); // Deselect card
  } else {
    // Deselect other cards if one is already selected
    cards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected'); // Select clicked card
  }
}

// Add click event listener to each card
cards.forEach(card => {
  card.addEventListener('click', toggleCardSelection);
});