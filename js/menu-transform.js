function menuShow() {
    const menuMobile = document.querySelector('.mobile-menu');
    menuMobile.classList.toggle('open');
}

function sidebarToggle() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.getElementById('main-content');
    const hiperlinks = document.querySelector('.hiperlinks');

    sidebar.classList.toggle('collapsed');

    if (sidebar.classList.contains('collapsed')) {
        mainContent.style.marginLeft = '70px';
        hiperlinks.style.paddingLeft = '70px';
    } else {
        mainContent.style.marginLeft = '250px';
        hiperlinks.style.paddingLeft = '250px';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const hiperlinks = document.querySelector('.hiperlinks');
    if (mainContent && hiperlinks) {
        mainContent.style.marginLeft = '250px';
        hiperlinks.style.paddingLeft = '250px';
    }
});

function toggleSubmenu(event) {
    event.preventDefault();
    const navItem = event.target.closest('.nav-item');
    const submenu = navItem.querySelector('.submenu');
    const icon = navItem.querySelector('.dropdown-icon');

    submenu.classList.toggle('open');
    icon.classList.toggle('rotate');

    document.querySelectorAll('.nav-item').forEach(item => {
        if (item !== navItem) {
            item.querySelector('.submenu')?.classList.remove('open');
            item.querySelector('.dropdown-icon')?.classList.remove('rotate');
        }
    });
}