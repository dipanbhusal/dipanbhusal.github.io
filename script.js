$(document).ready(function(e){
    $win = $(window);
    $header = $("#header");
    $btn = $(".toggle-button");
    var width = $header.width();
    toggle_btn($win, $header, width, $btn);

    $win.resize(function(){
        toggle_btn($win, $header, width) 
    });

    $btn.click(function(e){
        $header.toggleClass("toggle-left");
        var translate = visible?100:0;
        $(".header").css({
            "-webkit-transform": "translateX(-"+translate+"%) ",
            "transform": "translateX(-"+translate+"%)",
            "transition": "all 1s ease-out"
        })
    })
});

function toggle_btn($win, $header, width, $btn){
    if($win.width() <= 768){
        $header.css({left :`-${width}px`}); 
    }
    else{
        $header.css({left:"0px"});
    }
}

var typed = new Typed("#typed",{
    strings:[
        'Web Developer',
        "Freelancer"
    ],
    typeSpeed: 60,
    backSpeed : 50,
    loop : true
})

var typed_2 = new Typed("#typed_2", {
    strings:[
        'Web Developer',
        "Freelancer"
    ],
    typeSpeed : 60,
    backSpeed : 50,
    loop : true,

})


    $(document).ready(function(){
        var scrollLink = $('.scroll');

        scrollLink.click(function(event){
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            },500);
        });
        
        $(window).scroll(function(){
            let scrollbarTop = $(this).scrollTop();
            scrollLink.each(function(){
                let sectionOffset = $(this.hash).offset().top -60;
                if (sectionOffset <= scrollbarTop){
                    
                    $('.scroll').removeClass('active');
                    $('.scroll').removeClass('trans');
                    $(this).addClass('active');
                    $(this).css({'transition':'all 200ms ease-in'});
                }
            })
            
        });
    $('.nav-icon').click(function(){
            $('#nav-menu').toggleClass('responsive');
        })
        
       
    });
    
