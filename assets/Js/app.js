let cd_search = document.querySelector(".cd-search");
let search_close = document.querySelector(".search-close");
let search_btn = document.querySelector(".search-btn");
let header = document.querySelector(".header");
let bars = document.querySelector(".bars-btn");
let accordion = document.querySelector(".accordion");
let back = document.querySelector("#back-top");

search_btn.addEventListener("click",()=>{
    cd_search.style.display ="flex";
    search_close.style.transform="rotate(-90deg)";
    search_close.style.transition=".3s ease";
})

search_close.addEventListener("click",()=>{
    cd_search.style.display ="none"; 
})

function rotateElement(){
    search_close.style.transform="rotate(90deg)";
}

window.addEventListener("scroll",()=>{
    let distance = window.scrollY;
    if(distance>1){
        header.className="header-scroll"
        back.style.display="block"
    }
    else{
        header.className="header";
        back.style.display="none";
    }


})

bars.addEventListener("click",()=>{
    accordion.classList.toggle("accordion-toggle");
})
