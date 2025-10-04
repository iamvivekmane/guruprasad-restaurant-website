 const hamburgerButton = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    hamburgerButton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
    document.addEventListener('click', (event) => {
        const isMenuVisible = !menu.classList.contains('hidden');

        const isClickOnButton = hamburgerButton.contains(event.target);

        const isClickInMenu = menu.contains(event.target);

        if (isMenuVisible && !isClickOnButton && !isClickInMenu) {
            menu.classList.add('hidden');
        }
    });