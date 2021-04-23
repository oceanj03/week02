const website_menu = document.querySelector(".website-menu");
const container = document. querySelector(".container");

website_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})

