/*******************/
/**** Functions ****/
/*******************/

/* Change text automatically on 'ALL' page */
let textIndex: number = 0;
const text = ['Era.', 'Sk8-Hi.', 'Slip-On.', 'Authentic.', 'Old-Skool.'];
const textIndexLength: number = text.length;
function changeText(): void {
	textIndex++;
	if (textIndex > textIndexLength) {
		textIndex = 1;
	}
	document.querySelector(
		'.classics-header__title-text--bottom h1'
	).textContent = text[textIndex - 1];
}

/* Start automatic text change for 'ALL' page on load */
const si = setInterval(changeText, 1000);

/* Mobile subnav */
$('#subnav--mobile').click(() => {
	$('.classics-subnav--mobile__pane').slideToggle(250);
});

/* Sticky subnav */
const subnav = document.getElementById('subnav');
const sticky = subnav.offsetTop;
const mobileSubnav = document.getElementById('subnav--mobile');
const mobileSticky = mobileSubnav.offsetTop;
function navbarStick() {
	if (window.pageYOffset >= 610) {
		subnav.classList.add('sticky');
	} else {
		subnav.classList.remove('sticky');
	}
}
function navbarStickMobile() {
	if (window.pageYOffset >= 425) {
		mobileSubnav.classList.add('sticky');
	} else {
		mobileSubnav.classList.remove('sticky');
	}
}
if (window.matchMedia('(max-width: 760px)').matches) {
	window.onscroll = () => {
		navbarStickMobile();
	};
} else {
	window.onscroll = () => {
		navbarStick();
	};
}
/* Initialize Parallax Scroll */
declare var ParallaxScroll: any;
ParallaxScroll.init();

$('.era-shoes, .all-shoes').click(() => {
	$('.classics-header__title-text--top').removeClass('animated fadeIn');
	$('.classics-header__title-text--middle').removeClass('animated fadeIn');
	$('.classics-header__title-text--bottom').removeClass('animated fadeIn');
	$('.classics-header__title-text--bottom-shoe').removeClass('animated fadeIn');
});

/**** Initialize Navigo router ****/
declare var Navigo: any;
const root = null;
const useHash = true;
const hash = '#';
const router = new Navigo(root, useHash, hash);

/***************************/
/**** All Classics Page ****/
/***************************/

