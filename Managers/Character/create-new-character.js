// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the form element
var form = document.getElementById("myForm");

// Get the save and cancel buttons
var saveBtn = document.getElementById("saveBtn");
var cancelBtn = document.getElementById("cancelBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.showModal();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.close();
}

// When the user clicks on save button, submit the form and close the modal
saveBtn.onclick = function() {
  form.submit();
  modal.close();
}

// When the user clicks on cancel button, close the modal
cancelBtn.onclick = function() {
  modal.close();
}
