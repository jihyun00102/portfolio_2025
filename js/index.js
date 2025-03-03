$(function(){
    
    // intro
    Splitting();

    // gsap
    gsap.registerPlugin(ScrollTrigger);

    // about title ani
    gsap.timeline({
        scrollTrigger: {
            trigger: "section.intro",
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    }).to('section.about', 
        {"--about-tit-width": "85px"}
    );

    // about triangle ani
    gsap.timeline({
        scrollTrigger: {
            trigger: "section.about",
            start: 'top top',
            end: '110% top',
            scrub: 1
        }
    }).fromTo('.about .triangle', 
        { backgroundPositionX: "0%" }, 
        { backgroundPositionX: "-10%", duration: 1 }
    );

    // footer
    if (window.matchMedia("(min-width: 768px)").matches) {
        gsap.timeline({
            scrollTrigger: {
                trigger: 'section.work',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            }
        }).fromTo('footer h2 span', 
            {'background-size': '0% 100%'},
            {'background-size': '100% 100%'}
        );
    }
    

    // slick
    $(".work .slide").slick({
        slidesToShow:1,
        slidesToScroll:1,
        centerMode:true,
        focusOnSelect:true,
        centerPadding:"calc(50% - 550px)",
        adaptiveHeight:true,
        infinite:true,
        prevArrow: '<button class="slick-prev">이전</button>', 
        nextArrow: '<button class="slick-next">다음</button>',
        responsive: [
            {
                breakpoint: 1439,       
                settings: {
                    centerPadding:"calc(50% - 350px)",
                }
            },
            {
                breakpoint: 1199,       
                settings: {
                    centerPadding:"calc(50% - 350px)",
                    arrows:false
                }
            },
            {
                breakpoint: 1024,       
                settings: {
                    centerPadding:false,
                    slidesToShow:2,
                    arrows:false
                }
            },
            {
                breakpoint: 480,       
                settings: {
                    slidesToShow:1,
                    arrows:false
                }
            }
        ]
    });


    $(".work .slide li").each(function () {
        let work = $(this).data("work");

        $(this).find(".thumbnail").css("background-image",`url(../image/mokeup/${work}.png)`);
    });
});


// work popup layer
const body = document.querySelector('body');
let workList = [
    ["서강대학교 리뉴얼","기여도 100%", "https://prism.sogang.ac.kr/", "sogang", "메인 및 서브페이지 리뉴얼 퍼블리싱 작업"],
    ["부산공유대학 리뉴얼","기여도 80%", "https://www.bbits.ac.kr/", "bbits", "메인 페이지 리뉴얼 퍼블리싱"],
    ["가톨릭성서모임","기여도 100%", "https://www.biblemove.com/", "biblemove", "메인 및 서브페이지 퍼블리싱과 PHP를 활용한 위젯 개발"],
    ["한국화학융합시험연구원 리뉴얼","기여도 100%", "https://hrd.ktr.or.kr/", "ktr", "메인 및 서브페이지 리뉴얼 퍼블리싱과 자바스크립트를 사용한 배너 제작"],
    ["JST 공유대학 리뉴얼","기여도 100%", "https://jb.jst.ac.kr/", "jst", "메인페이지를 풀페이지로 리뉴얼"]
];

function openPopup($widx) {
    const popupLayer = `
        <div class="popup">
            <div class="dim" onclick="closePopup();"></div>
            <div class="popup_layer f_ko">
                <div class="layer__top">
                    <div class="top_tit">
                        <h2>${workList[$widx][0]}</h2>
                        <p>${workList[$widx][1]}</p>
                    </div>
                    <div class="top_btns">
                        <button class="link" onclick="window.open('${workList[$widx][2]}')"></button>
                        <button class="close" onclick="closePopup();"></button>
                    </div>
                </div>
                <div class="layer_bottom">
                    <p>${workList[$widx][4]}</p>
                    <img src="../image/work/${workList[$widx][3]}.png" alt="">
                </div>
            </div>  
        </div>
    `;
    const workElement = document.querySelector('section.work');
    workElement.insertAdjacentHTML('afterend', popupLayer);

    body.classList.add("disabled");
}

function closePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
        body.classList.remove("disabled");
    }
}