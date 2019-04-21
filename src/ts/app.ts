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
	document.querySelector('.classics-header__text-bottom--auto h1').textContent =
		text[textIndex - 1];
}

/* Start automatic text change for 'ALL' page on load */
const si = setInterval(changeText, 1000);

/* Mobile subnav */
$('.classics-subnav--mobile').click(() => {
	$('.classics-subnav--mobile__pane').slideToggle(250);
});

/* Sticky subnav */
const desktopSubnav = document.getElementById('subnav--desktop');
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

/* Shuffle Product Array */
function shuffleProducts(productArray) {
	let index: number = productArray.length;
	let temp: number;
	let newIndex: number;

	// While there are remaining elements
	while (0 !== index) {
		// Pick a random element
		newIndex = Math.floor(Math.random() * index);
		index -= 1;

		// Swap the random element with a current
		temp = productArray[index];
		productArray[index] = productArray[newIndex];
		productArray[newIndex] = temp;
	}
	return productArray;
}

/* Generate randomized product images */
function generateProducts(productType: string, imageCount: number) {
	const shuffledArray = shuffleProducts(
		ProductAssets[`${productType}`].slice()
	).slice(0, imageCount);
	const productImages = [];
	const productUrls = [];
	const productTypes = [];
	const productPrices = [];
	const productGrids = [];
	const productStyles = [];
	const mobileProductGrids = [];
	const mobileProductStyles = [];

	for (i = 0; i < imageCount; i++) {
		const vn = shuffledArray[i].vn;
		const alt = shuffledArray[i].alt;
		const blockImage = document.querySelector(
			`#${productType}-product${i} .classics-body__block-image`
		);
		const blockTitle = document.querySelector(
			`#${productType}-product${i} .classics-body__block-title`
		);
		const blockPrice = document.querySelector(
			`#${productType}-product${i} .classics-body__block-price`
		);
		const blockLink = document.querySelector(`#${productType}-product${i} a`);

		const blockGrid = document.querySelector(
			`#${productType}-product${i}.classics-body__block`
		) as HTMLElement;

		const blockStyle = document.querySelector(
			`#${productType}-product${i} .classics-body__block-content`
		) as HTMLElement;

		productUrls.push(shuffledArray[i].url);
		productTypes.push(shuffledArray[i].type);
		productPrices.push(shuffledArray[i].price);
		productImages.push(
			'//s7d2.scene7.com/is/image/Vans/' +
				vn +
				'-' +
				alt +
				'?wid=600&fmt=png-alpha'
		);
		productGrids.push(ProductStyles[`${productType}`][`${i}`].desktop.gridArea);
		productStyles.push(ProductStyles[`${productType}`][`${i}`].desktop.style);
		mobileProductGrids.push(
			ProductStyles[`${productType}`][`${i}`].mobile.gridArea
		);
		mobileProductStyles.push(
			ProductStyles[`${productType}`][`${i}`].mobile.style
		);

		blockImage.setAttribute('src', productImages[i]);
		blockTitle.setAttribute('href', productUrls[i]);
		blockTitle.textContent = productTypes[i];
		blockPrice.textContent = productPrices[i];
		blockLink.setAttribute('href', productUrls[i]);

		if (window.matchMedia('(min-width: 760px)').matches) {
			blockGrid.style.gridArea = productGrids[i];
			Object.assign(blockStyle.style, productStyles[i]);
		} else {
			blockGrid.style.gridArea = mobileProductGrids[i];
			Object.assign(blockStyle.style, mobileProductStyles[i]);
		}
	}
}

/* Initialize Variables */
let headerImages = [];
let headerUrls = [];
let headerImagesStyles = [];
let headerImagesAnimations = [];

let i: number;

/* Initialize Navigo router */
declare var Navigo: any;
const root = null;
const useHash = true;
const hash = '#';
const router = new Navigo(root, useHash, hash);

/***************************/
/**** All Classics Page ****/
/***************************/

