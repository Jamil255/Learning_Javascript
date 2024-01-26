// Get the modal and the edit button
var modal = document.getElementById('myModal');
var editButton = document.getElementById('editButton');

// When the user clicks the edit button, open the modal
editButton.onclick = function() {
    modal.style.display = 'block';
}

// When the user clicks the close button, close the modal
modal.querySelector('.close').onclick = function() {
    modal.style.display = 'none';
}
