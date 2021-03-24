let contactForm = document.getElementById('frmContact');


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let fields = document.querySelectorAll('input[required], textarea[required]');
    let valid = true;

    fields.forEach((field) => {
        if(! validateField(field)){
            valid = false;
        }
    });
    if(valid){
        e.target.submit();
    }
    
   
}, false);


function validateField(field){
    if(field.checkValidity()){
        return true;
    } else {
        return false;
    }
}