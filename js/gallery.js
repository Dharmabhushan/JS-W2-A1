// Update the large image when mouse is over or focus is on an image
function upDate(previewPic) {
    console.log("Mouse over or focus triggered!");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // Change the background image for the div with id="image"
    document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
    // Change the text of the div with id="image" to the alt text of the preview image
    document.getElementById('image').innerHTML = previewPic.alt; 

    // Update the background image properties
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundSize = 'contain';
    imageDiv.style.backgroundPosition = 'center';
    imageDiv.style.backgroundRepeat = 'no-repeat';
}

// Reset the image and text when mouse is out or focus is removed
function unDo() {
    console.log("Mouse out or blur triggered!");

    // Reset the background image
    document.getElementById('image').style.backgroundImage = 'url("images/bgcolor.png")'; // Original image
    // Reset the text to the original text
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.'; 

    // Reset background image when mouse leaves or focus is lost
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = 'url("images/bgcolor.png")';
}



function addTabFocus() {
    let images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        images[i].addEventListener('focus', function () {
            upDate(images[i]);
            images[i].style.opacity = 1;  // Fully visible when in focus
        });
        images[i].addEventListener('blur', function () {
            unDo();
            images[i].style.opacity = 0.6;  // Reduced opacity when blurred
        });
    }
}
 


window.onload = function() {
    addTabFocus();
};