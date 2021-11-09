$(document).ready(function ($) {
    var currentPosition = parseInt($("#cookie-btn").css("top"));
    $(window).scroll(function () {
        var position = $(window).scrollTop(); // 현재 스크롤바의 위치값을 반환합니다.
        $("#cookie-btn").stop().animate({"top": position + currentPosition + "px"}, 700);
    });

    $("#cookie-btn").on("click", function (event) {  //버튼 누르면
        $("#popup-cookie").show();   //팝업 오픈
        $("body").append('<div class="backon"></div>'); //뒷배경
    });

    $("body").on("click", function (event) {
        if (event.target.className == 'close' || event.target.className == 'backon') {
            console.log("close");
            $("#popup-cookie").hide(); //close버튼이나 뒷배경 클릭시 닫힘
            $(".backon").hide();
        }
    });
});