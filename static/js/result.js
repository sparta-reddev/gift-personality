$(document).ready(function ($) {
    $("#popup-btn").on("click", function (event) {  //버튼 누르면
        $("#popup01").show();   //팝업 오픈
        $("body").append('<div class="backon"></div>'); //뒷배경
    });

    $("body").on("click", function (event) {
        if (event.target.className == 'close' || event.target.className == 'backon') {
            console.log("close");
            $("#popup01").hide(); //close버튼이나 뒷배경 클릭시 닫힘
            $(".backon").hide();
        }
    });
});

// 결과별 og태그 변경해주는 스크립트, 이미지는 고정으로 하나만 쓸 예정이여서 url 값만 적용
$(function() {
    let url = window.location.href;
    $("meta[property='og\\:url']").attr("content", url);
});


// 공유하기 스크립트 : 나중에 서버에 올리고 진행할 것
