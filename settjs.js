document.addEventListener("DOMContentLoaded", function() {
    let settingsButton = document.getElementById("settings-button");

    if (settingsButton) {
        settingsButton.onclick = function() {
            window.location.href = "settings.html";
        };
    } else {
        console.error("Settings button not found");
    }
});