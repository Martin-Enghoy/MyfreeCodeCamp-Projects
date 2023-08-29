// const quickSearch = [
//     ...document.querySelectorAll('h2')
// ]

// quickSearch.forEach(h =>
//     h.setAttribute('tabindex', '-1'));

const navToggle = document.querySelector("#nav-menu-button");

navToggle.addEventListener("click", () => {
  //   console.log("test");
  document.body.classList.toggle("nav-open");
});
