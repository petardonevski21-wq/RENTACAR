document.addEventListener("DOMContentLoaded", () => {
    const stickyNav = document.querySelector(".sticky-nav");
    const heroSection = document.querySelector(".hero-section");

    if (stickyNav && heroSection) {
        window.addEventListener("scroll", () => {
            const heroBottom = heroSection.offsetHeight - 120;
            if(window.scrollY > heroBottom){
                stickyNav.classList.add("active");
            } else {
                stickyNav.classList.remove("active");
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Постоечки код за Sticky Nav ---
    const stickyNav = document.querySelector(".sticky-nav");
    const heroSection = document.querySelector(".hero-section");

    if (stickyNav && heroSection) {
        window.addEventListener("scroll", () => {
            const heroBottom = heroSection.offsetHeight - 120;
            if(window.scrollY > heroBottom){
                stickyNav.classList.add("active");
            } else {
                stickyNav.classList.remove("active");
            }
        });
    }

    // --- 2. НОВ КОД: Анимации при скролање за новата секција ---
    const observerOptions = {
        threshold: 0.15 // Се активира кога 15% од елементот е видлив
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animate');
                // Опционално: Отстрани го observer-от ако сакаш анимацијата да се случи само еднаш
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden-animate');
    hiddenElements.forEach((el) => observer.observe(el));

});
document.addEventListener("DOMContentLoaded", function () {
    const statsSection = document.querySelector(".stats-section");
    const statNumbers = document.querySelectorAll(".stat-number");

    // Креираме обсервер кој следи кога секцијата ќе влезе во видокругот
    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                // Стартувај го броењето за секоја бројка посебно
                statNumbers.forEach(counter => {
                    const target = parseInt(counter.getAttribute("data-target"));
                    const suffix = counter.getAttribute("data-suffix") || "";
                    const prefix = counter.getAttribute("data-prefix") || "";
                    
                    let current = 0;
                    // Пресметка за брзината: колку е поголем бројот, толку побрзо брои за да завршат заедно
                    const duration = 2000; // Цела анимација трае точно 2 секунди
                    const stepTime = Math.max(Math.floor(duration / target), 20);
                    
                    const updateCounter = setInterval(() => {
                        // Кај поголеми бројки скока за повеќе, кај помали (како 3 и 12) оди по 1
                        const increment = target > 50 ? Math.ceil(target / 40) : 1;
                        current += increment;
                        
                        if (current >= target) {
                            current = target;
                            clearInterval(updateCounter);
                        }
                        
                        // Го печати точниот формат (пр. "1:" + бројка или бројка + "+")
                        counter.textContent = prefix + current + suffix;
                    }, stepTime);
                });

                // Откако еднаш ќе изброи, го исклучуваме за да не се повторува при секое скролање нагоре-надолу
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3 // Анимацијата почнува кога 30% од секцијата ќе се појави на екранот
    });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

/* ========================================== */
/* --- ЛОГИКА ЗА МОБИЛНО БУРГЕР МЕНИ (ABOUT) - */
/* ========================================== */
document.addEventListener("DOMContentLoaded", () => {
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
});