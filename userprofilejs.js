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
    
    user_bio_EB.addEventListener("click", function () {
        profileusername.contentEditable = true;
        profilebio.contentEditable = true;
        profileusername.style.backgroundColor = "#b4c1b4";
        profilebio.style.backgroundColor = "#b4c1b4";
        user_bio_SB.style.cursor = "auto";
    });

    user_bio_SB.addEventListener("click", function(){
        profileusername.contentEditable = false;
        profilebio.contentEditable = false;
        profileusername.style.backgroundColor = "#ffffff";
        profilebio.style.backgroundColor = "#ffffff";
        user_bio_SB.style.cursor = "not-allowed";
    });


});

function react(element, containerId) {
    // Toggle the 'clicked' class to change the color
    var container = document.getElementById(containerId);
    var elements = container.querySelectorAll('.rating img');
    elements.forEach(function(el) {
        if (el !== element && el.classList.contains('clicked')) {
            el.classList.remove('clicked');
        }
    });
    
    element.classList.toggle('clicked');
}

// document.getElementById('profile-button').onclick = function() {
//     window.location.href = "userprofile_cua.html";
// }


document.querySelector('#firstcol').style.height = getComputedStyle(document.getElementById('body')).height;