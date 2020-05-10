// have a play around with this, it's definitely linked to the collection.html properly (if you uncomment line two an alert will appear on the page)
// alert("JavaScript is working!")

var slideIndex = 1;
    showDivs(slideIndex);
    
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
    
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides1");
      if (n > x.length) {slideIndex = 1} 
      if (n < 1) {slideIndex = x.length} ;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
      }
      x[slideIndex-1].style.display = "block"; 
    }