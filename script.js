document.addEventListener("DOMContentLoaded", (event) => {
            
    // 1. Почетни GSAP анимации (Вчитување на страната)
    const tl = gsap.timeline();

    tl.to(".bg-image", {
        scale: 1,
        duration: 2.5,
        ease: "power2.out"
    }, 0);

    tl.from(".navbar", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, 0.2);

    tl.from(".gsap-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    }, 0.5);

    tl.from(".gsap-btn-wrap", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, 1.1);

    tl.from(".gsap-bottom", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    }, 1);

    tl.from(".slider-arrow, .slider-dots", {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, 1.5);

    // 2. Континуирана анимација за Chat Bubble
    gsap.fromTo(".chat-bubble", 
        { y: 0 }, 
        { 
            y: -15, 
            repeat: -1, 
            yoyo: true, 
            duration: 2, 
            ease: "sine.inOut" 
        }
    );

    gsap.from(".chat-bubble", {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: "power3.out"
    });

    // 3. MAGNETIC ЕФЕКТ НА КОПЧИЊАТА (Изменето за да не шета, само прави Scale)
    const magneticBtns = document.querySelectorAll('.magnetic-btn');

    magneticBtns.forEach(btn => {

        btn.addEventListener('mousemove', (e) => {

            const position = btn.getBoundingClientRect();

            const x = e.clientX - position.left - position.width / 2;
            const y = e.clientY - position.top - position.height / 2;

            gsap.to(btn, {
                // ГИ ТРГНАВМЕ X И Y ЗА ДА СТОИ ВО МЕСТО
                // x: x * 0.3,
                // y: y * 0.5,
                scale: 1.05,
                duration: 0.5,
                ease: "power3.out"
            });

        });

        btn.addEventListener('mouseleave', () => {

            gsap.to(btn, {
                // ГИ ТРГНАВМЕ X И Y И ТУКА
                // x: 0,
                // y: 0,
                scale: 1,
                duration: 0.7,
                ease: "elastic.out(1, 0.3)"
            });

        });

        // CLICK ANIMATION
        btn.addEventListener("click", () => {

            gsap.fromTo(btn,
                {
                    scale: 1
                },
                {
                    scale: 0.92,
                    duration: 0.12,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.inOut"
                }
            );

            gsap.fromTo(btn,
                {
                    boxShadow: "0 0 0 rgba(160,53,13,0)"
                },
                {
                    boxShadow: "0 0 35px rgba(160,53,13,0.6)",
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1
                }
            );

        });

    });

});


document.addEventListener("DOMContentLoaded", () => {
    
    gsap.registerPlugin(ScrollTrigger);

    const rows = document.querySelectorAll('.gsap-row');

    if (rows.length > 0 && document.querySelector(".models-section")) {
        // 1. Влезна анимација за редовите
        gsap.to(rows, {
            scrollTrigger: {
                trigger: ".models-section", 
                start: "top 85%", 
                toggleActions: "play none none reverse"
            },
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            stagger: 0.15, 
            ease: "power2.out" 
        });

        // 2. Parallax ефект
        rows.forEach(row => {
            const bgImage = row.querySelector('.model-bg');
            if (bgImage) {
                gsap.fromTo(bgImage, 
                    { y: "-60px" },
                    {
                        y: "60px",
                        ease: "none",
                        scrollTrigger: {
                            trigger: row,
                            start: "top bottom", 
                            end: "bottom top",
                            scrub: true,
                            invalidateOnRefresh: true
                        }
                    }
                );
            }
        });
    }

});


/* ========================================================== */
/* --- НАДГРАДЕНА ЛОГИКА ЗА LANDON NORRIS ХОРИЗОНТАЛЕН СКРОЛ --- */
/* ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    if (document.querySelector(".newest-models-section")) {
        // Мазна транзиција на бојата од црна во бела
        gsap.to(["body", ".models-section", ".newest-models-section"], {
            backgroundColor: "#ffffff",
            ease: "none",
            scrollTrigger: {
                trigger: ".newest-models-section",
                start: "top bottom",
                end: "top 20%",
                scrub: 2.5
            }
        });

        // Влезна анимација за насловот и картичките
        gsap.from(".newest-title", {
            scrollTrigger: {
                trigger: ".newest-models-section",
                start: "top 70%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(".car-card", {
            scrollTrigger: {
                trigger: ".carousel-container",
                start: "top 70%",
            },
            y: 80,
            opacity: 0,
            scale: 0.9,
            rotateY: 15,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out"
        });
    }

    // HOVER EFFECT FOR CARDS
    const carCards = document.querySelectorAll(".car-card");

    carCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, {
                y: -15,
                scale: 1.03,
                duration: 0.45,
                ease: "power3.out"
            });

            const img = card.querySelector("img");
            if (img) {
                gsap.to(img, {
                    scale: 1.08,
                    rotate: -1,
                    duration: 0.5,
                    ease: "power3.out"
                });
            }
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.45,
                ease: "power3.out"
            });

            const img = card.querySelector("img");
            if (img) {
                gsap.to(img, {
                    scale: 1,
                    rotate: 0,
                    duration: 0.5,
                    ease: "power3.out"
                });
            }
        });
    });

    // --- ЕФЕКТ ЗА ИНЕРЦИЈА ---
    const track = document.querySelector(".carousel-track");
    const progressBar = document.querySelector(".progress-bar-fill");
    const carouselContainer = document.querySelector('.carousel-container');

    if (track && carouselContainer && document.querySelector(".newest-models-section")) {
        
        function getScrollAmount() {
            let trackWidth = track.scrollWidth;
            return -(trackWidth - carouselContainer.offsetWidth + 100);
        }

        const scrollProxy = { x: 0 };
        const setTrackX = gsap.quickSetter(track, "x", "px");

        ScrollTrigger.create({
            trigger: ".newest-models-section",
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,

            onUpdate: (self) => {
                const targetX = self.progress * getScrollAmount();

                gsap.to(scrollProxy, {
                    x: targetX,
                    duration: 1.4,
                    ease: "expo.out",
                    overwrite: "auto",
                    onUpdate: () => {
                        setTrackX(scrollProxy.x);
                    }
                });

                // Progress Bar Animation
                if (progressBar) {
                    gsap.to(progressBar, {
                        width: `${self.progress * 100}%`,
                        duration: 0.4,
                        ease: "power2.out"
                    });
                }
            }
        });
    }
});


/* ====================================================== */
/* --- RENT SECTION ANIMATIONS --- */
/* ====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    if (document.querySelector(".rent-section")) {
        // REMOVE CATEGORY ITEMS
        const categoryList = document.querySelector(".category-list");
        if(categoryList){
            categoryList.remove();
        }

        // TOP INFO BOXES
        gsap.to(".info-box", {
            scrollTrigger: {
                trigger: ".rent-section",
                start: "top 75%",
                toggleActions: "play none none reverse"
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // TITLE
        if (document.querySelector(".rent-title")) {
            gsap.to(".rent-title", {
                scrollTrigger: {
                    trigger: ".rent-title",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            });
        }

        // FILTERS + BUTTON
        if (document.querySelector(".rent-filters")) {
            gsap.to([".filter-box", ".find-btn"], {
                scrollTrigger: {
                    trigger: ".rent-filters",
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            });
        }
    }

    // PROFESSIONAL BUTTON EFFECT
    const findBtn = document.querySelector(".find-btn");

    if(findBtn){
        findBtn.addEventListener("mouseenter", () => {
            gsap.to(findBtn, {
                scale: 1.06,
                y: -5,
                duration: 0.35,
                ease: "power3.out",
                boxShadow: "0 15px 30px rgba(160,53,13,0.35)"
            });
        });

        findBtn.addEventListener("mouseleave", () => {
            gsap.to(findBtn, {
                scale: 1,
                y: 0,
                duration: 0.35,
                ease: "power3.out",
                boxShadow: "0 0px 0px rgba(0,0,0,0)"
            });
        });

        findBtn.addEventListener("click", () => {
            gsap.fromTo(findBtn,
                { scale: 1 },
                {
                    scale: 0.9,
                    duration: 0.12,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.inOut"
                }
            );
        });
    }
});


/* ================================================= */
/* ================= STICKY NAV ==================== */
/* ================================================= */

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


document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.reveal-left, .reveal-right');
    animatedElements.forEach(el => observer.observe(el));
});
    

