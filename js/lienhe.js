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
    
        $(window).on('load',function(event){
        $('body').removeClass('preloading');
        $('.load').delay(2000).fadeOut('fast');
    })
  
});



        const usernameEle = document.getElementById('username');
        const emailEle = document.getElementById('email');
        const phoneEle = document.getElementById('phone');
        const slE = document.getElementById('sl');
        const btnRegister = document.getElementById('btn-register');
        const inputEles = document.querySelectorAll('.input-row');

        btnRegister.addEventListener('click', function () {
        Array.from(inputEles).map((ele) =>
            ele.classList.remove('success', 'error')
        );
        let isValid = checkValidate();

        if (isValid) {
            alert('Xác Nhận Thông Tin Thành Công, Chúng Tôi Sẽ Liên Hệ Bạn Sớm');
        }
        });

function checkValidate() {
        let usernameValue = usernameEle.value;
        let emailValue = emailEle.value;
        let phoneValue = phoneEle.value;
        let slValue = slE.value;
        let isCheck = true;

        if (usernameValue == '') {
            setError(usernameEle, 'Tên không được để trống');
            isCheck = false;
        } else {
            setSuccess(usernameEle);
        }

        if (emailValue == '') {
            setError(emailEle, 'Email không được để trống');
            isCheck = false;
        } else if (!isEmail(emailValue)) {
            setError(emailEle, 'Email không đúng định dạng');
            isCheck = false;
        } else {
            setSuccess(emailEle);
        }

        if (phoneValue == '') {
            setError(phoneEle, 'Số điện thoại không được để trống');
            isCheck = false;
        } else if (!isPhone(phoneValue)) {
            setError(phoneEle, 'Số điện thoại không đúng định dạng');
            isCheck = false;
        } else {
            setSuccess(phoneEle);
        }
        
        if ( slValue =='')
        {
            setError(slE,'Số lượng khách không được để trống');
            isCheck = false;
        }
        else if(slValue < 300)
        {
                setError(slE,'Số lượng khách phải lớn hơn 300');
                isCheck = false;
        }
        else {
            setSuccess(slE);
        }
                
    return isCheck;
}
function setSuccess(ele) {
 ele.parentNode.classList.add('success');
}
function setError(ele, message) {
 let parentEle = ele.parentNode;
 parentEle.classList.add('error');
 parentEle.querySelector('small').innerText = message;
}
function isEmail(email) {
 return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
     email
 );
}
function isPhone(number) {
 return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}

$(document).ready(function() {
    $('#toggle').click(function() {
        $('ul.menu>li').fadeToggle();
    });
})