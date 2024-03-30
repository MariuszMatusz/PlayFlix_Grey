document.addEventListener("DOMContentLoaded", function() {
    let toggler = document.getElementById('toggler');
    let hiddenNavPanel = document.querySelector('.hidden_nav_panel_list');
    hiddenNavPanel.style.display = 'none';
    toggler.addEventListener('change', function() {
        if (this.checked) {
            hiddenNavPanel.style.display = 'block';
        } else {
            hiddenNavPanel.style.display = 'none';
        }
    });
});