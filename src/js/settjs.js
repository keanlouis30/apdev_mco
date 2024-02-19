document.addEventListener("DOMContentLoaded", function() {
    let settingsButton = document.getElementById("settings-button");

    if (settingsButton) {
        settingsButton.onclick = function() {
            window.location.href = "settings.html";
        };
    } else {
        console.error("Settings button not found");
    }

    const passwordButton = document.getElementById("sb2");
    const profileButton = document.getElementById("sb1");
    const profilepane = document.getElementById("profilerightpane1");
    const passwordpane = document.getElementById("profilerightpane1");
    
    passwordButton.addEventListener("click", function(){
        passwordpane.style.zIndex = 2;
        profilepane.style.zIndex = 1;
    });

    profileButton.addEventListener("click", function(){
        passwordpane.style.zIndex = 1;
        profilepane.style.zIndex = 2;
    });

    const dp = document.getElementById("dpimg");
    const imagechangebutton = document.getElementById("input-file");
    
    imagechangebutton.onchange = function(){
        dp.src = URL.createObjectURL(imagechangebutton.files[0]);
    };

    
});