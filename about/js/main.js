(function($){"use strict";$('.dropdown-menu a.dropdown-toggle').on('click',function(e){if(!$(this).next().hasClass('show')){$(this).parents('.dropdown-menu').first().find('.show').removeClass('show');}
var $subMenu=$(this).next('.dropdown-menu');$subMenu.toggleClass('show');$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown',function(e){$('.dropdown-submenu .show').removeClass('show');});return false;});if($('.search-box-outer').length){$('.search-box-outer').on('click',function(){$('body').addClass('search-active');});$('.close-search').on('click',function(){$('body').removeClass('search-active');});}
$(document).on('ready',function(){$("[data-background]").each(function(){$(this).css("background-image","url("+$(this).attr("data-background")+")");});});new WOW().init();$('.hero-slider').owlCarousel({loop:true,margin:0,nav:true,dots:false,animateOut:'fadeOut',animateIn:'fadeIn',active:true,smartSpeed:1000,autoplay:false,navText:["<i class='far fa-long-arrow-left'></i>","<i class='far fa-long-arrow-right'></i>"],responsive:{0:{items:1},600:{items:1},800:{items:1},1024:{items:1}}});$('.partner-slider').owlCarousel({loop:true,margin:75,nav:false,dots:false,autoplay:true,responsive:{0:{items:2},600:{items:3},1000:{items:6}}});$('.testimonial-slider').owlCarousel({loop:true,margin:30,nav:false,dots:true,autoplay:true,responsive:{0:{items:1},600:{items:2},1000:{items:3}}});$('.special-offer-slider').owlCarousel({loop:true,margin:30,nav:false,autoplayHoverPause:true,animateOut:'fadeOut',navText:["<i class='far fa-long-arrow-left'></i>","<i class='far fa-long-arrow-right'></i>"],dots:true,autoplay:true,responsive:{0:{items:1},600:{items:1},1000:{items:1}}});$(window).on('load',function(){$(".preloader").fadeOut("slow");});$('.counter').countTo();$('.counter-box').appear(function(){$('.counter').countTo();},{accY:-100});$(document).ready(function(){var progressBar=$('.progress');if(progressBar.length){progressBar.each(function(){var Self=$(this);Self.appear(function(){var progressValue=Self.data('value');Self.find('.progress-bar').animate({width:progressValue+'%'},1000);});})}});$(".popup-gallery").magnificPopup({delegate:'.popup-img',type:'image',gallery:{enabled:true},});$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:false,fixedContentPos:false});$(window).scroll(function(){if(document.body.scrollTop>100||document.documentElement.scrollTop>100){$("#scroll-top").fadeIn('slow');}else{$("#scroll-top").fadeOut('slow');}});$("#scroll-top").click(function(){$("html, body").animate({scrollTop:0},1500);return false;});$(window).scroll(function(){if($(this).scrollTop()>50){$('.navbar').addClass("fixed-top");}else{$('.navbar').removeClass("fixed-top");}});if($('#countdown').length){$('#countdown').countdown('2028/01/30',function(event){$(this).html(event.strftime(''+'<div class="row">'+'<div class="col countdown-single">'+'<h2 class="mb-0">%-D</h2>'+'<h5 class="mb-0">Day%!d</h5>'+'</div>'+'<div class="col countdown-single">'+'<h2 class="mb-0">%H</h2>'+'<h5 class="mb-0">Hours</h5>'+'</div>'+'<div class="col countdown-single">'+'<h2 class="mb-0">%M</h2>'+'<h5 class="mb-0">Minutes</h5>'+'</div>'+'<div class="col countdown-single">'+'<h2 class="mb-0">%S</h2>'+'<h5 class="mb-0">Seconds</h5>'+'</div>'+'</div>'));});}
$(window).on('load',function(){if($(".filter-box").children().length>0){$(".filter-box").isotope({itemSelector:'.filter-item',masonry:{columnWidth:1},});$('.filter-btns').on('click','li',function(){var filterValue=$(this).attr('data-filter');$(".filter-box").isotope({filter:filterValue});});$(".filter-btns li").each(function(){$(this).on("click",function(){$(this).siblings("li.active").removeClass("active");$(this).addClass("active");});});}});let date=new Date().getFullYear();$("#date").html(date);if($(".price-range").length){$(".price-range").slider({range:true,min:0,max:999,values:[100,500],slide:function(event,ui){$("#price-amount").val("$"+ui.values[0]+" - $"+ui.values[1]);}});$("#price-amount").val("$"+$(".price-range").slider("values",0)+" - $"+$(".price-range").slider("values",1));}
$(".plus-btn").on("click",function(){var i=$(this).closest(".cart-qty").children(".quantity").get(0).value++,c=$(this).closest(".cart-qty").children(".minus-btn");i>0&&c.removeAttr("disabled");}),$(".minus-btn").on("click",function(){2==$(this).closest(".cart-qty").children(".quantity").get(0).value--&&$(this).attr("disabled","disabled");})
if($('.flexslider-thumbnails').length){$('.flexslider-thumbnails').flexslider({animation:"slide",controlNav:"thumbnails",});}})(jQuery);