
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.effect').css('background-color', '#FFF' );
          $('.effect').css('box-shadow', '0px 0px 10px 1px #eae7e7' );
          $('.effect').css('transition', 'all 0.5s ease' );
       } else {
          $('.effect').css('background-color', 'transparent');
          $('.effect').css('box-shadow', 'none' );
          $('.effect').css('transition', 'all 0.5s ease' );
       }
   });
   // Get the modal
var modal = document.getElementById('myModal');


 
$(function(){
$("#button").click(function(event){
    event.preventDefault();
    $("html, body").animate({"scrollTop": "0px"}, 800);
})

});

$(window).on("load",function() {
          $(window).scroll(function() {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(".fade").each(function() {
              /* Check the location of each desired element */
              var objectBottom = $(this).offset().top + $(this).outerHeight();
              
              /* If the element is completely within bounds of the window, fade it in */
              if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(150,1);}
              } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity")==1) {$(this).fadeTo(100000,0);}
              }
            });
          }).scroll(); //invoke scroll-handler on page-load
        });


});

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}