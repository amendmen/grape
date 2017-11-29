$(document).ready(function() {

	$(window).scroll(function() {
		if ( $(this).scrollTop() > 0 ) {
			$('.logo').addClass('onscroll')
		} else {
			$('.logo').removeClass('onscroll')
		}
	})

$(".my-menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
				top = $(id).offset().top - 70;
		$('body,html').animate({scrollTop: top}, 1500);
	});


AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

  $(".slide-one").owlCarousel({
  	loop:true,
    center: true,
    autoplay: true,
    autoWidth: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        350:{
        	margin: 0
        },

        600:{
            items:2,
            nav:false,
            center: false,
            margin: 10,
        },
        815:{
        	center: true,
        },
        1200:{
            items:4,
            nav:true,
            loop:true,
            center:true,
            margin: 60
        }
    }
  })

$('.slide-news').owlCarousel({
   	center:true,
    loop:true,
    autoWidth:true,
    autoplay: true,
    items:4,
    margin:0,
    smartSpeed:500,
})

$('.slide-feed').owlCarousel({
   	center:true,
    loop:true,
    autoWidth:true,
    autoplay: true,
    items:4,
    margin:0,
    smartSpeed:250,
})

$('.slide-two').owlCarousel({
    loop:true,
    margin:50,
    smartSpeed:200,
    autoWidth: true,
    nav:false,
    autoplay: true,
    autoWidth: true,
    center: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})



})