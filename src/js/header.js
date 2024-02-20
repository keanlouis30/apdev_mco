document.addEventListener("DOMContentLoaded", function() {
    

    const header = document.querySelector('#header');
    document.querySelector(".searchbarcontainer").style.height = getComputedStyle(header).height;


    const searchButton = document.querySelector(".searchbutton");
    const searchBar = document.querySelector(".searchbar");
    const searchBarHeight = getComputedStyle(searchBar).height;
    searchButton.style.height = searchBarHeight;

    const dropbutton = document.getElementById("dropdownbutton");
    const optionsdiv = document.getElementById("optionsdiv");
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

    const profilebutton = document.getElementById("profilebutton");
    const settingsbutton = document.getElementById("settingsbutton");
    
    
    settingsbutton.addEventListener("click", function(){
        window.location.href = 'settings.html';
    });
    profilebutton.addEventListener("click", function(){
        window.location.href = 'userprofile_rosales.html';
    });

    const html = document.documentElement;
    const headerbg = document.getElementById("header");
    const dmodetoggle = document.getElementById("dmodetoggle");
    const body = document.getElementById("body");

    dmodetoggle.addEventListener("click", function(){
        headerbg.classList.toggle("blackbg");
        body.classList.toggle("graybg");
    });


});
