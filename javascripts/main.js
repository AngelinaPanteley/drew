// Can also be used with $(document).ready()
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > window.innerHeight) {
        document.getElementById("header").className = "header-white";
        document.getElementById("logo-link").className = "logo-black";
        document.getElementById("logo").src="images/logo-black.png";
    }
    if (document.body.scrollTop < window.innerHeight) {
       document.getElementById("header").className = "header";
       document.getElementById("logo-link").className = "logo-link";
       document.getElementById("logo").src="images/logo-white.png";
    }
}
$(window).load(function() {
  $('.flexslider').flexslider({
  	controlNav: false,               //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
    directionNav: false,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "",           //String: Set the text for the "previous" directionNav item
    nextText: "",
    animation: "slide"
  });
});
