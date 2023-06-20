// selection of an element 
// changing in HTML
// changing in CSS
// event listener


// document.querySelector
// document.getElementById
// document.getElementsByClassName

// innner html  jab pura tag change karna hai
// textcontent jab bas element ke ander ka change karna hai
//
// 
var btn = document.querySelector("button");
var h4 = document.querySelector("#card h4");

var flag = 0;

btn.addEventListener("click", function () {
    if (flag === 0) {
        h4.textContent = "Friend";
        h4.style.color = "green";
        btn.textContent = "Remove Friend";
        flag = 1

        h4.style.transition = "all ease 3s";
    } else {
        h4.textContent = "Stranger";
        h4.style.color = "red";
        btn.textContent = "Add Friend";
        flag = 0;
        btn
        .style.transition = "all ease 3s";
    }
})