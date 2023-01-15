$(function(){
    let wW = window.innerWidth;
    let wH = window.innerHeight;
    const body = $("body");
    let banner = document.querySelector(".main_banner");
    let bannerLi = document.querySelectorAll(".main_banner>li");
    let leftArrow = document.querySelector(".mb_prev");
    let rightArrow = document.querySelector(".mb_next");
    let pager = document.querySelectorAll(".main_banner_pagination>.mb_pg");
    let depth1 = $(".depth1");
    let depth1A = $(".depth1 > a");
    const slideSpeed = 200;


    $(".depth1").click(function(){
        $(this).css("opacity", "1");
    });
    $(".depth1 > a").click(function(){
        $(this).parent().siblings().find(".depth2").stop().slideUp(300);
        $(this).next().stop().slideToggle(300);
        if(!$(this).hasClass("border")) {
            (depth1A).removeClass("border")
            $(this).addClass("border");
        } else {
            $(this).removeClass("border")
        }
    });
    $(".gnb_button").click(function(){
        $("body").toggleClass("hidden");
        $(".gnb_container").toggleClass("active");
    });

});
    