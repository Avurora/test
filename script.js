// JavaScript Document

$(function(){
    
    
    $('#coin-collect-botton').click(function(){
        $('#coin-collect').slideToggle()
        
    });
    
    
    $('#haori-collect-botton').click(function(){
        $('#haori-collect').slideToggle()
    });
    
    
    
//ステップ３の複数階層のクリック
    $('#trade-botton').click(function(){
        $('#trade').slideToggle()
    });
    
    
    $('#donuts').click(function(){
        $('#donuts-list').slideToggle()
    });
    
    $('#hamburger').click(function(){
        $('#hamburger-list').slideToggle()
    });
    
    $('#drink').click(function(){
        $('#drink-list').slideToggle()
    });
    

//    ステップ４
    $('#trade-manner-botton').click(function(){
        $('#trade-manner').slideToggle()
    });
    
    
 
    
    
    
    
    $(function(){
    $(window).scroll(function (){
        $('fadeIn').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
        
        
        
        
        
        
        
});
    
    
    
    
    
   $(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
}); 
    
    
    
//  loading
    window.onload = function(){
 $(function() {
  $("#loading").fadeOut();
  $("#container").fadeIn();
 });
}
    
    
    
    
    
    
    
    
});
