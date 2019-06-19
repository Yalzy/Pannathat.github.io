;


var ready = true;
/** -- end globals --**/


$(window).load(function(){
    $("#loading-layer").fadeOut(200, function(){
        $("#intro").removeClass("hidden").addClass("animated fadeInDown");
        setTimeout(function(){
            $(".interest").removeClass("hidden").addClass("animated zoomIn"); 
            onRdy();
        },1000);
         
        
    });
    

    
});

function onRdy(){
    
    $("body").niceScroll({scrollspeed:60, cursorcolor:"#b4b4b4",zindex:500});

    $(window).on("scroll", function(){
        if(ready){
            handleScroll();
        }
        
    });
    
    
    function handleScroll(){
        ready=false;
        if($(window).scrollTop() >= 70){
            $("#banner-cont").stop().slideUp({
                duration:300,
                done: function(){
                    ready=true; 
                },
                queue: false
            });

            $("#banner-bottom-color").css("background","rgba(165, 227, 255,0.8)");
        }
        else{
            $("#banner-cont").stop().slideDown({
                duration:300,
                done: function(){
                    ready=true; 
                },
                queue: false
            });

            $("#banner-bottom-color").css("background","#a5e3ff");
        } 
    }

    function scrollTo(id){

        $('html,body').animate({
            scrollTop: $("#"+id).offset().top-90},
            'slow');
    }

    function scrollToMobile(id){
        $('html,body').animate({
            scrollTop: $("#"+id).offset().top-150},
            'slow');
    }

    
    handleScroll();
    
    
    $(".rep-section").click(function(){
        var expandable = $(this).find(".rep-section-expandable");
        var fa = $(this).find(".fa");
        if($(this).hasClass("open")){
            $(expandable).slideUp(200);
            $(this).removeClass("open");
            $(fa).removeClass("fa-compress");
            $(fa).addClass("fa-expand");
        }
        
        else{
            $(expandable).slideDown(200);
            $(this).addClass("open");
            $(fa).removeClass("fa-expand");
            $(fa).addClass("fa-compress");
        }
        
        
    });
    
    
    $(".nav-item").click(function(){
        var id = $(this).attr("id");
        
        switch(id){
            case "about-item":
                scrollTo("about");
                break;
                
            case "blog-item":
                scrollTo("blog");
                break;
                
            case "rep-item":
                scrollTo("rep");                
                break;
                
            case "contact-item":
                scrollTo("contact");
                break;                
                
        }
    });
    

    $("#av-cont").click(function(){
        $('html,body').animate({
            scrollTop: $("html").offset().top},
            'slow');
    });
    
};