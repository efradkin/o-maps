// Элементы DOM
const modal = document.getElementById('slideshow-modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;

// Создаем слайды
function createSlides() {
    modalContent.innerHTML = '';
    images.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${img}" alt="Slide ${index + 1}">`;
        modalContent.appendChild(slide);
    });
}

// Показываем слайд
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');

    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

// Следующий слайд
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Предыдущий слайд
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Открытие модального окна
function openModal(slide) {
    createSlides();
    showSlide(slide);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Обработчики событий
closeBtn.addEventListener('click', closeModal);
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Закрытие при клике вне изображения
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

// Навигация с помощью клавиатуры
document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'Escape') {
            closeModal();
        }
    }
});
