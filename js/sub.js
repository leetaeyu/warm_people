$(function(){
    const ac = $(".flexbox > li")

    $(function(){
        $(".active_1").click(function(){
            $(this).siblings("li").toggleClass("hide");
            $(".active_1 > a > span").toggleClass("active3");
            // $("li").stop().slideUp(300);
            // $("li").stop().slideToggle(300);
        });
    });
    $(".flexbox").mouseleave(function(){
        $(".flexbox > .on").addClass("hide");
    });
    $(function(){
        $(".active_2").click(function(){
            $(this).siblings("li").toggleClass("hide");
            $(".active_2 > a > span").toggleClass("active3");
        });
    });
});