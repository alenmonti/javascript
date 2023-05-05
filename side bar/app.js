const sidebar_toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const sidebar_close = document.querySelector(".close-btn")

sidebar_toggle.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
});

sidebar_close.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});

