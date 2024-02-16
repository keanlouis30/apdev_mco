document.addEventListener("DOMContentLoaded", function (){
    const profilebutton = document.getElementById("profilebutton");
    const settingsbutton = document.getElementById("settingsbutton");

    settingsbutton.addEventListener("click", function(){
        window.location.href = 'settings.html';
    });
    profilebutton.addEventListener("click", function(){
        window.location.href = 'userprofile_rosales.html';
    });
    
});

