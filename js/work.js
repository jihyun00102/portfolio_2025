$(function() {
    Splitting();
    

    // scroll event
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.timeline({
        scrollTrigger:{
            trigger: ".intro",
            start:"top top",
            end:"bottom top",
            onEnter: () => {
                gsap.to('.intro', {backgroundColor: '#ffd09b', duration: 0.5 });
                gsap.to('.circle', {'border': '15px solid #fff6eb', backgroundColor: '#fff6eb', duration: 0 });
                gsap.to('.intro h2', {color: '#ffd09b', duration: 0.5 });
            }
        }
    });

    $(".cont_list > li").each(function () {
        const site = $(this).data('site');
        
        $(this).css('background-image', `url(../image/work/${site}.png)`);
    });
});