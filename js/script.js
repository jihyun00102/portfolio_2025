$(function(){
    // header load
    $("#header").load("./header.html",function() {
        $("header .gnb_btn").on("click", function() {
            $("header").toggleClass("on");
        });
    });

    // header scrollEvent
    var prevScrollTop = 0;
    document.addEventListener("scroll",function() {
        var nowScrollTop = $(window).scrollTop();  

        if (window.innerWidth >= 992) {
            if(nowScrollTop > prevScrollTop) {
                $("header").addClass("active");
            } else {
                $("header").removeClass("active");
            }
    
            prevScrollTop = nowScrollTop;
        }

    });


    // scroll
    gsap.set(".cursor", {xPercent: -50, yPercent: -50});

    let xTo = gsap.quickTo(".cursor", "x", {duration: 0.6, ease: "power3"}),
        yTo = gsap.quickTo(".cursor", "y", {duration: 0.6, ease: "power3"});

    let currentHover = null;

    $(window).on("mousemove", function(e) {
        xTo(e.clientX);
        yTo(e.clientY);

        $("header .gnb li").each(function() {
            const rect = this.getBoundingClientRect();
            const isHover = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

            if (isHover) {
                if (currentHover !== this) {
                    currentHover = this;
                    gsap.to(".flair", {scale: 1.8, duration: 0.3, ease: "power2.out"});
                    $(this).find("a").css({"color":"#ff5900","transition":"all 0.5s"});
                }
            } else {
                if (currentHover === this) {
                    currentHover = null;
                    gsap.to(".flair", {scale: 1, duration: 0.3});
                    $(this).find("a").css("color", "");
                }
            }
        });
    });


    // click event prevent
    $("a[href='#']").on("click",(e) => {
         e.preventDefault();
    });
});