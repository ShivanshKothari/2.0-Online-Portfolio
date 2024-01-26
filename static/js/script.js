const scrollButton = document.querySelector('.scrollLink');
const scrollButtonHeight = scrollButton.offsetHeight;
document.documentElement.style.setProperty(
    "--scroll-padding", scrollButtonHeight + "px");