// let allSections = [
//   document.querySelector("header"),
//   ...document.querySelectorAll("section"),
// ];
// console.log(allSections);
let sidebarItems = document.querySelectorAll(".sidebar-menu li");
function changeActiveMenu() {
  let fromTop = window.scrollY;

  sidebarItems.forEach((item) => {
    let link = item.querySelector("a");

    let dot = item.querySelector(".dot");
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight >= fromTop
    ) {
      item.classList.add("active");
      // dot.classList.add("active");
    } else {
      item.classList.remove("active");
      // dot.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", setInterval(changeActiveMenu, 1000));
