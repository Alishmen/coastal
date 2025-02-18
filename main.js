const menu = document.querySelector('.menu__body'),
        menuBtn = document.querySelector('.menu__icon'),
        header = document.querySelector(".header"),
        body = document.body;

if (menu && menuBtn) {
    menuBtn.addEventListener('click',() => {
        menu.classList.toggle('active')
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })
}

window.addEventListener("scroll", () => {
    header.classList.toggle("header-color", window.scrollY > 40);
});


let isScrolling;
window.addEventListener("scroll", () => {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        header.classList.toggle("header-color", window.scrollY > 40);
    }, 100);
});


document.querySelector('#E-mail').addEventListener('blur', function() {
    const email = this.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessage = this.nextElementSibling;


    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
        const errorElement = document.createElement('span');
        errorElement.classList.add('error-message');
        this.insertAdjacentElement('afterend', errorElement);
    }

    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter the correct email address.';
        errorMessage.style.display = 'block'; 
        this.classList.add('input-error'); 
    } else {
        errorMessage.textContent = ''; 
        errorMessage.style.display = 'none'; 
        this.classList.remove('input-error'); 
    }
});