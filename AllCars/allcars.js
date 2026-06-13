// Податоци за автомобилите (ПОПРАВЕНА ПАТЕКА ДО ПОРШЕТО)
const cars = [
{ name: "Porsche 911 Carrera", price: 900, isNew: true, img: "AllCars sliki/porrse.jpg", link: "/Porsche911Carrera/porse911.html" },
{ name: "Mercedes SL63 Cabrio", price: 800, isNew: true, img: "AllCars sliki/merc.png" },
{ name: "McLaren 765LT", price: 1600, isNew: true, img: "AllCars sliki/mcclaren.jpg" },
{ name: "Mercedes S63 Cabrio", price: 700, isNew: false, img: "AllCars sliki/merr.jpg" },
{ name: "BMW M4 Cabrio", price: 400, isNew: false, img: "AllCars sliki/m4.jpg" },
{ name: "Ferrari 488 Spider", price: 1100, isNew: false, img: "AllCars sliki/ferrari.png" },
{ name: "Rolls-Royce Dawn", price: 1700, isNew: false, img: "AllCars sliki/rolls.png" },
{ name: "Range Rover Evoque Cabrio", price: 300, isNew: false, img: "AllCars sliki/range.jpg" },
{ name: "Lamborghini Huracan", price: 1500, isNew: false, img: "AllCars sliki/lambo.jpg" },
{ name: "Ferrari 812 GTS", price: 1700, isNew: false, img: "AllCars sliki/modern.jpg" },
{ name: "BMW M8 Cabrio", price: 800, isNew: false, img: "AllCars sliki/m8.jpg" },
{ name: "Ferrari SF90 Spider", price: 2000, isNew: false, img: "AllCars sliki/download.jpg" }
];

// Функција за прикажување на автомобилите во HTML
function renderCars() {
    const grid = document.getElementById('car-grid');
    grid.innerHTML = ''; // Исчисти пред да црташ

    cars.forEach(car => {
        const newBadge = car.isNew ? `<span class="badge-new">NEW</span>` : '';
        
        // Проверува дали колата има ставено линк, ако има додава onclick настан
        const clickEvent = car.link ? `onclick="window.location.href='${car.link}'"` : '';

        // Додаден ${clickEvent} во div-от за да го направи кликабилен
        const cardHTML = `
            <div class="car-card" ${clickEvent}>
                <div class="car-header">
                    <span class="car-title">${car.name}</span>
                    ${newBadge}
                </div>
                <div class="car-price">From ${car.price}$/day</div>
                <img src="${car.img}" alt="${car.name}" class="car-image">
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}

// Функција за чистење на филтрите
function clearFilters() {
    document.getElementById('car-type').value = 'all';
    document.getElementById('car-brand').value = 'all';
    document.getElementById('price-from').value = '';
    document.getElementById('price-to').value = '';
    document.getElementById('hp-from').value = '';
    document.getElementById('hp-to').value = '';
}

// Иницијално рендерирање кога ќе се вчита страната
window.onload = renderCars;