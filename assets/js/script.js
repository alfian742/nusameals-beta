// Custom navbar
document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('#customNavbar .nav-link');
    const sections = document.querySelectorAll('section');
    const offset = 84;

    function updateNavbar() {
        const scrollPosition = window.pageYOffset + offset;

        sections.forEach(function (section) {
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);

            const isSectionActive = section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition;

            navLink.classList.toggle('active', isSectionActive);
        });
    }

    window.addEventListener('scroll', updateNavbar);
    window.addEventListener('resize', updateNavbar);

    navbarLinks.forEach(function (link) {
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetOffset = targetSection.offsetTop - offset;

                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });

                navbarLinks.forEach(function (navLink) {
                    navLink.classList.remove('active');
                });

                link.classList.add('active');
            });
        }
    });

    // Initial update
    updateNavbar();
});

// Dataset
const foodData = [
    {
        name: 'Iga Bakar',
        city: 'Surabaya',
        price: 'IDR 35,000',
        calories: '450 kcal',
        imageUrl: 'assets/img/food/iga-bakar.jpg',
        desc: 'Iga bakar is a delicious and savory dish typical of East Java. Grilled with selected spices, these ribs will surely delight your taste buds.',
        ingredients: 'Beef ribs, spices, soy sauce, shallots, garlic, salt.'
    },
    {
        name: 'Sate Kambing',
        city: 'Malang',
        price: 'IDR 25,000',
        calories: '380 kcal',
        imageUrl: 'assets/img/food/sate-kambing.jpg',
        desc: 'Sate kambing is a popular dish in East Java. Tender goat meat is grilled with tasty peanut sauce.',
        ingredients: 'Goat meat, peanut sauce, shallots, garlic, sweet soy sauce.'
    },
    {
        name: 'Sate Maranggi',
        city: 'Cirebon',
        price: 'IDR 40,000',
        calories: '500 kcal',
        imageUrl: 'assets/img/food/sate-maranggi.jpg',
        desc: 'Sate Maranggi is a famous dish from Cirebon known for its spicy seasonings and unique taste.',
        ingredients: 'Beef, maranggi seasoning, red chili, green chili, garlic.'
    },
    {
        name: 'Empal Gentong',
        city: 'Cirebon',
        price: 'IDR 28,000',
        calories: '360 kcal',
        imageUrl: 'assets/img/food/empal-gentong.jpg',
        desc: 'Empal Gentong is a richly spiced beef soup with traditional seasonings from Cirebon.',
        ingredients: 'Beef, coconut milk, lemongrass, bay leaves, spices.'
    },
];


const drinkData = [
    {
        name: 'Wedang Jahe Merah',
        city: 'Yogyakarta',
        price: 'IDR 15,000',
        calories: '90 kcal',
        imageUrl: 'assets/img/drink/wedang-jahe-merah.jpg',
        desc: 'Wedang Jahe Merah is a traditional Indonesian beverage that is warm and refreshing, made from red ginger, brown sugar, and selected spices.',
        ingredients: 'Red ginger, brown sugar, pandan leaves, cloves.'
    },
    {
        name: 'Es Lemon Tea',
        city: 'Jakarta',
        price: 'IDR 20,000',
        calories: '120 kcal',
        imageUrl: 'assets/img/drink/es-lemon-tea.jpg',
        desc: 'Es Lemon Tea is a refreshing drink made from black tea with added lemon juice and ice cubes. Perfect for hot weather.',
        ingredients: 'Black tea, lemon, sugar, ice cubes.'
    },
    {
        name: 'Es Cincau',
        city: 'Bandung',
        price: 'IDR 10,000',
        calories: '70 kcal',
        imageUrl: 'assets/img/drink/es-cincau.jpg',
        desc: 'Es Cincau is a sweet beverage made from chewy cincau agar-agar, served with coconut milk and brown sugar syrup.',
        ingredients: 'Cincau agar-agar, coconut milk, brown sugar syrup.'
    },
    {
        name: 'Jus Mangga',
        city: 'Surabaya',
        price: 'IDR 18,000',
        calories: '150 kcal',
        imageUrl: 'assets/img/drink/jus-mangga.jpg',
        desc: 'Jus Mangga is a refreshing drink made from fresh mangoes blended to smooth perfection. Enjoy the sweet taste of mango in every sip.',
        ingredients: 'Mango, water, sugar.'
    },
];

// Memilih elemen
const cardFood = document.querySelector('#tabMenusFood #cardFood .row');
const cardDrink = document.querySelector('#tabMenusDrink #cardDrink .row');
const carouselFood = document.querySelector('#tabMenusFood #carouselFood .carousel-inner');
const carouselDrink = document.querySelector('#tabMenusDrink #carouselDrink .carousel-inner');

// Iterasi data
foodData.forEach(function (foodItem, index) {
    const cardDiv = createCardAndModal(foodItem, 'foodCard', index);
    cardFood.appendChild(cardDiv);

    const carouselDiv = createCarouselAndModal(foodItem, 'foodCarousel', index);
    carouselFood.appendChild(carouselDiv);
});
drinkData.forEach(function (drinkItem, index) {
    const cardDiv = createCardAndModal(drinkItem, 'drinkCard', index);
    cardDrink.appendChild(cardDiv);

    const carouselDiv = createCarouselAndModal(drinkItem, 'drinkCarousel', index);
    carouselDrink.appendChild(carouselDiv);
});

