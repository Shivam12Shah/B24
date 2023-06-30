var like = document.querySelector("#like");
var img = document.querySelector("#post img");
var center_heart = document.querySelector("#center-heart");

var profile_img = document.querySelector("#card #prfil-dets #profileimg");
var profile_name = document.querySelector("#profile-name");

// function myFunction() {
//     timeout = setTimeout(remove_hart, 3000);
// }
var flag = 0;
img.addEventListener("dblclick", function () {
    if (flag === 0) {
        like.style.color = "red";
        center_heart.style.opacity = 1
        setTimeout(remove_hart, 3000);
        center_heart.style.color = "white"
        flag = 1;

    }
    else {
        like.style.color = "rgb(206, 206, 206)";
        center_heart.style.opacity = 0
        flag = 0
    }
})


function remove_hart() {
    center_heart.style.opacity = 0
}
function remove_story() {
    profile_img.style.width = "35px";
    profile_img.style.height = "35px";
    profile_img.style.position = "relative";
    profile_img.style.borderRadius = "50%";
    profile_img.style.border = "2px solid gray";
    profile_img.style.left = "7%";
    // profile_img.style.transform ="translate(0%, 0%)"
    profile_img.style.zIndex = "1";
}
var profi = 0
profile_img.addEventListener("click", function () {
    profile_img.style.width = "100%";
    profile_img.style.height = "100%";
    profile_img.style.position = "absolute";
    profile_img.style.top = "50%";
    profile_img.style.left = "50%";
    profile_img.style.transform = "translate(-50%, -50%)";
    profile_img.style.zIndex = "99";
    profile_img.style.borderRadius = "0";
    profile_img.style.border = "2px solid white";
    setTimeout(remove_story, 3000);
})