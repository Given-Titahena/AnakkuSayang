let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Sembunyikan semua slide
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Kembali ke slide pertama
    slides[slideIndex - 1].style.display = "block"; // Tampilkan slide saat ini
}

function plusSlides(n) {
    slideIndex += n; // Tambah atau kurangi slide index
    if (slideIndex > document.getElementsByClassName("slide").length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = document.getElementsByClassName("slide").length }
    showSlidesManually(slideIndex);
}

function showSlidesManually(index) {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Sembunyikan semua slide
    }
    slides[index - 1].style.display = "block"; // Tampilkan slide yang dipilih
}