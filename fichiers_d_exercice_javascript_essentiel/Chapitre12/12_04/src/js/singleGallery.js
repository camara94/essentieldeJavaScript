let galleriesRaw = '{"gal1": {"title": "Bretagne 2019", "images": ["image-1.jpg","image-2.jpg","image-3.jpg","image-4.jpg","image-5.jpg","image-6.jpg"]},"gal2":{ "title": "Sacramento 2017", "images": ["image-7.jpg","image-8.jpg","image-9.jpg","image-10.jpg","image-11.jpg","image-12.jpg","image-13.jpg","image-14.jpg"]}}'
let galleries = JSON.parse(galleriesRaw)
window.addEventListener('load', (e) => {
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('id')){
        let galId = searchParams.get('id');
        let galleryToDisplay = galleries[galId];
        let rootUl = document.querySelector('#singleGallery ul');
        let galTitle = document.querySelector('#singleGallery h1');
        galTitle.innerHTML = galleryToDisplay.title
        for (let i = 0; i < galleryToDisplay.images.length; i++){
            let theLi = document.createElement('li');
            let theImg = document.createElement('img');
            theImg.src = `images/${galleryToDisplay.images[i]}`;
            theImg.addEventListener("click", showSinglePict, false);
            theImg.style.cursor = 'pointer';
            theLi.appendChild(theImg);
            rootUl.appendChild(theLi);
        }
    } else {
        window.location.pathname = "galleries.html"
    }
}, false)



/*let galleryImages = document.querySelectorAll('#singleGallery ul img');

galleryImages.forEach(image => {
    image.addEventListener("click", showSinglePict, false);
    image.style.cursor = 'pointer';
});
*/

function showSinglePict(e){
    let imageNode = e.target;
    let imageContainer = document.getElementById('galleryContainer');
    let image = imageContainer.querySelector('img');
    image.src = imageNode.src;
    imageContainer.classList.toggle('visible');
    imageContainer.addEventListener('click', closeSinglePict, false);
}

function closeSinglePict(e){
    let imageContainer = document.getElementById('galleryContainer');
    imageContainer.classList.toggle('visible');
}

