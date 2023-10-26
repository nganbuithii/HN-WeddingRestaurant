wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animate__animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
  }
)
  wow.init();

  var slideIndex = 0;
  carousel();
  function carousel() {
    var x = document.getElementsByClassName("mySlides");
    for (let i = 0; i < x.length; i++) 
    {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    } 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); 
  }

 $(document).ready(function(){

  /*gototop*/
    $("#gototop").hide();
    $(window).scroll(function(){
        if($(this).scrollTop() >=370 )
        $("#gototop").show("slow");
        else
        $("#gototop").hide("slow");
    })
    $("#gototop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },1000)
    });
  /*load trang*/
    $(window).on('load',function(event){
      $('body').removeClass('preloading');
    $('.load').delay(2000).fadeOut('fast');
    })
    /*button load more*/
        $('.ima').slice(0,3).fadeIn();

        $('.load-more').click(function(){
            $('.sub-library .ima:hidden').slice(0,3).slideDown();
              if ($('.sub-library .ima:hidden ').length == 0)
                  $(this).fadeOut("slow");
     });
   
 });
   

 var video = document.getElementById("myVideo");
 var btn = document.getElementById("myBtn");
 
 function myFunction() {
   if (video.paused) {
     video.play();
     btn.innerHTML = "Pause";
   } else {
     video.pause();
     btn.innerHTML = "Play";
   }
 }

