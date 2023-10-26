
var index=0;
var imgs=["images/nen.jpg",
          "images/test1.jpg",
          "images/test2.jpg",
          "images/test3.jpg",
          "images/test4.jpg",
          "images/test5.jpg"
         ];
function next (){
  index++;
  if ( index == imgs.length )
    index = 0;
  var img=document.getElementById("img");
  img.src =imgs[index];
 }
 function prev(){
    index--;
    if ( index < 0 )
    index = imgs.length -1;
    var img=document.getElementById("img");
    img.src = imgs[index];
 }
  setInterval("next()",3000);
   /*end */
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
 $(document).ready(function(){
      /*goto*/
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
        $('.load').delay(1000).fadeOut('fast');
      })
      /*cmt*/
      $('#comment').click(function(){
        var input = $('#cmt').val();
        $('.box').append(input +'<br>');
        $('#cmt').val('');
        $('.box-comment').slideDown();
     });
     $('#cancel').click(function(){
      $('#cmt').val('');
     });
     $('#delete').click(function(){
          $('.box').text('');
          $('.box-comment').slideUp();
     })
/*thư viện ảnh*/
     $('ul.menu-sukien li').click(function(event) {
      // var _type = $(this).attr('type');
      var _type = $(this).data('type');
      var _title = $(this).text(); // lấy text từ thẻ
      console.log(_type);
      $('h1.title').text(_title); // thêm text vào thẻ
      $('.content img').each(function() {
        if($(this).hasClass(_type)){
          $(this).removeClass('hidden');
          $(this).addClass('animate__animated animate__bounceInUp');
        }else {
          $(this).addClass('hidden');
          $(this).removeClass('animate__animated animate__bounceInUp');
        }
      });
    });
});
/*feedback*/ 
    var slideIndex = 1;
    showDivs(slideIndex);
    function plusDivs(n) {
      showDivs(slideIndex += n);
    }
    function currentDiv(n) {
      showDivs(slideIndex = n);
    }
  function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      if (n > x.length) 
      {
          slideIndex = 1;
      }
      if (n < 1) 
      {
          slideIndex = x.length;
      }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" red", "");
      }
      x[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].classList.add('red');
    }
    /*menu phone*/
    $(document).ready(function() {
      $('#toggle').click(function() {
          $('ul.menu>li').fadeToggle();
      });
  })
/*đổi ảnh phần trang trí*/
  function init() {
    let m = document.getElementById("ttmain");
    let images = document.querySelectorAll(".trangtri-subimg img");
    for (let i = 0; i < images.length; i++)
        images[i].addEventListener("mouseenter", function() {
            m.src = this.src;
        })
}
/*đọc thêm*/
function read() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btnRead");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
