document.addEventListener("DOMContentLoaded", function () {
  // Hämtar alla miniatyrbilder och huvudbilden.
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.querySelector(".mainImage");

  // Lägger till eventlyssnare för att byta huvudbild när en miniatyrbild klickas.
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      mainImage.src = thumbnail.src;
      mainImage.alt = thumbnail.alt;
    });
  });

  // Anropar och sätter upp en lyssnare för storleksändringar av fönstret.
  window.addEventListener("resize", checkWindowSize);
  checkWindowSize();
});

function checkWindowSize() {
  const mainImage = document.querySelector(".mainImage");
  const thumbnails = document.querySelectorAll(".thumbnail");

  if (window.innerWidth < 768) {
    mainImage.style.width = "100%";
    thumbnails.forEach((thumbnail) => {
      thumbnail.style.width = "100px";
      thumbnail.style.height = "75px";
    });
  } else {
    mainImage.style.width = "90%";
    thumbnails.forEach((thumbnail) => {
      thumbnail.style.width = "150px";
      thumbnail.style.height = "100px";
    });
  }
}
