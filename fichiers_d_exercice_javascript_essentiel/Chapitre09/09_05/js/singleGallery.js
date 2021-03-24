let galImages = document.querySelectorAll('#singleGallery img');

for(let i = 0; i < galImages.length; i++){
    let image = galImages[i];
    image.addEventListener('click', showSinglePict, false);
}

function showSinglePict(e){
    let image = e.target;
}
