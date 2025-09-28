document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const value = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');
        
        value.addEventListener('click', function() {
            list.classList.toggle('dropdown__list_active');
        });
        
        const items = dropdown.querySelectorAll('.dropdown__item');
        
        items.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                value.textContent = item.querySelector('.dropdown__link').textContent;
                list.classList.remove('dropdown__list_active');
            });
        });
    });
});