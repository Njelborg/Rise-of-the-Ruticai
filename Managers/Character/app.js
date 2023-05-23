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
saveBtn.onclick = function(e) {
  e.preventDefault(); // prevent the form from being submitted normally

  var name = $("#name").val();

  $.ajax({
    url: "save_character.php", // replace this with the actual path to your PHP script
    type: "POST",
    data: {name: name},
    success: function(response) {
      alert(response); // handle the response from the PHP script
      modal.close(); // close the modal
    },
    error: function(jqXHR, textStatus, errorThrown) {
       console.log(textStatus, errorThrown);
    }
  });
}

// When the user clicks on cancel button, close the modal
cancelBtn.onclick = function() {
  modal.close();
}
