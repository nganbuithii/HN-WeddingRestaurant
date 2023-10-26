    const sliderItemsHeader = document.querySelectorAll(".slider-item");
    const sliderItemHeaderWidth = sliderItemsHeader[0].offsetWidth;
    const sliderMainHeader = document.querySelector(".slider-header-main");
    var Max2 = sliderItemHeaderWidth * sliderItemsHeader.length;
    Max2 -= sliderItemHeaderWidth;
    var positionX2 = 0;
    function nextHeader(){
        if(positionX2 < Max2){
            positionX2 += sliderItemHeaderWidth;
        }else positionX2 = 0;
        sliderMainHeader.style.marginLeft = '-' + positionX2 + 'px'; 
    }
    function prevHeader(){
        if(positionX2 == 0) positionX2 = Max2;
        else positionX2 -= sliderItemHeaderWidth;
        sliderMainHeader.style.marginLeft = '-' + positionX2 + 'px'; 
    }
    setInterval(function(){
    nextHeader();
    },7000);

    const sliderItemsPackage = document.querySelectorAll(".page");
    const sliderPageWidth = sliderItemsPackage[0].offsetWidth;
    const sliderMainPackage= document.querySelector(".slider-package-main");
    var Max3 = sliderPageWidth * sliderItemsPackage.length;
    Max3 -= sliderPageWidth;
    var positionX3 = 0;
    function nextPackage(){
        if(positionX3 < Max3){
            positionX3 += sliderPageWidth;
        }else positionX3 = 0;
        sliderMainPackage.style.marginLeft = '-' + positionX3 + 'px'; 
    }
    function prevPackage(){
        if(positionX3 == 0) positionX3 = Max3;
        else positionX3 -= sliderPageWidth;
        sliderMainPackage.style.marginLeft = '-' + positionX3 + 'px'; 
    }
    setInterval(function(){
    nextPackage();
    },7000);

    $(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('#backtop').fadeIn();
        }else{
            $('#backtop').fadeOut();
        }
    });
    $('#backtop').click(function(){
        $('html,body').animate({
            scrollTop:0
        },2000)
    });
    wow = new WOW(
        {
           boxClass:     'wow',     
          animateClass: 'animate__animated', 
          offset:       0,          
          mobile:       true,       
          live:         true,      
        }
      )
      wow.init();
});