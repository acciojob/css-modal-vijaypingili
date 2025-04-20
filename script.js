//your JS code here. If required.
// Get elements
const modal = document.getElementById('myModal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');

// Open the modal
openModalButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeModalButton.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Close the modal when clicking outside the modal-content
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
