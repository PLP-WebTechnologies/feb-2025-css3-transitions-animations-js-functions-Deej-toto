// Select the button element
const animateButton = document.getElementById("animateButton");

// Function to store user preference
function savePreference(key, value) {
    localStorage.setItem(key, value);
}

// Function to retrieve user preference
function getPreference(key) {
    return localStorage.getItem(key);
}

// Event listener to trigger animation and store preference
animateButton.addEventListener("click", function() {
    this.style.transform = "scale(1.2)";
    savePreference("buttonClicked", "true");
});

// Check stored preference on page load and apply animation if needed
window.addEventListener("DOMContentLoaded", function() {
    if (getPreference("buttonClicked") === "true") {
        animateButton.style.transform = "scale(1.2)";
    }
});
