  // Function to update the input value
  function updateValue(inputElement, change) {
    let currentValue = parseInt(inputElement.value, 10);
    if (isNaN(currentValue)) {
        currentValue = 0;
    }
    currentValue += change;
    if (currentValue < 0) {
        currentValue = 0;
    }
    inputElement.value = currentValue;
}

// Function to toggle button states
function toggleButtons(checkbox, index) {
    const minusButton = document.getElementById(`minus${index}`);
    const plusButton = document.getElementById(`plus${index}`);
    const inputElement = document.getElementById(`itemnumber${index}`);
    const isDisabled = !checkbox.checked;
    minusButton.disabled = isDisabled;
    plusButton.disabled = isDisabled;
    inputElement.disabled = isDisabled;
}

// Attach event listeners to all plus and minus buttons
document.querySelectorAll('[id^="plus"]').forEach(button => {
    button.addEventListener('click', function() {
        const index = this.id.replace('plus', '');
        const inputElement = document.getElementById(`itemnumber${index}`);
        updateValue(inputElement, 1);
    });
});

document.querySelectorAll('[id^="minus"]').forEach(button => {
    button.addEventListener('click', function() {
        const index = this.id.replace('minus', '');
        const inputElement = document.getElementById(`itemnumber${index}`);
        updateValue(inputElement, -1);
    });
});

// Attach event listeners to all checkboxes
document.querySelectorAll('.package-checkbox').forEach((checkbox, index) => {
    checkbox.addEventListener('change', function() {
        toggleButtons(this, index + 1);
    });
});

// Initialize button states based on the initial checkbox states
document.querySelectorAll('.package-checkbox').forEach((checkbox, index) => {
    toggleButtons(checkbox, index + 1);
});