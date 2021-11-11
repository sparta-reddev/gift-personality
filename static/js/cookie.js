$(document).ready(function ($) {
    $("#cookie-btn").on("click", function (event) {  //버튼 누르면
        $("#popup-cookie").show();   //팝업 오픈
        $("body").append('<div class="backon"></div>'); //뒷배경
    });

    $("#get-cookie").on("click", function (event) {  //버튼 누르면
        $("#popup-cookie").hide(); // 이전 팝업 숨김
        $("#result-cookie").show();   //결과 팝업 오픈
    });

    $("body").on("click", function (event) {
        if (event.target.className == 'close' || event.target.className == 'backon') {
            console.log("close");
            $("#popup-cookie").hide(); //close버튼이나 뒷배경 클릭시 닫힘
            $("#result-cookie").hide();
            $(".backon").remove();
        }
    });

});