document.addEventListener("DOMContentLoaded", function () {
    let image = document.getElementById("image");
    let body = document.getElementById("body");

    image.addEventListener("mouseover", function () {
        body.style.backgroundColor = "lightblue"; // Yeni arka plan rengi
    });

    image.addEventListener("mouseout", function () {
        body.style.backgroundColor = "white"; // Eski haline geri döndür
    });
});
