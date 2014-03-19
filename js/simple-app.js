$(function() {

	//Init Navigation
	var nav = $('.swiper-nav').swiper({
		slidesPerView: 'auto',
		freeMode:true,
		freeModeFluid:true,
		onSlideClick: function(nav){
<<<<<<< HEAD
			//pages.swipeTo( nav.clickedSlideIndex )
=======
			pages.swipeTo(nav.clickedSlideIndex);
>>>>>>> 17e39cedde4b4638c6bcf5a6fdb692be9420e438
		}
	});

	//Function to Fix Pages Height
	function fixPagesHeight(){
		$('.swiper-pages').css({
			height: $(window).height()-nav.height
		})
	}

	$(window).on('resize',function(){
		fixPagesHeight();
	})
<<<<<<< HEAD
=======

>>>>>>> 17e39cedde4b4638c6bcf5a6fdb692be9420e438
	fixPagesHeight();

	//Init Pages
	var pages = $('.swiper-pages').swiper();

	//Scroll Containers
	$('.scroll-container').each(function(){
		$(this).swiper({
			mode:'vertical',
			scrollContainer: true,
			mousewheelControl: true,
			scrollbar: {
				container:$(this).find('.swiper-scrollbar')[0]
			}
		});
	});

	//Gallery
	var swiperGallery = $('.swiper-gallery').swiper({
		mode: 'vertical',
		slidesPerView: 'auto',
		freeMode: true,
		freeModeFluid: true,
		scrollbar: {
			container:$('.swiper-gallery .swiper-scrollbar')[0]
		}
	});
	swiperGallery.reInit();

});
