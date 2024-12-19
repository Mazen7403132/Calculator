const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('mySidebar');

menuButton.addEventListener('click', () => {
    sidebar.style.left = '0';
});

function closeNav() {
    sidebar.style.left = '-250px';
}