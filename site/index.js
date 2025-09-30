document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    let index = 0;

    function updateCarousel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    document.querySelector('.carousel__button--next').addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    document.querySelector('.carousel__button--prev').addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    const botao = document.getElementById('ver-programacao');
    const bloco = document.getElementById('programacao-detalhada');
    botao.addEventListener('click', () => {
    const visivel = bloco.style.display === 'block';

    if (visivel == true) {
        bloco.style.display = 'none';
        botao.textContent = 'Ver programação completa';
    }
    else {
        bloco.style.display = 'block';
        botao.textContent = 'Ocultar programação';
        }
    })
});

