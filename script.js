// Fotoğrafı büyüt ve göster
function openModal(imageSrc) {
    var modal = document.getElementById("photoModal");
    var modalImg = document.getElementById("modalImage");
    
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Fotoğrafı kapat
function closeModal() {
    var modal = document.getElementById("photoModal");
    modal.style.display = "none";
}

// Dışarıya tıklanınca kapat
window.onclick = function(event) {
    var modal = document.getElementById("photoModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}