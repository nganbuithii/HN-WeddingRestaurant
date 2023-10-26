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
});

    const seeMore = document.querySelector(".js-itembox");
    const modalNews = document.querySelector(".modal-news");
    var modalClose = document.querySelector(".modal-close");

        seeMore.addEventListener('click', function(){
            modalNews.classList.add('open');
        })
        modalClose.addEventListener('click', function(){
            modalNews.classList.remove('open');
        })
        const modalContainer = document.querySelector(".modal-container")
        // khi click vào modal cũng bị ẩn container, nhưng khi dừng nổi bọt lên rồi thì khi click vô container k bị đóng
        modalNews.addEventListener('click', function(){
            modalNews.classList.remove('open');
        })
        modalContainer.addEventListener('click',function(event){
            event.stopPropagation()
        });
    
    const seeEnter = document.querySelector(".js-entertaiment");
    const modalEnter = document.querySelector(".modal-entertaiment");
    const modalClose2 = document.querySelector(".modal-close2");

        seeEnter.addEventListener('click', function(){
            modalEnter.classList.add('open');
        })
        modalClose2.addEventListener('click', function(){
            modalEnter.classList.remove('open');
        })
        const modalEnterContainer = document.querySelector(".modal-enter-container")
        modalEnter.addEventListener('click', function(){
            modalEnter.classList.remove('open');
        })
        modalEnterContainer.addEventListener('click',function(event){
            event.stopPropagation()
        });

    const seeFilm = document.querySelector(".js-film");
    const modalFilm = document.querySelector(".modal-film");
    const modalCloseFilm = document.querySelector(".close-film");

    seeFilm.addEventListener('click', function(){
        modalFilm.classList.add('open');
    })
    modalCloseFilm.addEventListener('click', function(){
        modalFilm.classList.remove('open');
    })
    const modalFilmContainer = document.querySelector(".modal-film-container")
    modalFilm.addEventListener('click', function(){
        modalFilm.classList.remove('open');
    })
    modalFilmContainer.addEventListener('click',function(event){
        event.stopPropagation()
    });

    const elementBoxs = document.querySelectorAll(".item-box"); 
    const searchItem = document.getElementById("search-item");
    const btnSearch = document.querySelector('.btn-search');
    btnSearch.addEventListener("click",function(){
        let valueItem = searchItem.value.toLowerCase();
        Array.from(elementBoxs).forEach(function(ele){
            let nameItem =  ele.querySelector(".infor").firstElementChild.textContent;
            ele.classList.remove("doimau")
            if(nameItem.toLowerCase().indexOf(valueItem) !== -1){
                ele.classList.add("doimau")   
            }
        })
    })

    const sliderItemsCalen = document.querySelectorAll(".month");
    const sliderItemWidth = sliderItemsCalen[0].offsetWidth;
    const sliderMainCalen = document.querySelector(".slider-calender-main");
    var d = new Date();
    var monthPresent = d.getMonth();
    console.log(monthPresent);
    var Max = sliderItemWidth * sliderItemsCalen.length;
    Max -= sliderItemWidth;//do bđ từ 0 đến cái 11
    var positionX = (monthPresent)*sliderItemWidth;

    sliderMainCalen.style = `margin-left: -${positionX}px `;
    function next(){
        if(positionX < Max){
            positionX += sliderItemWidth;
        }else positionX = 0;
        sliderMainCalen.style.marginLeft = '-' + positionX + 'px'; 
    }
    function prev(){
        if(positionX == 0) positionX = Max;
        else positionX -= sliderItemWidth;
        sliderMainCalen.style.marginLeft = '-' + positionX + 'px'; 
    }

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