document.addEventListener("DOMContentLoaded", function() {
    

    const header = document.querySelector('#header');
    document.querySelector(".searchbarcontainer").style.height = getComputedStyle(header).height;


    const searchButton = document.querySelector(".searchbutton");
    const searchBar = document.querySelector(".searchbar");
    const searchBarHeight = getComputedStyle(searchBar).height;
    searchButton.style.height = searchBarHeight;

   
});
