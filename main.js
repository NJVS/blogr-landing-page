document.addEventListener('DOMContentLoaded', () => {

    // NAVBAR TOGGLER HAMBURGER CLICK EVENT
    document.querySelector('#navToggler').addEventListener('click', event => {
        // toggle active class on hamburger
        event.currentTarget.classList.toggle('active');
        // toggle active class on .nav-list
        document.querySelector('#navList').classList.toggle('active');
        
        // remove all active dropdown if hamburger is closed
        if (!event.currentTarget.classList.contains('active')) {
            document.querySelectorAll('.nav_item.dropdown').forEach(elem => elem.classList.remove('active'));
        }
    });

    // DROPDOWN TOGGLER EVENTS
    document.querySelectorAll('.dropdown_toggler').forEach(toggler => {
        // click event (open or close dropdown menu)
        toggler.addEventListener('click', event => {
            event.preventDefault();
            const container = event.currentTarget.closest('.dropdown');
            const menu = container.querySelector('ul.dropdown_menu');

            container.classList.toggle('active');

            // max-height css property must be set on exact value, else the animation has deley when opening another dropdow
            // the 3.25rem comes from the padding for top and bottom of the menu when its active
            menu.style.maxHeight = (container.classList.contains('active')) ? `calc(${menu.scrollHeight}px + 3.25rem)` : 0;
        });
        // blur event (only one dropdown can be active at a time)
        toggler.addEventListener('blur', event => {
            const container = event.currentTarget.closest('.dropdown');
            container.classList.remove('active');
            container.querySelector('ul.dropdown_menu').removeAttribute('style');
        })
    });

    // remove active class on hamburger and nav-list on media query change
    window.matchMedia('(max-width: 768px').addEventListener('change', event => {
        document.querySelector('#navToggler').classList.remove('active');
        document.querySelector('#navList').classList.remove('active');
    });
});


