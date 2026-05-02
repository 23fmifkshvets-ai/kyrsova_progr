function toggleMenu(menuId) {
    const menus = document.querySelectorAll(".submenu");

    menus.forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove("open");
        }
    });

    const current = document.getElementById(menuId);
    current.classList.toggle("open");
}