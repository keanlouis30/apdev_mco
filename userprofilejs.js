document.addEventListener("DOMContentLoaded", function () {
    const profileusername = document.getElementById("username");
    const profilebio = document.getElementById("bio");
    const user_bio_EB = document.getElementById("editbutton1");
    const user_bio_SB = document.getElementById("savebutton1");

    
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


document.querySelector('#firstcol').style.height = getComputedStyle(document.getElementById('body')).height