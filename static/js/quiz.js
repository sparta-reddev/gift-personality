function scrollUp() {
    const vheight = $('.test').height();
    //윈도우 높이만큼 스크롤업, -1의 값을 준 이유 : 아래에서 위로 이동하기 때문
    $('html, body').animate({
      scrollTop: ((Math.ceil($(window).scrollTop() / vheight)-1) * vheight)
    }, 500);
};

function scrollDown() {
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / vheight)+1) * vheight)
    }, 500);
}

$(function(){
    // //선택지를 눌렀을때, 스크롤 다운
    // $('.option').click(function(e){
    //     scrollDown();
    // });

    //next_btn을 눌렀을때, 스크롤 다운
    $('.next_btn').click(function(e){
        //문항이 선택되어야 다음으로 넘어갈 수 있게 하는 스크립트
        let divs = $(this).parent().prev().children();
        let inputs = divs.find('input:checked');
        if(inputs.length < 1) {
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        e.preventDefault();
        scrollDown();
    });
    //prev_btn을 눌렀을때, 스크롤 업
    $('.prev_btn').click(function(e){
        e.preventDefault();
        scrollUp();
    });

    $("#form").submit(function() {
        let radios = $('input[type=radio]:checked');
        if(radios.length < 10) {
            alert("문항이 선택되지 않았습니다.");
            return false;
        }
        return true;
    });
    //속도 조절 원하면 500 숫자 변경
    $("html, body").animate({
        scrollTop: 0
    }, 500);
});