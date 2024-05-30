document.addEventListener("DOMContentLoaded", function() {
    // Get the input fields and textarea
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var messageInput = document.getElementById("message");
    var sendButton = document.getElementById("sendmessage");

    // Add event listeners to input fields and textarea
    nameInput.addEventListener("input", checkInputs);
    emailInput.addEventListener("input", checkInputs);
    phoneInput.addEventListener("input", checkInputs);
    messageInput.addEventListener("input", checkInputs);

    // Function to check if all fields are filled
    function checkInputs() {
      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '' || messageInput.value.trim() === '') {
        sendButton.setAttribute("disabled", "disabled");
        sendButton.style.cursor = "not-allowed";
      } else {
        sendButton.removeAttribute("disabled");
        sendButton.style.cursor = "pointer";
      }
    }

    // Call the function initially to check if any fields are pre-filled
    checkInputs();
  });