// Eksekusi
function createCardAndModal(data, idPrefix, increment) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col-md-3');
    cardDiv.innerHTML = `
        <div class="card border-0 w-100 h-100 shadow-sm rounded-4 pointer" id="${idPrefix}${increment}" data-bs-toggle="tooltip" data-bs-title="Click to see details of ${data.name}" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="50">
            <img src="${data.imageUrl}" class="card-img-top object-fit-cover rounded-top-4" alt="${data.name}" height="200">
            <div class="card-body">
                <h5 class="card-title fw-semibold mb-3">${data.name}</h5>
                <p class="card-text fw-normal mb-3">${data.city}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="fw-semibold fs-5">${data.price}</p>
                    <p class="fw-normal">${data.calories}</p>
                </div>
            </div>
        </div>

        <!-- Modal dialog -->
        <div class="modal fade" id="modal${idPrefix}${increment}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content rounded-4">
                    <div class="modal-body position-relative p-0">
                        <button type="button" class="btn btn-danger position-absolute top-0 end-0 z-3 rounded-4 rounded-top-0 rounded-end-0" data-bs-dismiss="modal"><i class="fa-solid fa-x"></i></button>
                        <div class="card border-0 w-100 h-100 shadow-sm rounded-4">
                            <img src="${data.imageUrl}" class="card-img-top object-fit-cover rounded-top-4" alt="${data.name}" height="240">
                            <div class="card-body">
                                <h5 class="card-title fw-semibold mb-3">${data.name}</h5>
                                <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                    <p class="fw-normal">${data.city}</p>
                                    <p class="fw-normal">${data.calories}</p>
                                </div>
                                <div class="border-bottom pb-3 mb-3">
                                    <h6 class="card-subtitle fw-semibold">Description</h6>
                                    <p class="card-text">${data.desc}</p>
                                </div>
                                <div class="mb-1">
                                    <h6 class="card-subtitle fw-semibold">Ingredients</h6>
                                </div>
                                <p class="card-text">${data.ingredients}</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <p class="fw-semibold fs-5">${data.price}</p>
                        <a class="btn btn-primary rounded-pill" href="https://play.google.com">Order in App</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    return cardDiv;
}

function createCarouselAndModal(data, idPrefix, increment) {
    const carouselDiv = document.createElement('div');
    carouselDiv.classList.add('carousel-item', 'active');
    carouselDiv.innerHTML = `
        <div class="d-block p-5 mx-2">
            <div class="card border-0 w-100 h-100 shadow-sm rounded-4 pointer" id="${idPrefix}${increment}" data-bs-toggle="tooltip" data-bs-title="Click to see details of ${data.name}">
                <img src="${data.imageUrl}" class="card-img-top object-fit-cover rounded-top-4" alt="${data.name}" height="150">
                <div class="card-body">
                    <h5 class="card-title fw-semibold mb-3">${data.name}</h5>
                    <p class="card-text fw-normal mb-3">${data.city}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="fw-semibold fs-6">${data.price}</p>
                        <p class="fw-normal">${data.calories}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal dialog -->
        <div class="modal fade" id="modal${idPrefix}${increment}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content rounded-4">
                    <div class="modal-body position-relative p-0">
                        <button type="button" class="btn btn-danger position-absolute top-0 end-0 z-3 rounded-4 rounded-top-0 rounded-end-0" data-bs-dismiss="modal"><i class="fa-solid fa-x"></i></button>
                        <div class="card border-0 w-100 h-100 shadow-sm rounded-4">
                            <img src="${data.imageUrl}" class="card-img-top object-fit-cover rounded-top-4" alt="${data.name}" height="300">
                            <div class="card-body">
                                <h5 class="card-title fw-semibold mb-3">${data.name}</h5>
                                <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
                                    <p class="fw-normal">${data.city}</p>
                                    <p class="fw-normal">${data.calories}</p>
                                </div>
                                <div class="border-bottom pb-3 mb-3">
                                    <h6 class="card-subtitle fw-semibold">Description</h6>
                                    <p class="card-text">${data.desc}</p>
                                </div>
                                <div class="mb-1">
                                    <h6 class="card-subtitle fw-semibold">Ingredients</h6>
                                </div>
                                <p class="card-text">${data.ingredients}</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <p class="fw-semibold fs-5">${data.price}</p>
                        <a class="btn btn-primary rounded-pill" href="https://play.google.com">Order in App</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    return carouselDiv;
}

// Looping data
for (let i = 0; i < foodData.length; i++) {
    const card = document.getElementById(`foodCard${i}`);
    card.addEventListener('click', function () {
        const modal = new bootstrap.Modal(document.getElementById(`modalfoodCard${i}`));
        modal.show();
    });

    const carousel = document.getElementById(`foodCarousel${i}`);
    carousel.addEventListener('click', function () {
        const modal = new bootstrap.Modal(document.getElementById(`modalfoodCarousel${i}`));
        modal.show();
    });
}
for (let i = 0; i < drinkData.length; i++) {
    const card = document.getElementById(`drinkCard${i}`);
    card.addEventListener('click', function () {
        const modal = new bootstrap.Modal(document.getElementById(`modaldrinkCard${i}`));
        modal.show();
    });

    const carousel = document.getElementById(`drinkCarousel${i}`);
    carousel.addEventListener('click', function () {
        const modal = new bootstrap.Modal(document.getElementById(`modaldrinkCarousel${i}`));
        modal.show();
    });
}

// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// AOS
function checkScreenWidth() {
    if (window.innerWidth < 768) {
        AOS.init({
            disable: true
        });
    } else {
        AOS.init();
    }
}

window.addEventListener('load', checkScreenWidth);
window.addEventListener('resize', checkScreenWidth);

// Mendapatkan Tahun
var currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
