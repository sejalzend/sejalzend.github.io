// Animate stats counting
document.addEventListener('DOMContentLoaded', function() {
    // Stats counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-count');
        const count = +stat.innerText;
        const increment = target / speed;
        
        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            stat.innerText = target;
        }
        
        function updateCount() {
            const current = +stat.innerText;
            if (current < target) {
                stat.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 1);
            } else {
                stat.innerText = target;
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});