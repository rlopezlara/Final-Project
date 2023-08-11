// We wait for the HTML page to fully load all the elements.

document.addEventListener('DOMContentLoaded', () => {


    // we make the function for the carousel to move automatically every 3 seconds
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    function slideToNextImage() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        const translateXValue = -currentIndex * 100;
        carousel.style.transform = `translateX(${translateXValue}%)`;
        if (currentIndex === 10) { currentIndex = 0 }
    }

    setInterval(slideToNextImage, 3000);
    // accordion config About page questions and answers//
    const accordion = document.getElementsByClassName('contentBox');
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }
    // accordion config Home page Services and details//
    const accordion2 = document.getElementsByClassName('contentBox2');
    for (let j = 0; j < accordion2.length; j++) {
        accordion2[j].addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

});