/* LENIS INITIALIZATION */
if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
        duration: 1.4,
        lerp: 0.08,
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
    });

    /* GSAP + LENIS SYNC */
    if (typeof ScrollTrigger !== 'undefined') {
        lenis.on("scroll", ScrollTrigger.update);
    }

    if (typeof gsap !== 'undefined') {
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const grids = document.querySelectorAll('.places-grid');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetId = button.getAttribute('data-target');

            grids.forEach(grid => {
                grid.classList.remove('active');
                if (grid.id === targetId) {
                    void grid.offsetWidth; 
                    grid.classList.add('active');
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    
    const scrollOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('brands-grid')) {
                    const cards = entry.target.querySelectorAll('.brand-card');
                    cards.forEach((card, index) => {
                        card.style.transitionDelay = `${index * 0.08}s`;
                        card.classList.add('active-scroll');
                    });
                } else {
                    entry.target.classList.add('active-scroll');
                    entry.target.classList.add('show-scroll'); 
                }
                observer.unobserve(entry.target);
            }
        });
    }, scrollOptions);

    const textElement = document.querySelector('.brands-content');
    const imageElement = document.querySelector('.brands-image-wrapper');
    const titleElement = document.querySelector('.brands-title');
    const gridElement = document.querySelector('.brands-grid');
    const destinationsSection = document.querySelector('.destinations-section'); 

    if (textElement) observer.observe(textElement);
    if (imageElement) observer.observe(imageElement);
    if (titleElement) observer.observe(titleElement);
    if (gridElement) observer.observe(gridElement);
    if (destinationsSection) observer.observe(destinationsSection); 
});

/* Сменете го само овој дел во вашиот script.js */
document.addEventListener("DOMContentLoaded", () => {
    const burgerToggle = document.getElementById("burgerToggle");
    const navLinks = document.querySelector(".nav-links");
    const body = document.body;

    if (burgerToggle && navLinks) {
        burgerToggle.addEventListener("click", () => {
            burgerToggle.classList.toggle("active");
            navLinks.classList.toggle("active");
            
            // НОВО: Проверка дали менито е отворено
            if (navLinks.classList.contains("active")) {
                body.style.overflow = "hidden";
                body.classList.add("menu-open"); // Додаваме класа за криење на херото
            } else {
                body.style.overflow = "auto";
                body.classList.remove("menu-open"); // Ја тргаме кога се затвора
            }
        });

        // Автоматско затворање при клик на линк
        const menuItems = navLinks.querySelectorAll("a");
        menuItems.forEach(item => {
            item.addEventListener("click", () => {
                burgerToggle.classList.remove("active");
                navLinks.classList.remove("active");
                body.style.overflow = "auto";
                body.classList.remove("menu-open");
            });
        });
    }
});