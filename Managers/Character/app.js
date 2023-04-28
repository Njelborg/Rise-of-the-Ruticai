document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('#tabs button');
    const content = document.querySelectorAll('.tab-content');

    function switchTab(e) {
        content.forEach((el) => {
            el.classList.remove('active');
        });

        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });

        document.getElementById(e.target.id.replace('-tab', '')).classList.add('active');
        e.target.classList.add('active');
    }

    tabs.forEach((tab) => {
        tab.addEventListener('click', switchTab);
    });

    // Set the first tab as active by default
    document.getElementById('info-tab').click();
});
