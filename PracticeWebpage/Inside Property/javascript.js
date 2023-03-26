const buttons = document.querySelector("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
         .closet("[data-carousel]")
         .querySelector('[data -slides]') 

         const activeSlide = slide.querySelector("[data-active]")
         let newIndex = [...slide.children].indexOf(activeSlide) + offset
         if(newIndex < 0) newIndex = slides.children.length - 1
         if(newIndex >= slides.children.length) newIndex = 0

         slides.children[newIndex].dataset.active = true
         delete activeSlide.dataset.active
    })
})