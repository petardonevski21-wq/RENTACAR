document.addEventListener('DOMContentLoaded', () => {

    // Листа од вкупно 5 слики (Твојата прва слика + 4 дополнителни патеки)
    // Замени ги имињата на фајловите со точните имиња на твоите слики во фолдерот Porsesliki
    const carImages = [
        "Porsesliki/porseprva.jpg",
        "Porsesliki/porsevtora.jpg", 
        "Porsesliki/porsetreta.jpg",
        "Porsesliki/porsecetvrta.jpg",
        "Porsesliki/porsepetta.jpg"
    ];
    
    let currentImageIndex = 0;
    const mainCarImage = document.getElementById('mainCarImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Клик на десно копче (Следна слика)
    nextBtn.addEventListener('click', () => {
        currentImageIndex++;
        if (currentImageIndex >= carImages.length) {
            currentImageIndex = 0; // Се враќа на почеток
        }
        mainCarImage.src = carImages[currentImageIndex];
    });

    // Клик на лево копче (Претходна слика)
    prevBtn.addEventListener('click', () => {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = carImages.length - 1; // Оди на последната слика
        }
        mainCarImage.src = carImages[currentImageIndex];
    });


    // Логика за интеракција со боите (Непроменето)
    const exteriorSwatches = document.querySelectorAll('#exteriorColors .swatch');
    const exteriorColorText = document.getElementById('exteriorColorText');

    exteriorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            exteriorSwatches.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            exteriorColorText.textContent = this.getAttribute('data-color-name');
        });
    });

    // Логика за интеракција со внатрешноста (Непроменето)
    const interiorSwatches = document.querySelectorAll('#interiorColors .swatch');
    const interiorColorText = document.getElementById('interiorColorText');

    interiorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            interiorSwatches.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            interiorColorText.textContent = this.getAttribute('data-color-name');
        });
    });

    // Логика за избор на тркала (Непроменето)
    const wheelCards = document.querySelectorAll('.wheel-card');

    wheelCards.forEach(card => {
        card.addEventListener('click', function() {
            wheelCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Логика за менито
    const navbar = document.querySelector('.sticky-nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 20px 50px rgba(0,0,0,0.15)';
        } else {
            navbar.style.boxShadow = '0 15px 40px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.04)';
        }
    });

    // ПОПРАВЕНО: Логика за мобилното бургер мени (сега е ВНАТРЕ во главната функција)
    const hamburger = document.getElementById('hamburger');
    const body = document.body;

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navbar.classList.toggle('menu-open');
            body.classList.toggle('no-scroll');
        });
    }

});