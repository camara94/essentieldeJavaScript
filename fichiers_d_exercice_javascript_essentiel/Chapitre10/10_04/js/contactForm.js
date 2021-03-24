let contactForm = document.getElementById('frmContact');


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let fields = document.querySelectorAll('input[required], textarea[required]');
    
    console.log(fields);
}, false);
