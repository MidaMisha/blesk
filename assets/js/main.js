
document.querySelector('.overlay').addEventListener('click', function() {
    document.getElementById('menu-toggle').checked = false;
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const circles = document.querySelectorAll('.circle');
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));

        circles.forEach(circle => circle.classList.remove('active'));
        
        slides[index].classList.add('active');
        
        circles[index].classList.add('active');
        
        currentIndex = index;
    }
    
    function startSlider() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }, 5000);
    }
    
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            clearInterval(interval);
            const index = parseInt(circle.getAttribute('data-index'));
            showSlide(index);
            startSlider();
        });
    });
    
    showSlide(0);
    startSlider();
});