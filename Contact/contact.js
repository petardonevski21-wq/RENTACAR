document.addEventListener('DOMContentLoaded', () => {
    
    /* 1. Иницијализација на Intersection Observer за scroll анимации */
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Елементот ќе се анимира кога 15% од него ќе биде видлив
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Додади класа што го прави елементот видлив и ја активира CSS транзицијата
                entry.target.classList.add('is-visible');
                
                // Престани да го следиш елементот откако веќе еднаш ќе се анимира
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });

    /* 2. Дополнителна логика за Sticky Nav (Опционално, за подобро корисничко искуство) */
    // Овој код додава суптилна сенка или промена ако скролаш надолу, 
    // иако твоето мени веќе има убава позадина.
    const navbar = document.querySelector('.sticky-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 20px 50px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.04)';
        }
    });

});

/* ========================================== */
    /* --- ЛОГИКА ЗА МОБИЛНО БУРГЕР МЕНИ --------- */
    /* ========================================== */
    const burgerToggle = document.getElementById("burgerToggle");
    const stickyLinks = document.querySelector(".sticky-links");
    const body = document.body;

    if (burgerToggle && stickyLinks) {
        burgerToggle.addEventListener("click", () => {
            burgerToggle.classList.toggle("active");
            stickyLinks.classList.toggle("active");
            
            if (stickyLinks.classList.contains("active")) {
                body.style.overflow = "hidden";
                body.classList.add("menu-open");
            } else {
                body.style.overflow = "auto";
                body.classList.remove("menu-open");
            }
        });

        // Затвори при клик на линк
        const menuItems = stickyLinks.querySelectorAll("a");
        menuItems.forEach(item => {
            item.addEventListener("click", () => {
                burgerToggle.classList.remove("active");
                stickyLinks.classList.remove("active");
                body.style.overflow = "auto";
                body.classList.remove("menu-open");
            });
        });
    }