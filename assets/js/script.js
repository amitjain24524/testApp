$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
            loop:true,
			margin:0,
            nav:true,
			animateOut: 'slideOutUp',
            animateIn: 'slideInUp',
    		active: true,
			smartSpeed: 5000,
			autoplay: 5000,
			navText: [ '<span class="ficon ft-chevron-left"></span>', '<span class="ficon ft-chevron-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
 
 		//  TESTIMONIALS CAROUSEL HOOK
		// $('.customersTestimonials').owlCarousel({
		//     loop: true,
		//     center: true,
		//     items: 3,
		//     margin: 0,
		//     autoplay: false,
		//     dots:false,
		//     autoplayTimeout: 5000,
		//     smartSpeed: 450,
		//     responsive: {
		//       0: {
		//         items: 1
		//       },
		//       768: {
		//         items: 2
		//       },
		//       1170: {
		//         items: 3
		//       }
		//     }
		// });
});
