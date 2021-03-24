let galImages = document.querySelectorAll('#singleGallery img');

for(let i = 0; i < galImages.length; i++){
    let image = galImages[i];
    image.addEventListener('click', () => {alert('Bonjour !')}, false);
    image.addEventListener('click', () => {alert('Au Revoir !')}, false);
}

console.log(galImages);