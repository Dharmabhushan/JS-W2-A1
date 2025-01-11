
function upDate(previewPic) {

    // Debugging to check if the event is triggered and print out the alt and source
    console.log("Mouse over triggered!");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);


    // 1. Change the URL for the background image of the div with id="image"
    document.getElementById('image').style.backgroundImage = 'url(' + previewPic.src + ')';
    
    // 2. Change the text of the div with the id="image" to the alt text of the preview image
    document.getElementById('image').innerHTML = previewPic.alt; 

}

// Function to reset the image and text in the div with id="image"
function unDo() {

     // Debugging to check if the event is triggered
     console.log("Mouse out triggered!");


    // 1. Reset the URL for the background image of the div with id="image" to the original image
    //document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').style.backgroundImage = 'url(" ")'; // Original image
    
    // 2. Reset the text of the div with the id="image" back to the original text 
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.'; // Original text


} 