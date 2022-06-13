$(function(){
 'use strict'
 var winH   = $(window).height(),
     upperH = $('.upper-bar').innerHeight(),
     navH   =$('.navbar').innerHeight();
 $('.slider, .carousel-item').height(winH -(upperH + navH  ));


$('.featuerd-work ul li').on('click',function(){
 $(this).addClass('active').siblings().removeClass('active');
if ($(this).data('class') == 'all'){
  $('.shuffel .col-md').css('opacity', 1);
}
else{
    $('.shuffel .col-md').css('opacity','.09');
    $($(this).data('class')).parent().css('opacity', 1);
}
});
});