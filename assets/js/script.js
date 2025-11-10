const burger = document.getElementById("burger");
const megaMenu = document.getElementById("megaMenu");

burger.addEventListener("click", () => {
    megaMenu.classList.toggle("open");
    burger.classList.toggle("active");
});

// Saat halaman load, tampilkan teks hero dengan animasi
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.fade-slide');
    elements.forEach(el => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 100); // trigger animasi setelah load
    });
});
