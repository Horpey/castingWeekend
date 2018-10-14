$(document).ready(function () {
			$('.myslid').slick({
				dots: true,
				infinite: true,
				speed: 500,
				autoplay: true,
				autoplaySpeed: 2000,
				arrows: false,
				fade: true,
				cssEase: 'linear'
			});

			$('.myslid1').slick({
				dots: false,
				infinite: true,
				speed: 500,
				autoplay: true,
				autoplaySpeed: 7000,
				arrows: false,
				fade: true,
				cssEase: 'linear'
			});
		});

		$(window).scroll(function () {
			if ($(this).scrollTop() > 300) /*height in pixels when the navbar becomes non opaque*/ {
				$('.opaque-navbar').addClass('opaque');
			} else {
				$('.opaque-navbar').removeClass('opaque');
			}
		});