router
	.on('/', () => {
		console.log('This is all');
		// $('.all-shoes').css('color', '#c9192e');
		// $('.era-shoes')
		// 	.css('color', 'white')
		// 	.mouseover(() => {
		// 		$('.era-shoes').css('color', '#c9192e');
		// 	})
		// 	.mouseout(() => {
		// 		$('.era-shoes').css('color', 'white');
		// 	});
		$('.all-shoes').css('color', '#c9192e');
		$('.era-shoes').css('color', 'white');

		$('.classics-header__title-bg1').addClass('animated slideInDown');
		$('.classics-header__title-bg2').addClass('animated slideInUp');
		$('.classics-header__title-text--top')
			.addClass('animated fadeIn')
			.css({ animationDelay: '.75s' });
		$('.classics-header__title-text--middle')
			.addClass('animated fadeIn')
			.css({ animationDelay: '1s' });
		$('.classics-header__title-text--bottom')
			.addClass('animated fadeIn')
			.css({ animationDelay: '1.25s' });

		$('#classics-header__img--1')
			.attr(
				'src',
				// 'https://images.vans.com/is/image/VansBrand/sp19-core-classics-all-header-1?wid=836'
				ProductAssets.mainProducts.All.headerImage1.url
			)
			.addClass('animated fadeInLeft');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#classics-header__img--1').css({
				position: 'absolute',
				zIndex: '1',
				bottom: '-650px',
				left: '-25px',
				width: '30%',
				minWidth: '400px'
			});
		} else {
			$('#classics-header__img--1').css({
				position: 'absolute',
				top: '0',
				zIndex: '5',
				right: '50%',
				width: '53%'
			});
		}

		$('#classics-header__img--2')
			.attr(
				'src',
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-all-header-2?wid=1824&fmt=png-alpha'
			)
			.addClass('animated zoomIn');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#classics-header__img--2').css({
				position: 'absolute',
				zIndex: '0',
				top: '-60px',
				left: '15%',
				width: '65%',
				minWidth: '966px'
			});
		} else {
			$('#classics-header__img--2').css({
				position: 'absolute',
				zIndex: '1',
				bottom: '-300px',
				left: '30%',
				transform: 'scale(1.6)'
			});
		}

		$('#classics-header__img--3')
			.attr(
				'src',
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-all-header-3?wid=1030&fmt=png-alpha'
			)
			.addClass('animated fadeInRight');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#classics-header__img--3').css({
				position: 'absolute',
				zIndex: '1',
				bottom: '-520px',
				right: '0',
				width: '25%',
				minWidth: '400px'
			});
		} else {
			$('#classics-header__img--3').css({
				display: 'none'
			});
		}

		$('.classics-header__title-text--bottom h1').css({
			display: 'block'
		});
		$('.classics-header__title-text--bottom-shoe h1').text('');

		$('.classics-description')
			.text('')
			.css({ marginTop: '50px' });

		// first image
		$('#img1 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-slipon-1?wid=356&fmt=png-alpha'
		);
		$('#img1 .classics-body__block--title').text('Slip-On');
		$('#img1 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img1.classics-body__block')
				.css({
					gridArea: '1 / 1 / 3 / 3'
				})
				.attr('data-parallax', '{"y": "-50"}');
			$('#img1 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '75%',
				padding: '0'
			});
		} else {
			$('#img1.classics-body__block')
				.css({
					gridArea: '1 / 1 / 3 / 3'
				})
				.attr('data-parallax', '{"y": "-35"}');
			$('#img1 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px'
			});
		}

		// second image
		$('#img2 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-1?wid=1072&fmt=png-alpha'
		);
		$('#img2 .classics-body__block--title').text('Era');
		$('#img2 .classics-body__block--price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img2.classics-body__block')
				.css({
					gridArea: '1 / 3 / 2 / 4'
				})
				.attr('data-parallax', '{"y": "-25"}');
			$('#img2 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translateY(0)'
			});
		} else {
			$('#img2.classics-body__block')
				.css({
					gridArea: '3 / 1 / 4 / 2'
				})
				.attr('data-parallax', '{"y": "35"}');
			$('#img2 .classics-body__block--content').css({
				width: '100%',
				padding: '0 20px'
			});
		}

		// third image
		$('#img3 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-authentic-1?wid=400&fmt=png-alpha'
		);
		$('#img3 .classics-body__block--title').text('Authentic');
		$('#img3 .classics-body__block--price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img3.classics-body__block')
				.css({
					gridArea: '1 / 4 / 2 / 5'
				})
				.attr('data-parallax', '{"y": "25"}');
			$('#img3 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translateY(0)'
			});
		} else {
			$('#img3.classics-body__block')
				.css({
					gridArea: '3 / 2 / 4 / 3'
				})
				.attr('data-parallax', '{"y": "-35"}');
			$('#img3 .classics-body__block--content').css({
				width: '100%',
				padding: '0 20px'
			});
		}

		// fourth image
		$('#img4 .classics-body__block--image-solo').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-1?wid=1576&fmt=png-alpha'
		);
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img4.classics-body__block')
				.css({
					gridArea: '2 / 3 / 5 / 5'
				})
				.attr('data-parallax', '{"y": "35"}');

			$('#img4 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '88%'
			});
		} else {
			$('#img4.classics-body__block')
				.css({
					gridArea: '4 / 1 / 6 / 3'
				})
				.attr('data-parallax', '{"y": "35"}');
			$('#img4 .classics-body__block--content').css({
				width: '100%',
				padding: '0 20px',
				marginBottom: '20px'
			});
		}

		// fifth image
		$('#img5 .classics-body__block--image-solo').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-2?wid=1586&fmt=png-alpha'
		);
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img5.classics-body__block')
				.css({
					gridArea: '4 / 1 / 6 / 3'
				})
				.attr('data-parallax', '{"y": "50"}');

			$('#img5 .classics-body__block--content').css({
				width: '90%',
				transform: 'translate(-5%, -25%)'
			});
		} else {
			$('#img5.classics-body__block').css({
				gridArea: '6 / 1 / 8 / 3'
			});
			$('#img5 .classics-body__block--content').css({
				width: '100%',
				padding: '0 20px',
				transform: 'translate(0)',
				marginBottom: '20px'
			});
		}

		// sixth image
		$('#img6 .classics-body__block--image-cut').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-sk8hi-1?wid=510&fmt=png-alpha'
		);
		$('#img6 .classics-body__block--title').text('Sk8-Hi');
		$('#img6 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img6.classics-body__block')
				.css({
					gridArea: '5 / 3 / 6 / 5'
				})
				.attr('data-parallax', '{"y": "-35"}');
			$('#img6 .classics-body__block--content').css({
				justifySelf: 'start',
				margin: '10% auto auto 15%',
				width: '50%',
				transform: 'translateY(0)'
			});
			$('#img6 .classics-body__block--image-cut-bg').css({
				width: '80%',
				transform: 'translate(-15%, 15%)'
			});
		} else {
			$('#img6.classics-body__block')
				.css({
					gridArea: '8 / 1 / 10 / 3'
				})
				.attr('data-parallax', '{"y": "25"}');
			$('#img6 .classics-body__block--content').css({
				width: '100%',
				padding: '0 20px',
				margin: '0'
			});
			$('#img6 .classics-body__block--image-cut').css({
				width: '70%',
				transform: 'scale(1.1) translate(0, 0)'
			});
			$('#img6 .classics-body__block--image-cut-bg').css({
				width: '80%',
				transform: 'scale(0.7) translate(-40%, 8%)',
				zIndex: '0'
			});
		}

		// seventh image
		$('#img7 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-2?wid=1072&fmt=png-alpha'
		);
		$('#img7 .classics-body__block--title').text('Era');
		$('#img7 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img7.classics-body__block')
				.css({
					gridArea: '1 / 2 / 2 / 3'
				})
				.attr('data-parallax', '{"y": "-25"}');
			$('#img7 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translateX(-45%)'
			});
		} else {
			$('#img7.classics-body__block')
				.css({
					gridArea: '1 / 1 / 2 / 2'
				})
				.attr('data-parallax', '{"y": "25"}');
			$('#img7 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// eighth image
		$('#img8 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-oldskool-1?wid=400&fmt=png-alpha'
		);
		$('#img8 .classics-body__block--title').text('Old Skool');
		$('#img8 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img8.classics-body__block')
				.css({
					gridArea: '1 / 3 / 2 / 4'
				})
				.attr('data-parallax', '{"y": "50"}');
			$('#img8 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translateX(-45%)'
			});
		} else {
			$('#img8.classics-body__block')
				.css({
					gridArea: '1 / 2 / 2 / 3'
				})
				.attr('data-parallax', '{"y": "-25"}');
			$('#img8 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// ninth image
		$('#img9 .classics-body__block--image-solo').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-3?wid=1010&fmt=png-alpha'
		);
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img9.classics-body__block')
				.css({
					gridArea: '1 / 3 / 3 / 5'
				})
				.attr('data-parallax', '{"y": "-75"}');
			$('#img9 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '60%',
				transform: 'translateX(-5%)'
			});
		} else {
			$('#img9.classics-body__block')
				.css({
					gridArea: '2 / 1 / 4 / 3'
				})
				.attr('data-parallax', '{"y": "25"}');
			$('#img9 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 15px',
				transform: 'translateX(0)',
				marginBottom: '35px'
			});
		}

		// tenth image
		$('#img10 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-authentic-2?wid=400&fmt=png-alpha'
		);
		$('#img10 .classics-body__block--title').text('Authentic');
		$('#img10 .classics-body__block--price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img10.classics-body__block')
				.css({
					gridArea: '2 / 1 / 4 / 2'
				})
				.attr('data-parallax', '{"y": "-50"}');
			$('#img10 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '75%',
				transform: 'translateY(27%)'
			});
		} else {
			$('#img10.classics-body__block')
				.css({
					gridArea: '4 / 1 / 5 / 2'
				})
				.attr('data-parallax', '{"y": "15"}');
			$('#img10 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// eleventh image
		$('#img11 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-3?wid=1072&fmt=png-alpha'
		);
		$('#img11 .classics-body__block--title').text('Era');
		$('#img11 .classics-body__block--price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img11.classics-body__block')
				.css({
					gridArea: '2 / 2 / 5 / 4'
				})
				.attr('data-parallax', '{"y": "35"}');
			$('#img11 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '85%',
				transform: 'translateY(3%)'
			});
		} else {
			$('#img11.classics-body__block')
				.css({
					gridArea: '4 / 2 / 5 / 3'
				})
				.attr('data-parallax', '{"y": "-15"}');
			$('#img11 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// twelfth image
		$('#img12 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-4?wid=1072&fmt=png-alpha'
		);
		$('#img12 .classics-body__block--title').text('Era');
		$('#img12 .classics-body__block--price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img12.classics-body__block')
				.css({
					gridArea: '3 / 4 / 4 / 5'
				})
				.attr('data-parallax', '{"y": "-75"}');
			$('#img12 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(5%, 5%)'
			});
		} else {
			$('#img12.classics-body__block')
				.css({
					gridArea: '5 / 1 / 6 / 2'
				})
				.attr('data-parallax', '{"y": "15"}');
			$('#img12 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// thirteenth image
		$('#img13 .classics-body__block--image-cut').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-slipon-2?wid=263&fmt=png-alpha'
		);
		$('#img13 .classics-body__block--title').text('Slip-On');
		$('#img13 .classics-body__block--price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img13.classics-body__block')
				.css({
					gridArea: '4 / 1 / 5 / 2'
				})
				.attr('data-parallax', '{"y": "75"}');
			$('#img13 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '90%',
				transform: 'translate(25%, 30%)'
			});
			$('#img13 .classics-body__block--image-cut-bg').css({
				transform: 'scale(1.1) translate(0, 65%)'
			});
		} else {
			$('#img13.classics-body__block').css({
				gridArea: '8 / 1 / 10 / 3'
			});
			$('#img13 .classics-body__block--content').css({
				justifySelf: 'center',
				width: '70%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
			$('#img13 .classics-body__block--image-cut-bg').css({
				transform: 'scale(1.1) translate(-2%, 65%)'
			});
		}

		// fourteenth image
		$('#img14 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-sk8hi-2?wid=356&fmt=png-alpha'
		);
		$('#img14 .classics-body__block--title').text('Sk8-Hi');
		$('#img14 .classics-body__block--price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img14.classics-body__block')
				.css({
					gridArea: '4 / 3 / 5 / 4'
				})
				.attr('data-parallax', '{"y": "-45"}');
			$('#img14 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(-85%, 35%)'
			});
		} else {
			$('#img14.classics-body__block')
				.css({
					gridArea: '5 / 2 / 6 / 3'
				})
				.attr('data-parallax', '{"y": "-15"}');
			$('#img14 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// fifteenth image
		$('#img15 .classics-body__block--image-solo').attr(
			'src',
			'http://0bcaec7ece69371763f5-b1bcbcfde69c8ed350e6ba506c5f8d5c.r72.cf1.rackcdn.com/s19-core-classics-era-4.gif'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img15.classics-body__block')
				.css({
					gridArea: '4 / 3 / 5 / 5'
				})
				.attr('data-parallax', '{"y": "75"}');
			$('#img15 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '65%',
				transform: 'translateX(-5%)'
			});
		} else {
			$('#img15.classics-body__block')
				.css({
					gridArea: '6 / 1 / 8 / 3'
				})
				.attr('data-parallax', '{"y": "50"}');
			$('#img15 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)',
				marginBottom: '25px'
			});
		}

		document.querySelector(
			'.classics-header__title-text--bottom h1'
		).textContent = 'Era.';

		$('.classics-subfooter__button').text('SHOP ALL CLASSICS');
	})
	.resolve();

