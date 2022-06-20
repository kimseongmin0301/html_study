$(document).ready(function(){
   $(".nav>ul>li").mouseenter(function(){
       $(".nav>ul>li>ul").stop().slideDown();
   })
   $(".nav>ul>li").mouseleave(function(){
       $(".nav>ul>li>ul").stop().slideUp();
   });

   let currentIndex=0;
   let slidePosition;

   setInterval(function(){
       if(currentIndex <2){
           currentIndex ++;
       }else{
           currentIndex =0;
       }slidePosition = currentIndex * (-300) +"px";

       $(".slideList").animate({top:slidePosition},400);
   },3000);

    $("#contents .notice_gal h2").click(function(){
        $("#contents .notice_gal h2, #contents .notice_gal ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });

    $("#contents .notice li").eq(0).click(function(){
        $(".modal").fadeIn();
    });
    $("button").click(function (){
        $(".modal").fadeOut();
    });
});