const navBtn = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");

navBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navBtn.classList.toggle("active");
  navList.classList.toggle("active");
});