router
	.on(() => {
		$('#all-header, #all-body').css('display', 'block');
		$('#era-header, #era-body').css('display', 'none');

		$('.all-link').css('color', '#c9192e');
		$('.era-link').css('color', 'white');

		/**** header section ****/
		$('.classics-header__text-bg1').addClass('animated slideInDown');
		$('.classics-header__text-bg2').addClass('animated slideInUp');
		$('.classics-header__text-top')
			.addClass('animated fadeIn')
			.css({ animationDelay: '.75s' });
		$('.classics-header__text-middle')
			.addClass('animated fadeIn')
			.css({ animationDelay: '1s' });
		$('.classics-header__text-bottom--auto')
			.addClass('animated fadeIn')
			.css({ animationDelay: '1.25s' });
		$('.classics-header__text-bottom--auto h1')
			.css({
				display: 'block'
			})
			.text('Era.');
		$('.classics-header__text-bottom--static h1').text('');

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
				'all-header__img--mobile'
			);
			mobileHeaderImage.setAttribute('src', HeaderImages.all.mobileImg.url);
			Object.assign(mobileHeaderImage.style, HeaderImages.all.mobileImg.style);
			mobileHeaderImage.classList.add(HeaderImages.all.mobileImg.animation);
		}

		/**** description section ****/
		$('.classics-description')
			.text('') // none for main page
			.css({ marginTop: '50px' });

		/**** product images ****/
		generateProducts('all', 9);

		// fourth image
		$('#all-img4 .classics-body__block-lifestyle').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-1?wid=1576&fmt=png-alpha'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img4.classics-body__block')
				.css({
					gridArea: '2 / 3 / 5 / 5'
				})
				.attr('data-parallax', '{"y": "50"}');
			$('#all-img4 .classics-body__block-content').css({
				justifySelf: 'start',
				width: '88%'
			});
		} else {
			$('#all-img4.classics-body__block')
				.css({
					gridArea: '4 / 1 / 6 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img4 .classics-body__block-content').css({
				width: '100%',
				padding: '0 20px',
				marginBottom: '20px'
			});
		}

		// fifth image
		$('#all-img5 .classics-body__block-lifestyle').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-2?wid=1586&fmt=png-alpha'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img5.classics-body__block')
				.css({
					gridArea: '4 / 1 / 6 / 3'
				})
				.attr('data-parallax', '{"y": "-50"}');
			$('#all-img5 .classics-body__block-content').css({
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
			$('#all-img5 .classics-body__block-content').css({
				width: '100%',
				padding: '0 20px',
				marginBottom: '20px'
			});
		}

		// sixth image
		$('#all-img6 .classics-body__block-background').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-paper-3?wid=764'
		);
		$('#all-img6 .classics-body__block-silhouette').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-sk8hi-1?wid=473&fmt=png-alpha'
		);
		$('#all-img6 .classics-body__block-title').text('Sk8-Hi');
		$('#all-img6 .classics-body__block-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img6.classics-body__block').css({
				gridArea: '5 / 3 / 6 / 5'
			});
			$('#all-img6 .classics-body__block-content').css({
				justifySelf: 'start',
				margin: '10% auto auto 15%',
				width: '50%',
				transform: 'translate(0)'
			});
			$('#all-img6 .classics-body__block-background').css({
				width: '80%',
				transform: 'scale(0.85) translate(-20%, 15%)'
			});
		} else {
			$('#all-img6.classics-body__block')
				.css({
					gridArea: '8 / 1 / 10 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img6 .classics-body__block-content').css({
				width: '100%',
				padding: '0 20px',
				margin: '0',
				transform: 'translate(0, -10%)'
			});
			$('#all-img6 .classics-body__block-silhouette').css({
				transform: 'scale(.8) translate(0, 10%)'
			});
			$('#all-img6 .classics-body__block-background').css({
				transform: 'scale(0.5) translate(-45%, 5%)',
				zIndex: '0'
			});
		}

		// ninth image
		$('#all-img9 .classics-body__block-lifestyle').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-3?wid=1010&fmt=png-alpha'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img9.classics-body__block')
				.css({
					gridArea: '6 / 3 / 9 / 5'
				})
				.attr('data-parallax', '{"y": "50"}');
			$('#all-img9 .classics-body__block-content').css({
				justifySelf: 'end',
				width: '60%',
				transform: 'translate(-5%, 0)'
			});
		} else {
			$('#all-img9.classics-body__block')
				.css({
					gridArea: '12 / 1 / 14 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img9 .classics-body__block-content').css({
				width: '100%',
				padding: '0 15px',
				margin: '0 0 35px 0'
			});
		}

		// thirteenth image
		$('#all-img13 .classics-body__block-background').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-paper-3?wid=764'
		);
		$('#all-img13 .classics-body__block-silhouette').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-slipon-2?wid=374&fmt=png-alpha'
		);
		$('#all-img13 .classics-body__block-title').text('Slip-On');
		$('#all-img13 .classics-body__block-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img13.classics-body__block').css({
				gridArea: '11 / 1 / 12 / 2'
			});
			$('#all-img13 .classics-body__block-content').css({
				justifySelf: 'end',
				width: '90%',
				transform: 'translate(25%, 40%)'
			});
			$('#all-img13 .classics-body__block-silhouette')
				.css({
					transform: 'scale(1.2) translate(0, .5%)',
					zIndex: '1'
				})
				.hover(
					() => {
						$('#all-img13 .classics-body__block-silhouette').css({
							transform: 'scale(1.4) translateY(-5%)'
						});
					},
					() => {
						$('#all-img13 .classics-body__block-silhouette').css({
							transform: 'scale(1.2) translateY(0.5%)'
						});
					}
				);
			$('#all-img13 .classics-body__block-background').css({
				transform: 'scale(0.8) translate(-5%, -40%)',
				zIndex: '0'
			});
		} else {
			$('#all-img13.classics-body__block')
				.css({
					gridArea: '18 / 1 / 20 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img13 .classics-body__block-content').css({
				justifySelf: 'center',
				width: '70%',
				padding: '0 10px'
			});
			$('#all-img13 .classics-body__block-silhouette').css({
				transform: 'scale(1.3) translate(0, -10%)',
				zIndex: '1'
			});
			$('#all-img13 .classics-body__block-background').css({
				transform: 'scale(0.5) translate(-45%, -90%)',
				zIndex: '0'
			});
		}

		// fifteenth image
		$('#all-img15 .classics-body__block-lifestyle').attr(
			'src',
			'http://0bcaec7ece69371763f5-b1bcbcfde69c8ed350e6ba506c5f8d5c.r72.cf1.rackcdn.com/s19-core-classics-era-4.gif'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#all-img15.classics-body__block')
				.css({
					gridArea: '11 / 3 / 13 / 5'
				})
				.attr('data-parallax', '{"y": "-50"}');
			$('#all-img15 .classics-body__block-content').css({
				justifySelf: 'end',
				width: '65%',
				transform: 'translate(-5%, 0)'
			});
		} else {
			$('#all-img15.classics-body__block')
				.css({
					gridArea: '16 / 1 / 18 / 3'
				})
				.addClass('wow fadeInUp');
			$('#all-img15 .classics-body__block-content').css({
				width: '100%',
				padding: '0 10px',
				marginBottom: '25px'
			});
		}

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

		/**** header section ****/
		$('.classics-header__text-bg1').addClass('animated slideInDown');
		$('.classics-header__text-bg2').addClass('animated slideInUp');
		$('.classics-header__text-top')
			.addClass('animated fadeIn')
			.css({ animationDelay: '.75s' });
		$('.classics-header__text-middle')
			.addClass('animated fadeIn')
			.css({ animationDelay: '1s' });
		$('.classics-header__text-bottom--static')
			.addClass('animated fadeIn')
			.css({ animationDelay: '1.25s' });
		$('.classics-header__text-bottom--auto h1').css({
			display: 'none'
		});
		$('.classics-header__text-bottom--static h1').text('Era.');

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

		/**** description section ****/
		$('.classics-description').text(
			'The Vans Era was the first shoe designed for skateboarders by skateboarders. Introduced in 1976 and originally called the Style #95, the Era was made popular by the legendary Z-Boys and remains the shoe of choice for skaters, surfers, and creative people worldwide.'
		);

		/**** product images ****/
		generateProducts('era', 8);

		// fourth image
		$('#era-img4 .classics-body__block-lifestyle').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-5?wid=1504&fmt=png-alpha'
		);
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img4.classics-body__block')
				.css({
					gridArea: '1 / 3 / 3 / 5'
				})
				.attr('data-parallax', '{"y": "50"}');
			$('#era-img4 .classics-body__block-content').css({
				justifySelf: 'end',
				width: '85%'
			});
		} else {
			$('#era-img4.classics-body__block')
				.css({
					gridArea: '4 / 1 / 6 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img4 .classics-body__block-content').css({
				width: '100%',
				padding: '10px',
				marginBottom: '20px'
			});
		}

		// fifth image
		$('#era-img5 .classics-body__block-lifestyle').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-6?wid=455&fmt=png-alpha'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img5.classics-body__block')
				.css({
					gridArea: '3 / 1 / 4 / 3'
				})
				.attr('data-parallax', '{"y": "-50"}');
			$('#era-img5 .classics-body__block-content').css({
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
			$('#era-img5 .classics-body__block-content').css({
				width: '100%',
				padding: '10px 50px',
				marginBottom: '20px'
			});
		}

		// sixth image
		$('#era-img6 .classics-body__block-background').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-paper-3?wid=764'
		);
		$('#era-img6 .classics-body__block-silhouette').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-6?wid=561&fmt=png-alpha'
		);
		$('#era-img6 .classics-body__block-title').text('Era');
		$('#era-img6 .classics-body__block-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img6.classics-body__block').css({
				gridArea: '3 / 3 / 4 / 5'
			});
			$('#era-img6 .classics-body__block-content').css({
				justifySelf: 'start',
				margin: '10% auto auto 15%',
				width: '60%',
				transform: 'translate(0, 65%)'
			});
			$('#era-img6 .classics-body__block-background').css({
				width: '68%',
				transform: 'translate(20%, -10%)'
			});
		} else {
			$('#era-img6.classics-body__block')
				.css({
					gridArea: '6 / 1 / 8 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img6 .classics-body__block-content').css({
				width: '100%',
				padding: '10px',
				margin: '0'
			});

			$('#era-img6 .classics-body__block-silhouette').css({
				transform: 'scale(1) translate(0, 0)'
			});
			$('#era-img6 .classics-body__block-background').css({
				transform: 'scale(0.7) translate(-5%, -30%)',
				zIndex: '0'
			});
		}

		// ninth image
		$('#era-img9 .classics-body__block-lifestyle').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-1?wid=1576&fmt=png-alpha'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img9.classics-body__block')
				.css({
					gridArea: '4 / 2 / 6 / 4'
				})
				.attr('data-parallax', '{"y": "50"}');
			$('#era-img9 .classics-body__block-content').css({
				justifySelf: 'start',
				width: '90%',
				transform: 'translate(10%, 0)'
			});
		} else {
			$('#era-img9.classics-body__block')
				.css({
					gridArea: '11 / 1 / 13 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img9 .classics-body__block-content').css({
				width: '100%',
				padding: '0 10px',
				margin: '20px 0'
			});
		}

		// tenth image
		$('#era-img10 .classics-body__block-lifestyle').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-7?wid=549&fmt=png-alpha'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img10.classics-body__block')
				.css({
					gridArea: '6 / 1 / 7 / 2'
				})
				.attr('data-parallax', '{"y": "-50"}');
			$('#era-img10 .classics-body__block-content').css({
				justifySelf: 'end',
				width: '130%',
				transform: 'translate(-5%, 45%)'
			});
		} else {
			$('#era-img10.classics-body__block')
				.css({
					gridArea: '12 / 1 / 13 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img10 .classics-body__block-content').css({
				width: '100%',
				padding: '0 5px',
				marginBottom: '20px'
			});
		}

		// thirteenth image
		$('#era-img13 .classics-body__block-background').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-header-paper-2?wid=720'
		);
		$('#era-img13 .classics-body__block-silhouette').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-9?wid=548&fmt=png-alpha'
		);
		$('#era-img13 .classics-body__block-title').text('Era');
		$('#era-img13 .classics-body__block-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img13.classics-body__block').css({
				gridArea: '8 / 1 / 9 / 3'
			});
			$('#era-img13 .classics-body__block-content').css({
				justifySelf: 'start',
				width: '65%',
				transform: 'translate(15%, 35%)'
			});
			$('#era-img13 .classics-body__block-background').css({
				transform: 'scale(0.35) translate(-105%, -115%)'
			});
		} else {
			$('#era-img13.classics-body__block')
				.css({
					gridArea: '18 / 1 / 19 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img13 .classics-body__block-content').css({
				justifySelf: 'center',
				width: '100%',
				padding: '0 50px'
			});
			$('#era-img13 .classics-body__block-silhouette').css({
				transform: 'scale(1.1) translate(0)',
				zIndex: '1'
			});
			$('#era-img13 .classics-body__block-background').css({
				transform: 'scale(0.3) translate(-140%, -130%)',
				zIndex: '0'
			});
		}

		// fifteenth image
		$('#era-img15 .classics-body__block-lifestyle').attr(
			'src',
			'http://0bcaec7ece69371763f5-b1bcbcfde69c8ed350e6ba506c5f8d5c.r72.cf1.rackcdn.com/s19-core-classics-era-4.gif'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#era-img15.classics-body__block')
				.css({
					gridArea: '8 / 3 / 10 / 5'
				})
				.attr('data-parallax', '{"y": "-50"}');
			$('#era-img15 .classics-body__block-content').css({
				justifySelf: 'end',
				width: '65%',
				transform: 'translate(-5%, 5%)'
			});
		} else {
			$('#era-img15.classics-body__block')
				.css({
					gridArea: '16 / 1 / 18 / 3'
				})
				.addClass('wow fadeInUp');
			$('#era-img15 .classics-body__block-content').css({
				width: '100%',
				padding: '0 10px',
				marginBottom: '10px'
			});
		}

		$('.classics-subfooter__button').text('SHOP ALL ERAS');
	})
	.resolve();
