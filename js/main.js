$(function(){
    let wW = window.innerWidth;
    let wH = window.innerHeight;
    let scTop = 0;
    const body = $("body") ;
    let banner = document.querySelector(".main_banner");
    let bannerLi = document.querySelectorAll(".mb_slide");
    let leftArrow = document.querySelector(".mb_prev");
    let rightArrow = document.querySelector(".mb_next");
    const pager = document.querySelectorAll(".mb_pg");
    let people = $(".people");
    let people1 = $(".people1");
    let people2 = $(".people2");
    let people3 = $(".people3");


    let showBanner = 0;
    let liWidth = bannerLi[0].clientWidth;
    let moveX = 0;


    let moveSlide = () => {
        for(i=0;i<pager.length;i++){
            pager[i].classList.remove("active");
        }
        pager[showBanner].classList.add("active")
        moveX = -25*showBanner;
        banner.style.transform =`translateX(${moveX}%)`;

    }
    rwd();

    $(window).resize(function(){
        rwd();
        reset();
    });

    function rwd() {
        wW = window.innerWidth;
        wH = window.innerHeight;
        if(wW < 768) {
            body.addClass("mo").removeClass("pc");
        }else{
            body.addClass("pc").removeClass("mo");
        }
    }
    function reset() {
        body.removeClass("hidden");
    }

    pager.forEach((btn, id) => {
        pager[id].addEventListener("click",function(){
            showBanner=id;
            moveSlide();
        })
    })


    function moveRight(){
        console.log("right");
        if(showBanner === bannerLi.length-1) return;
        showBanner++;
        moveSlide();
    }
    function moveLeft(){
        console.log("left");
        if(showBanner == 0) return;
        showBanner--;
        moveSlide();
    }
    rightArrow.addEventListener("click",moveRight);
    leftArrow.addEventListener("click",moveLeft);

    
    $(document).scroll(function(){
        scTop = $(this).scrollTop();
        $(".ani_left, .ani_right, .ani_top").each(function(){
            let offsetTop = $(this).offset().top - wH + 100;
            if(scTop > offsetTop){
                $(this).addClass("fade_in");
            } else {
                $(this).removeClass("fade_in");
            }
        });
    });

    people.mouseenter(function(){
        if(body.hasClass("pc")){
            $(this).addClass("active");
        } 
    });
    people.mouseleave(function(){
        if(body.hasClass("pc")){
            $(this).removeClass("active");
        }    
    });
    let peopleBox = $(".main_people_box");
    peopleBox.click(function(){
        if(body.hasClass("mo")){
            $(this).addClass("slide");
        }
    });

    //plugin
    
    $(".main_people_mo").slick({
        slidesToShow:1, // 슬라이드개수
        autoplay: true, // 자동재생
        autoplaySpeed: 3000, // 자동재생속도 
        speed:800, // 슬라이드 움직이는 속도
        dots:false, //페이지버튼
        arrows:false,
        centerMode:true, //센터모드
        centerPadding:"20px",
    });


    
    $(".main_news_box").slick({
        slidesToShow:3, // 슬라이드개수
        autoplay: true, // 자동재생
        autoplaySpeed: 3000, // 자동재생속도 
        speed:800, // 슬라이드 움직이는 속도
        dots:false, //페이지버튼
        centerMode:true, //센터모드
        centerPadding:"20px",
        appendArrows:$('.news_controls'), //위치이동
        responsive: [ //반응형
            {
                breakpoint: 1280, //미만
                settings: {
                    slidesToShow:2,
                    arrows:false,
                }
            },
            {
                 breakpoint: 768, //미만
                 settings: {
                    slidesToShow:1,
                    arrows:false,
                }
            }
        ],
    });
});
