
{/* <i class="ri-close-line"></i> */}

var nav = document.querySelector("#nav-part1 h2");
var navbar = document.querySelector("#nav-bar") 


var flag =0 ;
nav.addEventListener("click", function(){
    if(flag===0){
        navbar.style.top= 0;
        nav.innerHTML = `<i class="ri-close-line"></i>`;
        flag=1
    }else{
        navbar.style.top= "-100%";
        nav.innerHTML = `<i class="ri-menu-line"></i>`;
        flag=0
    }
})