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

// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Dataset
const foodData = [
    {
        name: 'Iga Bakar',
        city: 'Surabaya',
        price: 'Rp 35,000',
        calories: '450 kkal',
        imageUrl: 'assets/img/food/iga-bakar.jpg',
        desc: 'Iga bakar adalah hidangan khas Jawa Timur yang lezat dan gurih. Dibakar dengan bumbu rempah pilihan, iga ini pasti memanjakan lidah Anda.',
        ingredients: 'Iga sapi, bumbu rempah, kecap, bawang merah, bawang putih, garam'
    },
    {
        name: 'Sate Kambing',
        city: 'Malang',
        price: 'Rp 25,000',
        calories: '380 kkal',
        imageUrl: 'assets/img/food/sate-kambing.jpg',
        desc: 'Sate kambing adalah hidangan yang populer di Jawa Timur. Daging kambing yang empuk dipanggang dengan bumbu kacang yang lezat.',
        ingredients: 'Daging kambing, bumbu kacang, bawang merah, bawang putih, kecap manis'
    },
    {
        name: 'Sate Maranggi',
        city: 'Cirebon',
        price: 'Rp 40,000',
        calories: '500 kkal',
        imageUrl: 'assets/img/food/sate-maranggi.jpg',
        desc: 'Sate Maranggi adalah hidangan khas Cirebon yang terkenal karena bumbu pedas dan cita rasanya yang unik.',
        ingredients: 'Daging sapi, bumbu maranggi, cabai merah, cabai hijau, bawang putih'
    },
    {
        name: 'Empal Gentong',
        city: 'Cirebon',
        price: 'Rp 28,000',
        calories: '360 kkal',
        imageUrl: 'assets/img/food/empal-gentong.jpg',
        desc: 'Empal Gentong adalah sup daging sapi yang kaya rempah dan bumbu tradisional dari Cirebon.',
        ingredients: 'Daging sapi, santan, serai, daun salam, bumbu rempah'
    },
];

const drinkData = [
    {
        name: 'Wedang Jahe Merah',
        city: 'Yogyakarta',
        price: 'Rp 15,000',
        calories: '90 kkal',
        imageUrl: 'assets/img/drink/wedang-jahe-merah.jpg',
        desc: 'Wedang Jahe Merah adalah minuman tradisional Indonesia yang hangat dan menyegarkan, terbuat dari jahe merah, gula merah, dan rempah-rempah pilihan.',
        ingredients: 'Jahe merah, gula merah, daun pandan, cengkeh'
    },
    {
        name: 'Es Lemon Tea',
        city: 'Jakarta',
        price: 'Rp 20,000',
        calories: '120 kkal',
        imageUrl: 'assets/img/drink/es-lemon-tea.jpg',
        desc: 'Es Lemon Tea adalah minuman segar yang terbuat dari teh hitam dengan tambahan perasan lemon dan es batu. Sangat cocok untuk cuaca panas.',
        ingredients: 'Teh hitam, lemon, gula, es batu'
    },
    {
        name: 'Es Cincau',
        city: 'Bandung',
        price: 'Rp 10,000',
        calories: '70 kkal',
        imageUrl: 'assets/img/drink/es-cincau.jpg',
        desc: 'Es Cincau adalah minuman manis yang terbuat dari agar-agar cincau yang kenyal, disajikan dengan santan dan gula merah cair.',
        ingredients: 'Agar-agar cincau, santan, gula merah cair'
    },
    {
        name: 'Jus Mangga',
        city: 'Surabaya',
        price: 'Rp 18,000',
        calories: '150 kkal',
        imageUrl: 'assets/img/drink/jus-mangga.jpg',
        desc: 'Jus Mangga adalah minuman segar yang terbuat dari buah mangga segar yang di-blend hingga halus. Nikmati rasa manis mangga dalam setiap tegukan.',
        ingredients: 'Buah mangga, air, gula'
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
        <div class="card border-0 w-100 h-100 shadow-sm rounded-4 pointer" id="${idPrefix}${increment}" data-bs-toggle="tooltip" data-bs-title="Click to see details of ${data.name}">
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
                            <img src="${data.imageUrl}" class="card-img-top object-fit-cover rounded-top-4" alt="${data.name}" height="200">
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
                        <a class="btn btn-primary rounded-pill" href="#">Order in App</a>
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
                <img src="${data.imageUrl}" class="card-img-top object-fit-cover rounded-top-4" alt="${data.name}" height="100">
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
                            <img src="${data.imageUrl}" class="card-img-top object-fit-cover rounded-top-4" alt="${data.name}" height="200">
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
                        <a class="btn btn-primary rounded-pill" href="#">Order in App</a>
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

// Mendapatkan Tahun
var currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;
