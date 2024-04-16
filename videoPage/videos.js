document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainVideo = document.querySelector(".mainVideo");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      mainVideo.src = thumbnail.src;
      mainVideo.play(); // Starta videospelning när en thumbnail klickas
    });
  });

  window.addEventListener("resize", checkWindowSize);
  checkWindowSize();
});

function checkWindowSize() {
  const mainVideo = document.querySelector(".mainVideo");
  const thumbnails = document.querySelectorAll(".thumbnail");

  if (window.innerWidth < 768) {
    mainVideo.style.width = "100%";
    thumbnails.forEach((thumbnail) => {
      thumbnail.style.width = "100px";
      thumbnail.style.height = "75px";
    });
  } else {
    mainVideo.style.width = "90%";
    thumbnails.forEach((thumbnail) => {
      thumbnail.style.width = "150px";
      thumbnail.style.height = "100px";
    });
  }
}
