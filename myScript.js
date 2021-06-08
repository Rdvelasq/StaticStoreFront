var slideIndex = 0;
carousel();
function carousel(){
    var i;
    var donutSlides = document.getElementsByClassName("slideShow"); //gets a donut picture in the html using the class name and putting it into donutSlides
    
    //iterates through each donut picture using their index
    for (i = 0; i < donutSlides.length; i++){
        donutSlides[i].style.display="none"; //make sure the previous picture disappear before displaying the new one 
    }
    slideIndex++;
    if (slideIndex > donutSlides.length){slideIndex = 1} //Once the Slide reaches the end of the images go back to the first image 
    donutSlides[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000);
}