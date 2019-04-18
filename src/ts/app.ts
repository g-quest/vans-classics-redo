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
const desktopSubnav = document.getElementById('subnav');
const sticky = desktopSubnav.offsetTop;
const mobileSubnav = document.getElementById('subnav--mobile');
const mobileSticky = mobileSubnav.offsetTop;
function navbarStick(offset: number, subNav: HTMLElement) {
	if (window.pageYOffset >= offset) {
		subNav.classList.add('sticky');
	} else {
		subNav.classList.remove('sticky');
	}
}
if (window.matchMedia('(max-width: 760px)').matches) {
	window.onscroll = () => {
		navbarStick(425, mobileSubnav);
	};
} else {
	window.onscroll = () => {
		navbarStick(610, desktopSubnav);
	};
}

/* Initialize Parallax Scroll */
declare var ParallaxScroll: any;
ParallaxScroll.init();

/* Mobile fade in when element comes into view */
declare var WOW: any;
new WOW().init();

/**** Initialize Navigo router ****/
declare var Navigo: any;
const root = null;
const useHash = true;
const hash = '#';
const router = new Navigo(root, useHash, hash);

/*******************/
/**** Initialize Variables ****/
/*******************/

let headerImages = [];
let headerUrls = [];
let headerImagesStyles = [];
let headerImagesAnimations = [];

let productImages = [];
let productUrls = [];
let productTypes = [];
let productPrices = [];
let productGrids = [];
let productStyles = [];

let i: number;

for (i = 1; i < 4; i++) {
	headerImages.push(document.getElementById(`all-header__img--${i}`));
	headerUrls.push(HeaderImages.all[`img${i}`].url);
	headerImagesStyles.push(HeaderImages.all[`img${i}`].style);
	headerImagesAnimations.push(HeaderImages.all[`img${i}`].animation);
}

/***************************/
/**** All Classics Page ****/
/***************************/

