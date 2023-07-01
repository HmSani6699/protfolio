const styleSwitcherToggle=document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click',()=>{
    document.querySelector('.style-switcher').classList.toggle('open')
})



const dayNight=document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("drak")){
        dayNight.querySelector("i").classList.add("fa-sun")
    }
else{
    dayNight.querySelector("i").classList.add("fa-moon")
}

})