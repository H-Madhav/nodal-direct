;new WOW().init();
function openNav() {
    document.getElementById("mySidenav").style.width = "320px";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};

function hideDashbord(){
  document.getElementById('dashbordModal').style.display = "none";
};

function showDashbord(){
  document.getElementById('dashbordModal').style.display = "block";
};

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
   
 //   $(".element").typed({
	// 		strings: ["Desktop Site = Direct Inquires &amp; Bookings.", " Desktop Site + Mobile App = 4 X Direct Inquires &amp; Bookings."],
	// 		typeSpeed: 10
	// });
 

  var myIndex = 0;
  carousel();
  var numItems = $('.bgSlid ul li');
  var itemsLnth = $('.bgSlid ul li').length;
  function carousel() { 
    $('.bgSlid ul li').slideUp('slow');
    myIndex++;
      
    if (myIndex > itemsLnth) {myIndex = 1}
    <!-- alert(myIndex-1); -->
    $('.bgSlid ul li').eq(myIndex-1).slideDown('slow');
    setTimeout(carousel, 3000);
  };
});


angular.module("nodal", [])
.controller('NodalController', NodalController);

function NodalController($timeout){
   var direct = this;
   direct.mobileApp = "";
   direct.factor = "";

   var changeHeading = function(){
       direct.mobileApp = " + Mobile App ";
       direct.factor = " 4 x "
    };
    $timeout(changeHeading, 3000);
};
