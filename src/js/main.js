// header
document.addEventListener("DOMContentLoaded", function() {
    

    const header = document.querySelector('#header');
    document.querySelector(".searchbarcontainer").style.height = getComputedStyle(header).height;


    const searchButton = document.querySelector(".searchbutton");
    const searchBar = document.querySelector(".searchbar");
    const searchBarHeight = getComputedStyle(searchBar).height;
    searchButton.style.height = searchBarHeight;

   
});

//home_registered
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

// login validation
const validUsers = {
    "user1": "pass1",
    "user2": "pass2",
    "user3": "pass3",
    "user4": "pass4",
    "user5": "pass5"
};

const validateLogin = (usernameInput, passwordInput) => {
    if (validUsers.hasOwnProperty(usernameInput)) {
        // Check if the password matches the stored password for the username
        if (validUsers[usernameInput] === passwordInput) {
            alert("Login successful!");
            window.location.href = "mco_home_registered.html";
        } else {
            alert("Incorrect password. Please try again.");
        }
    } else {
        alert("Username not found. Please check your username and try again.");
    }
}

const loginForm = document.getElementsByClassName("login-form")[0];

loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get values from input fields
    const usernameInput = document.getElementsByName("username")[0].value;
    const passwordInput = document.getElementsByName("password")[0].value;

    // Call the validateLogin function with the retrieved values
    validateLogin(usernameInput, passwordInput);
});

//post
function myFunction(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// searchpage
document.getElementById("hb1").onclick = function() {
    window.location.href = "homelog.html";
}

document.getElementById("hb3").onclick = function() {
    window.location.href = "mco_login.html";
}

document.getElementById("hb4").onclick = function() {
    window.location.href = "mco_register.html";
}

// settings
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

// userprofile
document.querySelector('#firstcol').style.height = getComputedStyle(document.getElementById('body')).height;

document.addEventListener("DOMContentLoaded", function () {
    const profileusername = document.getElementById("username");
    const profilebio = document.getElementById("bio");
    const user_bio_EB = document.getElementById("editbutton1");
    const user_bio_SB = document.getElementById("savebutton1");
    let profilePic = document.getElementById("dp");
    let inputfile = document.getElementById("input-file");

    inputfile.onchange = function(){
        profilePic.src = URL.createObjectURL(inputfile.files[0]);
    };
    
    // user_bio_EB.addEventListener("click", function () {
    //     profileusername.contentEditable = true;
    //     profilebio.contentEditable = true;
    //     profileusername.style.backgroundColor = "#b4c1b4";
    //     profilebio.style.backgroundColor = "#b4c1b4";
    //     user_bio_SB.style.cursor = "auto";
    // });

    // user_bio_SB.addEventListener("click", function(){
    //     profileusername.contentEditable = false;
    //     profilebio.contentEditable = false;
    //     profileusername.style.backgroundColor = "#ffffff";
    //     profilebio.style.backgroundColor = "#ffffff";
    //     user_bio_SB.style.cursor = "not-allowed";
    // });


});

// function react(element, containerId) {
//     // Toggle the 'clicked' class to change the color
//     var container = document.getElementById(containerId);
//     var elements = container.querySelectorAll('.rating img');
//     elements.forEach(function(el) {
//         if (el !== element && el.classList.contains('clicked')) {
//             el.classList.remove('clicked');
//         }
//     });
    
//     element.classList.toggle('clicked');
// }

// document.getElementById('profile-button').onclick = function() {
//     window.location.href = "userprofile_cua.html";
// }