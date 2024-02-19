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
    const appearanceButton = document.getElementById("sb3");
    const profilepane = document.getElementById("profilerightpane1");
    const passwordpane = document.getElementById("profilerightpane2");
    const appearancepane = document.getElementById("profilerightpane3");
    
    passwordButton.addEventListener("click", function(){
        passwordpane.style.zIndex = 3;
        profilepane.style.zIndex = 1;
        appearancepane.style.zIndex = 2;
    });

    profileButton.addEventListener("click", function(){
        passwordpane.style.zIndex = 1;
        profilepane.style.zIndex = 3;
        appearancepane.style.zIndex = 2;
    });

    appearanceButton.addEventListener("click", function(){
        passwordpane.style.zIndex = 1;
        profilepane.style.zIndex = 2;
        appearancepane.style.zIndex = 3;
    });

    const dp = document.getElementById("dpimg");
    const imagechangebutton = document.getElementById("input-file");
    
    imagechangebutton.onchange = function(){
        dp.src = URL.createObjectURL(imagechangebutton.files[0]);
    };

    const darkmode = document.getElementById("dmodetoggle");
    const html = document.documentElement;
    const header = document.getElementById("header");

    darkmode.addEventListener("click", function(){
        html.style.backgroundImage = 'none';
        html.style.backgroundColor = 'var(--black)';
        header.style.backgroundColor = 'var(--black)';
    });

    
});