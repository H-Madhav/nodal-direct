;new WOW().init();

$(function(){
    var animation1 = "animated bounce";
    var animation2 = "animated bounceInLeft";
    var animation3 = "animated bounceInDown";
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    // $('.mainHeading').addClass(animation2).one(animationEnd, function(){
    // 	$(this).removeClass(animation2);
    // });

    $('.navBar').addClass(animation1).one(animationEnd, function(){
    	$(this).removeClass(animation1);
    }); 

	var stickyOffset = $('.sticky').offset().top;
	$(window).scroll(function(){
	  var sticky = $('.sticky'),
	      scroll = $(window).scrollTop();

	  if (scroll >= stickyOffset) sticky.addClass('fixed');
	  else sticky.removeClass('fixed');
    });

    var modal = $('#nodalModal');
    var openBtn = $('.open');
    var close = $('.close');
    var sendBtn = $(".sendBtn");
    var modalContent = $(".modalContent");

    openBtn.on('click', function(){
       modal.css("display", "block");
    });
    
    close.on('click', function(){
    	modal.css("display", "none");
    });

   openBtn.click(function(){
   	modalContent.addClass(animation3).one(animationEnd, function(){
   		$(this).removeClass(animation2);
   	});
   });
   
   $(".element").typed({
			strings: ["", " Desktop Site + Mobile App = 4 X Direct Inquires &amp; Bookings."],
			typeSpeed: 10
	});

});