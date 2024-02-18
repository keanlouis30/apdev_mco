document.addEventListener("DOMContentLoaded", function (){
    const profilebutton = document.getElementById("profilebutton");
    const settingsbutton = document.getElementById("settingsbutton");
    const dropbutton = document.getElementById("dropdownbutton");
    const optionsdiv = document.getElementById("optionsdiv");
    
    settingsbutton.addEventListener("click", function(){
        window.location.href = 'settings.html';
    });
    profilebutton.addEventListener("click", function(){
        window.location.href = 'userprofile_rosales.html';
    });

    dropbutton.addEventListener("mouseenter", function(){
        optionsdiv.classList.toggle("show");
    });

    window.onclick = function(event) {
        if (!event.target.matches('#dropdownbutton')) {
            var dropdowns = document.getElementsByClassName("dropdowncontent");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

});