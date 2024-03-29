document.addEventListener("DOMContentLoaded", function() {
    var toggler = document.getElementById('toggler');
    var hiddenNavPanel = document.querySelector('.hidden_nav_panel_list');

    toggler.addEventListener('change', function() {
        if (this.checked) {
            hiddenNavPanel.style.display = 'block';
        } else {
            hiddenNavPanel.style.display = 'none';
        }
    });
});