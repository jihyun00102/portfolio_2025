$(function(){
    Splitting();

    gsap.registerPlugin(ScrollTrigger);

    // intro
    gsap.timeline({
        delay: 0.5
    })
    .to(".intro .line", {
        width: "100%",
        onComplete: function() {
            gsap.fromTo(".intro h2", {
                yPercent: 30
            }, {
                yPercent: -10,
                opacity: 1,
                stagger: 0.2,
                duration: 1.8,
                delay: 0.3,
                onComplete: function() {
                    gsap.to("section.intro", {
                        "--intro-arrow-opacity": "0.5"
                    });
                }
            });
        }
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".intro",
            start: "30% top",
            end: "bottom top",
            scrub: 1
        }
    });

    tl.to('.about', 
        {"--sub2_after-width": "65%"}
    );
    
    if (window.matchMedia("(min-width: 768px)").matches) {
        tl.fromTo(
            ".about .content",
            { width: "20%", height: "25vh", "border-radius": "50%" },
            { 
                width: "100%", 
                height: "50vh", 
                "border-radius": "15px", 
                delay: 0.3, 
                duration: 2, 
                ease: "power2.out" 
            }
        );
    }


    $(window).on('resize', function() {
        $(".keyword ul li").off("hover");

        if ($(window).width() >= 992) {
            $(".keyword ul li").hover(function(e) {
    
                const liOffset = $(this).offset();
                const newTop = liOffset.top - $('.keyword').offset().top;
    
                gsap.to('.bar', {
                    top: newTop,
                    duration: 0.5,
                    ease: "power2.out"
                });
    
                $(".keyword ul li").removeClass("on");
                $(this).addClass("on");
            });
        } else {
            let currentIndex = 0;
            const items = $(".keyword ul li");
            const totalItems = items.length;

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.keyword',
                    start: '-100% top',
                    end: 'bottom top',
                    scrub: 1,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const newIndex = Math.floor(progress * totalItems);


                        if (newIndex !== currentIndex) {
                            const itemIndex = newIndex == totalItems ? (newIndex - 1) : newIndex;
                            
                            items.removeClass("on");
                            items.eq(itemIndex).addClass("on");
                            
                            if (items.eq(newIndex).length) {
                                const liOffset = items.eq(newIndex).offset();
                                const newTop = liOffset.top - $('.keyword').offset().top;

                                gsap.to('.bar', {
                                    top: newTop,
                                    duration: 0.5,
                                    ease: "power2.out"
                                });
                            }

                            currentIndex = newIndex;
                        }
                    }
                }
            });
        }
    }).resize();


    $(".process_list").slick({
        autoplay: true,
        autoplaySpeed : 3000,
        speed: 1000,
        slidesToShow: 1,    
        slidesToScroll: 1,  
        arrows: false,      
        dots: true,         
        infinite: true,     
        fade:true
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: ".process",
            start: "top top",
            end: "130% top",
            scrub: 1
        }
    })
    .to('.guide', 
        { "--sub2_after-width": "65%" , duration: 1.2}
    )
    .to('.typo_box p', 
        { 
            transform: "translateY(0)", 
            opacity: 1,  
            stagger: {
                amount: 1, 
                from: "start"
            }, 
            duration: 1.2
        }
    )
    .to('.color_txt p', 
        { 
            transform: "translateY(0)", 
            opacity: 1, 
            stagger: {
                amount: 1, 
                from: "start"
            }, 
            duration: 1.2
        }
    );



    gsap.timeline({
        scrollTrigger: {
            trigger: ".guide",
            start: "90% top",
            end: "bottom top",
            duration: 2.5, 
            scrub: 1
        }
    })
    .to(".thanks",{"--thanks-tit-width":"100%"});

})