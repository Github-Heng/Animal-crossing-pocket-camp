$(document).ready(function () {
    $(document).scroll(function () {
        let scroH = $(document).scrollTop(); //滾動高度
        let viewH = $(window).height(); //可見高度 
        let contentH = $(document).height(); //內容高度

        console.log(scroH);
        if (scroH > 100) { //距離頂部大於100px時
           $(".One").addClass('animated');
            $(".One").addClass('fadeInUp');
        }
        else{
            $(".One").removeClass('animated').removeClass('fadeInUp');
        }
        if (scroH > 600) { //距離頂部大於100px時
           $(".Two").addClass('animated');
            $(".Two").addClass('fadeInUp');
        }
        else{
            $(".Two").removeClass('animated').removeClass('fadeInUp');
        }
        if (scroH > 1200) { //距離頂部大於100px時
           $(".Three").addClass('animated');
            $(".Three").addClass('fadeInUp');
        }else{
            $(".Three").removeClass('animated').removeClass('fadeInUp');
        }
        if (scroH > 1700) { //距離頂部大於100px時
           $(".Four").addClass('animated');
            $(".Four").addClass('fadeInUp');
        }else{
            $(".Four").removeClass('animated').removeClass('fadeInUp');
        }
        if (scroH > 2200) { //距離頂部大於100px時
           $(".Five").addClass('animated');
            $(".Five").addClass('fadeInUp');
        }else{
            $(".Five").removeClass('animated').removeClass('fadeInUp');
        }
        if (contentH - (scroH + viewH) <= 100) { //距離底部高度小於100px

        }
        if (contentH = (scroH + viewH)) { //滾動條滑到底部啦

        }
        
    });
    
    $(function(){ $('.sporty_btn').click(function(){ 
        $('html,body').animate({scrollTop:$('#idOne').offset().top-200}, 500);});  
    });
    
    $(function(){ $('.civic_btn').click(function(){ 
        $('html,body').animate({scrollTop:$('#idTwo').offset().top-200}, 500);});  
    });
    
    $(function(){ $('.rustic_btn').click(function(){ 
        $('html,body').animate({scrollTop:$('#idThree').offset().top-200}, 500);});  
    });
    
    $(function(){ $('.elegant_btn').click(function(){ 
        $('html,body').animate({scrollTop:$('#idFour').offset().top-200}, 500);});  
    });
    
    $(function(){ $('.modern_btn').click(function(){ 
        $('html,body').animate({scrollTop:$('#idFive').offset().top-200}, 500);});  
    });
    
    
    $(".icns_box").hover(function(){$(this).addClass("animated").addClass("pulse")},function(){$(this).removeClass("animated").removeClass("pulse")});
    
    $(".nav_Icon").hover(function(){$(this).addClass("animated").addClass("rubberBand")},function(){$(this).removeClass("animated").removeClass("rubberBand")});
    
    $(".body_box_img_center").hover(function(){$(this).addClass("animated").addClass("tada")},function(){$(this).removeClass("animated").removeClass("tada")});
    
    $(".img_eighty").hover(function(){$(this).addClass("animated").addClass("tada")},function(){$(this).removeClass("animated").removeClass("tada")});
    
    $(".nav_theme_pic").hover(function(){$(this).addClass("animated").addClass("rubberBand")},function(){$(this).removeClass("animated").removeClass("rubberBand")});
    
});
