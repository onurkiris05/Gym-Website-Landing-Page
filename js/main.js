const navBtn = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");
const swiper = document.querySelector(".swiper");
const content = document.querySelector(".content");
const social = document.querySelector(".social-container");
const bgVideo = document.querySelector(".bg-video-container");

const joinUsButton = document.querySelector(".btn-join-us");
const joinUsForm = document.querySelector(".join-us-container");
const smallVideoContainer = document.querySelector(".small-video-container");
const smallVideoButtons = document.querySelectorAll(".media-btn");
const smallCards = document.querySelectorAll(".small-card");
const smallVideo = document.querySelector(".small-video");

navBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navBtn.classList.toggle("active");
  navList.classList.toggle("active");
});

function toggleJoinUs() {
  swiper.classList.toggle("hidden");
  content.classList.toggle("hidden");
  social.classList.toggle("hidden");
  bgVideo.classList.toggle("hidden");

  joinUsForm.classList.toggle("hidden");
  smallVideo.classList.toggle("hidden");
  smallCards.forEach((card) => {
    card.classList.toggle("hidden");
  });
  smallVideoButtons.forEach((btn) => {
    btn.classList.toggle("hidden");
  });

  smallVideoContainer.dataset.box =
    smallVideoContainer.dataset.box === "active" ? "hidden" : "active";
}

joinUsButton.addEventListener("click", toggleJoinUs);
smallVideoButtons.forEach((btn) => {
  btn.addEventListener("click", toggleJoinUs);
});
