
const menuToggle = document.querySelector('.menu-toggle input'); 
const navLinks = document.querySelector('.navbar ul');  
menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('slide');  
});