router
	.on(() => {
		$('#all-header, #all-body').css('display', 'block');
		$('#era-header, #era-body').css('display', 'none');

		$('.all-link').css('color', '#c9192e');
		$('.era-link').css('color', 'white');

		/**** header text ****/
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
		$('.classics-header__title-text--bottom h1').css({
			display: 'block'
		});
		$('.classics-header__title-text--bottom-shoe h1').text('');

		$('.classics-description')
			.text('')
			.css({ marginTop: '50px' });

		/**** header images ****/
		if (window.matchMedia('(min-width: 760px)').matches) {
			for (i = 1; i < 4; i++) {
				headerImages.push(document.getElementById(`all-header__img--${i}`));
				headerUrls.push(HeaderImages.all[`img${i}`].url);
				headerImagesStyles.push(HeaderImages.all[`img${i}`].style);
				headerImagesAnimations.push(HeaderImages.all[`img${i}`].animation);
			}

			for (i = 0; i < headerImages.length; i++) {
				headerImages[i].setAttribute('src', headerUrls[i]);
				Object.assign(headerImages[i].style, headerImagesStyles[i]);
				headerImages[i].classList.add(headerImagesAnimations[i]);
			}
		} else {
			const mobileHeaderImage = document.getElementById(
				`all-header__img--mobile`
			);
			mobileHeaderImage.setAttribute('src', HeaderImages.all.mobileImg.url);
			Object.assign(mobileHeaderImage.style, HeaderImages.all.mobileImg.style);
			mobileHeaderImage.classList.add(HeaderImages.all.mobileImg.animation);
		}

		// if (window.matchMedia('(min-width: 760px)').matches) {
		// 	$('#all-header__img--1').css({
		// 		position: 'absolute',
		// 		zIndex: '1',
		// 		bottom: '-650px',
		// 		left: '-25px',
		// 		width: '30%',
		// 		minWidth: '400px'
		// 	});
		// } else {
		// 	$('#all-header__img--1').css({
		// 		position: 'absolute',
		// 		zIndex: '3',
		// 		bottom: '-350px',
		// 		left: '0',
		// 		width: '100%'
		// 	});
		// }

		// if (window.matchMedia('(min-width: 760px)').matches) {
		// 	$('#all-header__img--2')
		// .attr(
		// 	'src',
		// 	'https://images.vans.com/is/image/VansBrand/sp19-core-classics-all-header-2?wid=1824&fmt=png-alpha'
		// )
		// 		.addClass('animated zoomIn');
		// }

		// if (window.matchMedia('(min-width: 760px)').matches) {
		// $('#all-header__img--2').css({
		// 	position: 'absolute',
		// 	zIndex: '0',
		// 	top: '-60px',
		// 	left: '15%',
		// 	width: '65%',
		// 	minWidth: '966px'
		// });
		// } else {
		// 	$('#all-header__img--2').css({
		// 		display: 'none'
		// 	});
		// }

		// if (window.matchMedia('(min-width: 760px)').matches) {
		// 	$('#all-header__img--3')
		// .attr(
		// 	'src',
		// 	'https://images.vans.com/is/image/VansBrand/sp19-core-classics-all-header-3?wid=1030&fmt=png-alpha'
		// )
		// 		.addClass('animated fadeInRight');
		// }

		// if (window.matchMedia('(min-width: 760px)').matches) {
		// $('#all-header__img--3').css({
		// 	position: 'absolute',
		// 	zIndex: '1',
		// 	bottom: '-520px',
		// 	right: '0',
		// 	width: '25%',
		// 	minWidth: '400px'
		// });
		// } else {
		// 	$('#all-header__img--3').css({
		// 		display: 'none'
		// 	});
		// }

		// if (window.matchMedia('(min-width: 760px)').matches) {
		// 	for (i = 1; i < 12; i++) {
		// 		productImages.push(document.getElementById(`all-img${i}`));
		// 		productUrls.push(ProductAssets.all[`${i}`].url);
		// 		productTypes.push(ProductAssets.all[`${i}`].type);
		// 		productPrices.push(ProductAssets.all[`${i}`].price);
		// 		productGrids.push(ProductStyles.all[`img${i}`].style);
		// 		productStyles.push(ProductStyles.all[`img${i}`].animation);
		// 	}
		//
		// 	for (i = 0; i < headerImages.length; i++) {
		// 		headerImages[i].setAttribute('src', headerUrls[i]);
		// 		Object.assign(headerImages[i].style, headerImagesStyles[i]);
		// 		headerImages[i].classList.add(headerImagesAnimations[i]);
		// 	}
		// }

		// first image
		$('#all-img1 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/Vans/EYEBLK-HERO?wid=800'
		);
		$('#all-img1 .classics-body__block--title').text('Slip-On');
		$('#all-img1 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img1.classics-body__block').css({
				gridArea: '1 / 1 / 3 / 3'
			});
			$('#all-img1 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '75%',
				padding: '0'
			});
		} else {
			$('#all-img1.classics-body__block').css({
				gridArea: '1 / 1 / 3 / 3'
			});
			$('#all-img1 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px',
				marginTop: '0'
			});
		}

		// second image
		$('#all-img2 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-1?wid=1072&fmt=png-alpha'
		);
		$('#all-img2 .classics-body__block--title').text('Era');
		$('#all-img2 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img2.classics-body__block').css({
				gridArea: '1 / 3 / 2 / 4'
			});
			$('#all-img2 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(0)'
			});
		} else {
			$('#all-img2.classics-body__block')
				.css({
					gridArea: '3 / 1 / 4 / 2'
				})
				.addClass('wow fadeInUp');
			$('#all-img2 .classics-body__block--content').css({
				width: '100%',
				padding: '0 20px'
			});
		}

		// third image
		$('#all-img3 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-authentic-1?wid=400&fmt=png-alpha'
		);
		$('#all-img3 .classics-body__block--title').text('Authentic');
		$('#all-img3 .classics-body__block--price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img3.classics-body__block').css({
				gridArea: '1 / 4 / 2 / 5'
			});
			$('#all-img3 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(0)'
			});
		} else {
			$('#all-img3.classics-body__block')
				.css({
					gridArea: '3 / 2 / 4 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img3 .classics-body__block--content').css({
				width: '100%',
				padding: '0 20px'
			});
		}

		// fourth image
		$('#all-img4 .classics-body__block--image-solo').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-1?wid=1576&fmt=png-alpha'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img4.classics-body__block')
				.css({
					gridArea: '2 / 3 / 5 / 5'
				})
				.attr('data-parallax', '{"y": "50"}');
			$('#all-img4 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '88%'
			});
		} else {
			$('#all-img4.classics-body__block')
				.css({
					gridArea: '4 / 1 / 6 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img4 .classics-body__block--content').css({
				width: '100%',
				padding: '0 20px',
				marginBottom: '20px'
			});
		}

		// fifth image
		$('#all-img5 .classics-body__block--image-solo').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-2?wid=1586&fmt=png-alpha'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img5.classics-body__block')
				.css({
					gridArea: '4 / 1 / 6 / 3'
				})
				.attr('data-parallax', '{"y": "-50"}');
			$('#all-img5 .classics-body__block--content').css({
				margin: '0',
				width: '90%',
				transform: 'translate(-5%, -15%)'
			});
		} else {
			$('#all-img5.classics-body__block')
				.css({
					gridArea: '6 / 1 / 8 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img5 .classics-body__block--content').css({
				width: '100%',
				padding: '0 20px',
				marginBottom: '20px'
			});
		}

		// sixth image
		$('#all-img6 .classics-body__block--image-cut').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-sk8hi-1?wid=473&fmt=png-alpha'
		);
		$('#all-img6 .classics-body__block--title').text('Sk8-Hi');
		$('#all-img6 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img6.classics-body__block').css({
				gridArea: '5 / 3 / 6 / 5'
			});
			$('#all-img6 .classics-body__block--content').css({
				justifySelf: 'start',
				margin: '10% auto auto 15%',
				width: '50%',
				transform: 'translate(0)'
			});
			$('#all-img6 .classics-body__block--image-cut-bg').css({
				width: '80%',
				transform: 'scale(0.85) translate(-20%, 15%)'
			});
		} else {
			$('#all-img6.classics-body__block')
				.css({
					gridArea: '8 / 1 / 10 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img6 .classics-body__block--content').css({
				width: '100%',
				padding: '0 20px',
				margin: '0'
			});
			$('#all-img6 .classics-body__block--image-cut').css({
				transform: 'scale(.8) translate(0, 10%)'
			});
			$('#all-img6 .classics-body__block--image-cut-bg').css({
				transform: 'scale(0.5) translate(-45%, 5%)',
				zIndex: '0'
			});
		}

		// seventh image
		$('#all-img7 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-2?wid=1072&fmt=png-alpha'
		);
		$('#all-img7 .classics-body__block--title').text('Era');
		$('#all-img7 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img7.classics-body__block').css({
				gridArea: '1 / 2 / 2 / 3'
			});
			$('#all-img7 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(-45%, 0)'
			});
		} else {
			$('#all-img7.classics-body__block')
				.css({
					gridArea: '1 / 1 / 2 / 2'
				})
				.addClass('wow fadeInUp');
			$('#all-img7 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px'
			});
		}

		// eighth image
		$('#all-img8 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-oldskool-1?wid=400&fmt=png-alpha'
		);
		$('#all-img8 .classics-body__block--title').text('Old Skool');
		$('#all-img8 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img8.classics-body__block').css({
				gridArea: '1 / 3 / 2 / 4'
			});
			$('#all-img8 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(-45%, 0)'
			});
		} else {
			$('#all-img8.classics-body__block')
				.css({
					gridArea: '1 / 2 / 2 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img8 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px'
			});
		}

		// ninth image
		$('#all-img9 .classics-body__block--image-solo').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-3?wid=1010&fmt=png-alpha'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img9.classics-body__block')
				.css({
					gridArea: '1 / 3 / 3 / 5'
				})
				.attr('data-parallax', '{"y": "-75"}');
			$('#all-img9 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '60%',
				transform: 'translate(-5%, 0)'
			});
		} else {
			$('#all-img9.classics-body__block')
				.css({
					gridArea: '2 / 1 / 4 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img9 .classics-body__block--content').css({
				width: '100%',
				padding: '0 15px',
				margin: '0 0 35px 0'
			});
		}

		// tenth image
		$('#all-img10 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-authentic-2?wid=400&fmt=png-alpha'
		);
		$('#all-img10 .classics-body__block--title').text('Authentic');
		$('#all-img10 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img10.classics-body__block').css({
				gridArea: '2 / 1 / 4 / 2'
			});
			$('#all-img10 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '75%',
				transform: 'translate(0, 27%)'
			});
		} else {
			$('#all-img10.classics-body__block')
				.css({
					gridArea: '4 / 1 / 5 / 2'
				})
				.addClass('wow fadeInUp');
			$('#all-img10 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px',
				marginBottom: '0'
			});
		}

		// eleventh image
		$('#all-img11 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-3?wid=1072&fmt=png-alpha'
		);
		$('#all-img11 .classics-body__block--title').text('Era');
		$('#all-img11 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img11.classics-body__block').css({
				gridArea: '2 / 2 / 5 / 4'
			});
			$('#all-img11 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '85%',
				transform: 'translate(0, 3%)'
			});
		} else {
			$('#all-img11.classics-body__block')
				.css({
					gridArea: '4 / 2 / 5 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img11 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px'
			});
		}

		// twelfth image
		$('#all-img12 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-4?wid=1072&fmt=png-alpha'
		);
		$('#all-img12 .classics-body__block--title').text('Era');
		$('#all-img12 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img12.classics-body__block').css({
				gridArea: '3 / 4 / 4 / 5'
			});
			$('#all-img12 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(5%, 5%)'
			});
		} else {
			$('#all-img12.classics-body__block')
				.css({
					gridArea: '5 / 1 / 6 / 2'
				})
				.addClass('wow fadeInUp');
			$('#all-img12 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px'
			});
		}

		// thirteenth image
		$('#all-img13 .classics-body__block--image-cut').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-slipon-2?wid=374&fmt=png-alpha'
		);
		$('#all-img13 .classics-body__block--title').text('Slip-On');
		$('#all-img13 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img13.classics-body__block').css({
				gridArea: '4 / 1 / 5 / 2'
			});
			$('#all-img13 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '90%',
				transform: 'translate(25%, 40%)'
			});
			$('#all-img13 .classics-body__block--image-cut')
				.css({
					transform: 'scale(1.2) translate(0, .5%)',
					zIndex: '1'
				})
				.hover(
					() => {
						$('#all-img13 .classics-body__block--image-cut').css({
							transform: 'scale(1.4) translateY(-5%)'
						});
					},
					() => {
						$('#all-img13 .classics-body__block--image-cut').css({
							transform: 'scale(1.2) translateY(0.5%)'
						});
					}
				);
			$('#all-img13 .classics-body__block--image-cut-bg')
				.attr(
					'src',
					'https://images.vans.com/is/image/VansBrand/sp19-core-classics-paper-3?wid=764'
				)
				.css({
					transform: 'scale(0.8) translate(-5%, -40%)',
					zIndex: '0'
				});
		} else {
			$('#all-img13.classics-body__block')
				.css({
					gridArea: '8 / 1 / 10 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img13 .classics-body__block--content').css({
				justifySelf: 'center',
				width: '70%',
				padding: '0 10px'
			});
			$('#all-img13 .classics-body__block--image-cut').css({
				transform: 'scale(1.3) translate(0, -10%)',
				zIndex: '1'
			});
			$('#all-img13 .classics-body__block--image-cut-bg')
				.attr(
					'src',
					'https://images.vans.com/is/image/VansBrand/sp19-core-classics-paper-3?wid=764'
				)
				.css({
					transform: 'scale(0.5) translate(-45%, -90%)',
					zIndex: '0'
				});
		}

		// fourteenth image
		$('#all-img14 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-sk8hi-2?wid=356&fmt=png-alpha'
		);
		$('#all-img14 .classics-body__block--title').text('Sk8-Hi');
		$('#all-img14 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img14.classics-body__block').css({
				gridArea: '4 / 3 / 5 / 4'
			});
			$('#all-img14 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(-85%, 35%)'
			});
		} else {
			$('#all-img14.classics-body__block')
				.css({
					gridArea: '5 / 2 / 6 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img14 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px'
			});
		}

		// fifteenth image
		$('#all-img15 .classics-body__block--image-solo').attr(
			'src',
			'http://0bcaec7ece69371763f5-b1bcbcfde69c8ed350e6ba506c5f8d5c.r72.cf1.rackcdn.com/s19-core-classics-era-4.gif'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img15.classics-body__block')
				.css({
					gridArea: '4 / 3 / 5 / 5'
				})
				.attr('data-parallax', '{"y": "75"}');
			$('#all-img15 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '65%',
				transform: 'translate(-5%, 0)'
			});
		} else {
			$('#all-img15.classics-body__block')
				.css({
					gridArea: '6 / 1 / 8 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img15 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px',
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
		$('#era-body').css('display', 'block');
		$('#all-body').css('display', 'none');
		$('#era-header').css('display', 'block');
		$('#all-header').css('display', 'none');

		$('.all-link').css('color', 'white');
		$('.era-link').css('color', '#c9192e');

		/**** header text ****/
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
		$('.classics-header__title-text--bottom h1').css({
			display: 'none'
		});
		$('.classics-header__title-text--bottom-shoe h1').text('Era.');

		/**** header images ****/
		if (window.matchMedia('(min-width: 760px)').matches) {
			for (i = 1; i < 3; i++) {
				headerImages.push(document.getElementById(`era-header__img--${i}`));
				headerUrls.push(HeaderImages.era[`img${i}`].url);
				headerImagesStyles.push(HeaderImages.era[`img${i}`].style);
				headerImagesAnimations.push(HeaderImages.era[`img${i}`].animation);
			}

			for (i = 0; i < headerImages.length; i++) {
				headerImages[i].setAttribute('src', headerUrls[i]);
				Object.assign(headerImages[i].style, headerImagesStyles[i]);
				headerImages[i].classList.add(headerImagesAnimations[i]);
			}
		} else {
			const mobileHeaderImage = document.getElementById(
				`era-header__img--mobile`
			);
			mobileHeaderImage.setAttribute('src', HeaderImages.era.mobileImg.url);
			Object.assign(mobileHeaderImage.style, HeaderImages.era.mobileImg.style);
			mobileHeaderImage.classList.add(HeaderImages.era.mobileImg.animation);
		}

		// if (window.matchMedia('(min-width: 760px)').matches) {
		// 	$('#era-header__img--1')
		// 		.attr(
		// 			'src',
		// 			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-header-1?wid=946&fmt=png-alpha'
		// 		)
		// 		.addClass('animated zoomIn');
		// } else {
		// 	$('#era-header__img--1')
		// 		.attr(
		// 			'src',
		// 			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-header-mobile?wid=800'
		// 		)
		// 		.addClass('animated zoomIn');
		// }
		//
		// if (window.matchMedia('(min-width: 760px)').matches) {
		// 	$('#era-header__img--1').css({
		// 		position: 'absolute',
		// 		zIndex: '3',
		// 		bottom: '-550px',
		// 		left: '0',
		// 		width: '25%',
		// 		minWidth: '400px'
		// 	});
		// } else {
		// 	$('#era-header__img--1').css({
		// 		position: 'absolute',
		// 		zIndex: '3',
		// 		bottom: '-350px',
		// 		left: '0',
		// 		width: '100%'
		// 	});
		// }

		// if (window.matchMedia('(min-width: 760px)').matches) {
		// 	$('#era-header__img--2')
		// 		.attr(
		// 			'src',
		// 			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-header-2?wid=2814'
		// 		)
		// 		.addClass('animated fadeInRight');
		// }
		//
		// if (window.matchMedia('(min-width: 760px)').matches) {
		// 	$('#era-header__img--2').css({
		// 		position: 'absolute',
		// 		zIndex: '2',
		// 		bottom: '-500px',
		// 		right: '0',
		// 		width: '90%',
		// 		minWidth: '1270px'
		// 	});
		// } else {
		// 	$('#era-header__img--2').css({
		// 		display: 'none'
		// 	});
		// }

		$('.classics-description').text(
			'The Vans Era was the first shoe designed for skateboarders by skateboarders. Introduced in 1976 and originally called the Style #95, the Era was made popular by the legendary Z-Boys and remains the shoe of choice for skaters, surfers, and creative people worldwide.'
		);

		// first image
		$('#era-img1 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-5?wid=1072&fmt=png-alpha'
		);
		$('#era-img1 .classics-body__block--title').text('Era');
		$('#era-img1 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img1.classics-body__block').css({
				gridArea: '1 / 1 / span 2 / 3'
			});
			$('#era-img1 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '75%',
				padding: '0'
			});
		} else {
			$('#era-img1.classics-body__block').css({
				gridArea: '1 / 1 / 3 / 3'
			});
			$('#era-img1 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px',
				marginTop: '10px'
			});
		}

		// second image
		$('#era-img2 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-1?wid=1072&fmt=png-alpha'
		);
		$('#era-img2 .classics-body__block--title').text('Era');
		$('#era-img2 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img2.classics-body__block').css({
				gridArea: '3 / 3 / 4 / 4'
			});
			$('#era-img2 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(0, -25%)'
			});
		} else {
			$('#era-img2.classics-body__block')
				.css({
					gridArea: '3 / 1 / 4 / 2'
				})
				.addClass('wow fadeInUp');
			$('#era-img2 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px'
			});
		}

		// third image
		$('#era-img3 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-4?wid=1072&fmt=png-alpha'
		);
		$('#era-img3 .classics-body__block--title').text('Era');
		$('#era-img3 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img3.classics-body__block').css({
				gridArea: '3 / 4 / 4 / 5'
			});
			$('#era-img3 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(0, -25%)'
			});
		} else {
			$('#era-img3.classics-body__block')
				.css({
					gridArea: '3 / 2 / 4 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img3 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px'
			});
		}

		// fourth image
		$('#era-img4 .classics-body__block--image-solo').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-5?wid=1504&fmt=png-alpha'
		);
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img4.classics-body__block')
				.css({
					gridArea: '1 / 3 / 3 / 5'
				})
				.attr('data-parallax', '{"y": "50"}');
			$('#era-img4 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '85%'
			});
		} else {
			$('#era-img4.classics-body__block')
				.css({
					gridArea: '4 / 1 / 6 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img4 .classics-body__block--content').css({
				width: '100%',
				padding: '10px',
				marginBottom: '20px'
			});
		}

		// fifth image
		$('#era-img5 .classics-body__block--image-solo').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-6?wid=455&fmt=png-alpha'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img5.classics-body__block')
				.css({
					gridArea: '3 / 1 / 4 / 3'
				})
				.attr('data-parallax', '{"y": "-50"}');
			$('#era-img5 .classics-body__block--content').css({
				margin: '0 auto',
				width: '50%',
				transform: 'translate(25%, 0)'
			});
		} else {
			$('#era-img5.classics-body__block')
				.css({
					gridArea: '8 / 1 / 10 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img5 .classics-body__block--content').css({
				width: '100%',
				padding: '10px 50px',
				marginBottom: '20px'
			});
		}

		// sixth image
		$('#era-img6 .classics-body__block--image-cut').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-6?wid=561&fmt=png-alpha'
		);
		$('#era-img6 .classics-body__block--title').text('Era');
		$('#era-img6 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img6.classics-body__block').css({
				gridArea: '3 / 3 / 4 / 5'
			});
			$('#era-img6 .classics-body__block--content').css({
				justifySelf: 'start',
				margin: '10% auto auto 15%',
				width: '60%',
				transform: 'translate(0, 55%)'
			});
			$('#era-img6 .classics-body__block--image-cut-bg').css({
				width: '68%',
				transform: 'translate(20%, -10%)'
			});
		} else {
			$('#era-img6.classics-body__block')
				.css({
					gridArea: '6 / 1 / 8 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img6 .classics-body__block--content').css({
				width: '100%',
				padding: '10px',
				margin: '0'
			});

			$('#era-img6 .classics-body__block--image-cut').css({
				transform: 'scale(1) translate(0, 0)'
			});
			$('#era-img6 .classics-body__block--image-cut-bg').css({
				transform: 'scale(0.7) translate(-5%, -30%)',
				zIndex: '0'
			});
		}

		// seventh image
		$('#era-img7 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-7?wid=1072&fmt=png-alpha'
		);
		$('#era-img7 .classics-body__block--title').text('Era');
		$('#era-img7 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img7.classics-body__block').css({
				gridArea: '1 / 1 / 2 / 2'
			});
			$('#era-img7 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '75%',
				transform: 'translate(30%, 0)'
			});
		} else {
			$('#era-img7.classics-body__block')
				.css({
					gridArea: '1 / 1 / 2 / 2'
				})
				.addClass('wow fadeInUp');
			$('#era-img7 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px'
			});
		}

		// eighth image
		$('#era-img8 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-8?wid=583&fmt=png-alpha'
		);
		$('#era-img8 .classics-body__block--title').text('Era');
		$('#era-img8 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img8.classics-body__block').css({
				gridArea: '1 / 4 / 2 / 5'
			});
			$('#era-img8 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '75%',
				transform: 'translate(-10%, 0)'
			});
		} else {
			$('#era-img8.classics-body__block')
				.css({
					gridArea: '1 / 2 / 2 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img8 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px'
			});
		}

		// ninth image
		$('#era-img9 .classics-body__block--image-solo').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-1?wid=1576&fmt=png-alpha'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img9.classics-body__block')
				.css({
					gridArea: '1 / 2 / 3 / 4'
				})
				.attr('data-parallax', '{"y": "50"}');
			$('#era-img9 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '90%',
				transform: 'translate(10%, 0)'
			});
		} else {
			$('#era-img9.classics-body__block')
				.css({
					gridArea: '2 / 1 / 4 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img9 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px',
				margin: '20px 0'
			});
		}

		// tenth image
		$('#era-img10 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-7?wid=549&fmt=png-alpha'
		);
		$('#era-img10 .classics-body__block--title').text('');
		$('#era-img10 .classics-body__block--price').text('');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img10.classics-body__block')
				.css({
					gridArea: '3 / 1 / 4 / 2'
				})
				.attr('data-parallax', '{"y": "-50"}');
			$('#era-img10 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '130%',
				transform: 'translate(-5%, 45%)'
			});
			$('#era-img10 .classics-body__block--image').hover(
				() => {
					$('#era-img10 .classics-body__block--image').css({
						transform: 'scale(1) translateY(0)',
						cursor: 'default'
					});
				},
				() => {
					$('#era-img10 .classics-body__block--image').css({
						transform: 'scale(1) translate(0)',
						cursor: 'default'
					});
				}
			);
		} else {
			$('#era-img10.classics-body__block')
				.css({
					gridArea: '6 / 1 / 8 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img10 .classics-body__block--content').css({
				width: '100%',
				padding: '0 5px',
				marginBottom: '20px'
			});
		}

		// eleventh image
		$('#era-img11 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-3?wid=1072&fmt=png-alpha'
		);
		$('#era-img11 .classics-body__block--title').text('Era');
		$('#era-img11 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img11.classics-body__block').css({
				gridArea: '2 / 2 / 5 / 4'
			});
			$('#era-img11 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '80%',
				transform: 'translate(-5%, 15%)'
			});
		} else {
			$('#era-img11.classics-body__block')
				.css({
					gridArea: '4 / 1 / 6 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img11 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px'
			});
		}

		// twelfth image
		$('#era-img12 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-2?wid=1072&fmt=png-alpha'
		);
		$('#era-img12 .classics-body__block--title').text('Era');
		$('#era-img12 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img12.classics-body__block').css({
				gridArea: '3 / 4 / 4 / 5'
			});
			$('#era-img12 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(-40%, 15%)'
			});
		} else {
			$('#era-img12.classics-body__block')
				.css({
					gridArea: '8 / 1 / 10 / 2'
				})
				.addClass('wow fadeInUp');
			$('#era-img12 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px'
			});
		}

		// thirteenth image
		$('#era-img13 .classics-body__block--image-cut').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-9?wid=548&fmt=png-alpha'
		);
		$('#era-img13 .classics-body__block--title').text('Era');
		$('#era-img13 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img13.classics-body__block').css({
				gridArea: '4 / 1 / 5 / 3'
			});
			$('#era-img13 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '65%',
				transform: 'translate(15%, 70%)'
			});
			$('#era-img13 .classics-body__block--image-cut-bg')
				.attr(
					'src',
					'https://images.vans.com/is/image/VansBrand/sp19-core-classics-header-paper-2?wid=720'
				)
				.css({
					transform: 'scale(0.35) translate(-105%, -115%)'
				});
		} else {
			$('#era-img13.classics-body__block')
				.css({
					gridArea: '12 / 1 / 14 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img13 .classics-body__block--content').css({
				justifySelf: 'center',
				width: '100%',
				padding: '0 50px'
			});
			$('#era-img13 .classics-body__block--image-cut').css({
				transform: 'scale(1.1) translate(0)',
				zIndex: '1'
			});
			$('#era-img13 .classics-body__block--image-cut-bg')
				.attr(
					'src',
					'https://images.vans.com/is/image/VansBrand/sp19-core-classics-header-paper-2?wid=720'
				)
				.css({
					transform: 'scale(0.3) translate(-140%, -130%)',
					zIndex: '0'
				});
		}

		// fourteenth image
		$('#era-img14 .classics-body__block--image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-10?wid=1072&fmt=png-alpha'
		);
		$('#era-img14 .classics-body__block--title').text('Era');
		$('#era-img14 .classics-body__block--price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img14.classics-body__block').css({
				gridArea: '4 / 3 / 5 / 4'
			});
			$('#era-img14 .classics-body__block--content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(-35%, 60%)'
			});
		} else {
			$('#era-img14.classics-body__block')
				.css({
					gridArea: '8 / 2 / 10 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img14 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px'
			});
		}

		// fifteenth image
		$('#era-img15 .classics-body__block--image-solo').attr(
			'src',
			'http://0bcaec7ece69371763f5-b1bcbcfde69c8ed350e6ba506c5f8d5c.r72.cf1.rackcdn.com/s19-core-classics-era-4.gif'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img15.classics-body__block')
				.css({
					gridArea: '4 / 3 / 5 / 5'
				})
				.attr('data-parallax', '{"y": "75"}');
			$('#era-img15 .classics-body__block--content').css({
				justifySelf: 'end',
				width: '65%',
				transform: 'translate(-5%, 5%)'
			});
		} else {
			$('#era-img15.classics-body__block')
				.css({
					gridArea: '10 / 1 / 12 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img15 .classics-body__block--content').css({
				width: '100%',
				padding: '0 10px',
				marginBottom: '10px '
			});
		}

		$('.classics-subfooter__button').text('SHOP ALL ERAS');
	})
	.resolve();
