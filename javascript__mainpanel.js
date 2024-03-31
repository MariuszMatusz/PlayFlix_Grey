document.addEventListener("DOMContentLoaded", function() {
    let toggler = document.getElementById('toggler');
    let hiddenNavPanel = document.querySelector('.hidden_nav_panel_list');
    let menuIcon = document.querySelector('.menu-icon img');

    hiddenNavPanel.style.display = 'none';
    toggler.addEventListener('change', function() {
        if (this.checked) {
            hiddenNavPanel.style.display = 'block';
            // Zmień ikonę na zamkniętą
            menuIcon.src = 'images/open_sidebar_menu_icon';
        } else {
            hiddenNavPanel.style.display = 'none';
            // Zmień ikonę na otwartą
            menuIcon.src = 'images/icons-menu.png';
        }
    });
});