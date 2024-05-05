const header = document.querySelector(".header");
const sticky = header.offsetTop;
function onScroll() {
  if (window.scrollY >= sticky) {
    header.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.onscroll = onScroll;

console.log("hello");