/******************/
/**** Era Page ****/
/******************/
router
	.on('era', () => {
		console.log('This is era');

		// $('.all-shoes')
		// 	.css('color', 'white')
		// 	.mouseover(() => {
		// 		$('.all-shoes').css('color', '#c9192e');
		// 	})
		// 	.mouseout(() => {
		// 		$('.all-shoes').css('color', 'white');
		// 	});
		// $('.era-shoes').css('color', '#c9192e');
		$('.all-shoes').css('color', 'white');
		$('.era-shoes').css('color', '#c9192e');

		$('.classics-header__title-bg1').addClass('animated slideInDown');
		$('.classics-header__title-bg2').addClass('animated slideInUp');
		$('.classics-header__title-text--top')
			.addClass('animated fadeIn')
			.css({ animationDelay: '.75s' });
		$('.classics-header__title-text--middle')
			.addClass('animated fadeIn')
			.css({ animationDelay: '1s' });
		$('.classics-header__title-text--bottom-shoe')
			.addClass('animated fadeIn')
			.css({ animationDelay: '1.25s' });

		$('#classics-header__img--1')
			.attr(
				'src',
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-header-1?wid=946&fmt=png-alpha'
			)
			.addClass('animated zoomIn');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#classics-header__img--1').css({
				position: 'absolute',
				zIndex: '3',
				bottom: '-550px',
				left: '0',
				width: '25%',
				minWidth: '400px'
			});
		} else {
			$('#classics-header__img--1').css({
				position: 'absolute',
				top: 'auto',
				bottom: '-375px',
				zIndex: '5',
				right: '0',
				transform: 'scale(1.2)'
			});
		}

		$('#classics-header__img--2')
			.attr(
				'src',
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-header-2?wid=2814'
			)
			.addClass('animated fadeInRight');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#classics-header__img--2').css({
				position: 'absolute',
				zIndex: '2',
				bottom: '-500px',
				right: '0',
				width: '90%',
				minWidth: '1270px'
			});
		} else {
			$('#classics-header__img--2').css({
				display: 'none'
			});
		}

		$('.classics-header__title-text--bottom h1').css({
			display: 'none'
		});
		$('.classics-header__title-text--bottom-shoe h1').text('Era.');

		$('.classics-description').text(
			'The Vans Era was the first shoe designed for skateboarders by skateboarders. Introduced in 1976 and originally called the Style #95, the Era was made popular by the legendary Z-Boys and remains the shoe of choice for skaters, surfers, and creative people worldwide.'
		);

		// first image
		$('#img1 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-5?wid=1072&fmt=png-alpha'
		);
		$('#img1 .classics-body__block--title').text('Era');
		$('#img1 .classics-body__block--price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img1.classics-body__block').css({
				gridArea: '1 / 1 / span 2 / 3'
			});
			$('#img1 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '75%'
			});
		} else {
			$('#img1.classics-body__block').css({
				gridArea: '1 / 1 / 3 / 3'
			});
			$('#img1 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				marginTop: '10px'
			});
		}

		// second image
		$('#img2 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-1?wid=1072&fmt=png-alpha'
		);
		$('#img2 .classics-body__block--title').text('Era');
		$('#img2 .classics-body__block--price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img2.classics-body__block').css({
				gridArea: '3 / 3 / 4 / 4'
			});
			$('#img2 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translateY(-25%)'
			});
		} else {
			$('#img2.classics-body__block').css({
				gridArea: '3 / 1 / 4 / 2'
			});
			$('#img2 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px',
				transform: 'translateY(0)'
			});
		}

		// third image
		$('#img3 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-4?wid=1072&fmt=png-alpha'
		);
		$('#img3 .classics-body__block--title').text('Era');
		$('#img3 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img3.classics-body__block').css({
				gridArea: '3 / 4 / 4 / 5'
			});
			$('#img3 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translateY(-25%)'
			});
		} else {
			$('#img3.classics-body__block').css({
				gridArea: '3 / 2 / 4 / 3'
			});
			$('#img3 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px',
				transform: 'translateY(0)'
			});
		}

		// fourth image
		$('#img4 .classics-body__block--image-solo').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-5?wid=1504&fmt=png-alpha'
		);
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img4.classics-body__block').css({
				gridArea: '1 / 3 / 3 / 5'
			});
			$('#img4 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '85%'
			});
		} else {
			$('#img4.classics-body__block').css({
				gridArea: '4 / 1 / 6 / 3'
			});
			$('#img4 .classics-body__block--content').css({
				width: '100%',
				padding: '10px',
				transform: 'translateY(0)'
			});
		}

		// fifth image
		$('#img5 .classics-body__block--image-solo').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-6?wid=455&fmt=png-alpha'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img5.classics-body__block').css({
				gridArea: '3 / 1 / 4 / 3'
			});
			$('#img5 .classics-body__block--content').css({
				margin: '0 auto',
				width: '50%',
				transform: 'translateX(25%)'
			});
		} else {
			$('#img5.classics-body__block').css({
				gridArea: '8 / 1 / 10 / 3'
			});
			$('#img5 .classics-body__block--content').css({
				width: '100%',
				padding: '10px 50px',
				transform: 'translateY(0)'
			});
		}

		// sixth image
		$('#img6 .classics-body__block--image-cut').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-6?wid=561&fmt=png-alpha'
		);
		$('#img6 .classics-body__block--title').text('Era');
		$('#img6 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img6.classics-body__block').css({
				gridArea: '3 / 3 / 4 / 5'
			});
			$('#img6 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '60%',
				transform: 'translateY(55%)'
			});
		} else {
			$('#img6.classics-body__block').css({
				gridArea: '6 / 1 / 8 / 3'
			});
			$('#img6 .classics-body__block--content').css({
				width: '100%',
				padding: '10px',
				transform: 'translateY(0)'
			});
		}

		// seventh image
		$('#img7 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-7?wid=1072&fmt=png-alpha'
		);
		$('#img7 .classics-body__block--title').text('Era');
		$('#img7 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img7.classics-body__block').css({
				gridArea: '1 / 1 / 2 / 2'
			});
			$('#img7 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '75%',
				transform: 'translateX(30%)'
			});
		} else {
			$('#img7.classics-body__block').css({
				gridArea: '1 / 1 / 2 / 2'
			});
			$('#img7 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// eighth image
		$('#img8 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-8?wid=583&fmt=png-alpha'
		);
		$('#img8 .classics-body__block--title').text('Era');
		$('#img8 .classics-body__block--price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img8.classics-body__block').css({
				gridArea: '1 / 4 / 2 / 5'
			});
			$('#img8 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '75%',
				transform: 'translateX(-10%)'
			});
		} else {
			$('#img8.classics-body__block').css({
				gridArea: '1 / 2 / 2 / 3'
			});
			$('#img8 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// ninth image
		$('#img9 .classics-body__block--image-solo').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-1?wid=1576&fmt=png-alpha'
		);
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img9.classics-body__block').css({
				gridArea: '1 / 2 / 3 / 4'
			});
			$('#img9 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '90%',
				transform: 'translateX(10%)'
			});
		} else {
			$('#img9.classics-body__block').css({
				gridArea: '2 / 1 / 4 / 3'
			});
			$('#img9 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				margin: '20px 0'
			});
		}

		// tenth image
		$('#img10 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-7?wid=549&fmt=png-alpha'
		);
		$('#img10 .classics-body__block--title').text('');
		$('#img10 .classics-body__block--price').text('');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img10.classics-body__block').css({
				gridArea: '3 / 1 / 4 / 2'
			});
			$('#img10 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '130%',
				transform: 'translate(-5%, 45%)'
			});
		} else {
			$('#img10.classics-body__block').css({
				gridArea: '6 / 1 / 8 / 3'
			});
			$('#img10 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				marginBottom: '20px'
			});
		}

		// eleventh image
		$('#img11 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-3?wid=1072&fmt=png-alpha'
		);
		$('#img11 .classics-body__block--title').text('Era');
		$('#img11 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img11.classics-body__block').css({
				gridArea: '2 / 2 / 5 / 4'
			});
			$('#img11 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '80%',
				transform: 'translate(-5%, 15%)'
			});
		} else {
			$('#img11.classics-body__block').css({
				gridArea: '4 / 1 / 6 / 3'
			});
			$('#img11 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px'
			});
		}

		// twelfth image
		$('#img12 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-2?wid=1072&fmt=png-alpha'
		);
		$('#img12 .classics-body__block--title').text('Era');
		$('#img12 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img12.classics-body__block').css({
				gridArea: '3 / 4 / 4 / 5'
			});
			$('#img12 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(-40%, 15%)'
			});
		} else {
			$('#img12.classics-body__block').css({
				gridArea: '8 / 1 / 10 / 2'
			});
			$('#img12 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px'
			});
		}

		// thirteenth image
		$('#img13 .classics-body__block--image-cut').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-9?wid=548&fmt=png-alpha'
		);
		$('#img13 .classics-body__block--title').text('Era');
		$('#img13 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img13.classics-body__block').css({
				gridArea: '4 / 1 / 5 / 3'
			});
			$('#img13 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '65%',
				transform: 'translate(15%, 70%)'
			});
		} else {
			$('#img13.classics-body__block').css({
				gridArea: '12 / 1 / 14 / 3'
			});
			$('#img13 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 50px'
			});
			$('#img13 .classics-body__block--image-cut-bg').css({
				transform: 'scale(0.9) translate(-2%, 65%)'
			});
		}

		// fourteenth image
		$('#img14 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-10?wid=1072&fmt=png-alpha'
		);
		$('#img14 .classics-body__block--title').text('Era');
		$('#img14 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img14.classics-body__block').css({
				gridArea: '4 / 3 / 5 / 4'
			});
			$('#img14 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(-35%, 60%)'
			});
		} else {
			$('#img14.classics-body__block').css({
				gridArea: '8 / 2 / 10 / 3'
			});
			$('#img14 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px'
			});
		}

		// fifteenth image
		$('#img15 .classics-body__block--image-solo').attr(
			'src',
			'http://0bcaec7ece69371763f5-b1bcbcfde69c8ed350e6ba506c5f8d5c.r72.cf1.rackcdn.com/s19-core-classics-era-4.gif'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img15.classics-body__block').css({
				gridArea: '4 / 3 / 5 / 5'
			});
			$('#img15 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '65%',
				transform: 'translate(-5%, 5%)'
			});
		} else {
			$('#img15.classics-body__block').css({
				gridArea: '10 / 1 / 12 / 3'
			});
			$('#img15 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				marginBottom: '10px '
			});
		}

		$('.classics-subfooter__button').text('SHOP ALL ERAS');
	})
	.resolve();
