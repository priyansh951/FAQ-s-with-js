const accordians = document.querySelectorAll(".accordian");
// idhar se sari accordian class ko acccess kiya
accordians.forEach(accordian=>{
    const icon = accordian.querySelector(".icon");
    const answer = accordian.querySelector(".answer");
    // har acc se inko select kiya

    accordian.addEventListener('click',() =>{
        icon.classList.toggle("active");
        answer.classList.toggle("active");
    })

})  