document.addEventListener('DOMContentLoaded', () => {
    
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    // Smooth scroll for nav items handled by CSS scroll-behavior: smooth
    // We just need to handle the active state on scroll

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });

    // Simple interaction for project cards
    const projectCards = document.querySelectorAll('.hover-lift');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Log interaction or perform minor animation if needed
        });
    });

    // Simulate GitHub fetching
    const githubStatus = document.querySelector('.github-stats-placeholder p');
    const githubDot = document.querySelector('.stat-dot');
    
    if(githubStatus) {
        setTimeout(() => {
            githubStatus.textContent = 'Active: 15 Repositories • 420 Contributions';
            githubDot.style.background = '#28a745';
            githubDot.style.boxShadow = '0 0 10px rgba(40, 167, 69, 0.4)';
        }, 1500);
    }

});
