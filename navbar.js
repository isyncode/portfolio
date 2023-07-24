let button = document.querySelector('.nav-button');
button.addEventListener('click', toggle_device_nav);

function toggle_device_nav() {
    // check if toggle
    let nav_device_items = document.querySelector('.nav-device-items');
    let navbar_container = document.querySelector('.navbar-container');

    if (nav_device_items.style.display == "none" || !nav_device_items.style.display) {
        navbar_container.style.boxShadow = 'none';
        navbar_container.style.borderBottomRightRadius = '0';
        nav_device_items.style.display = "flex";
    } else {
        navbar_container.style.boxShadow = '0 4px 5px rgba(0, 0, 0, 0.3)';
        navbar_container.style.borderBottomRightRadius = '20px';
        nav_device_items.style.display = 'none';
    }
}