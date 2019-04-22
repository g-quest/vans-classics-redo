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

/* Generate Randomized Product Blocks */
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

/* Generate Cutout Product Blocks */
function generateCutout(productType: string, imageCount: number) {
	const cutoutTypes = [];
	const cutoutPrices = [];
	const cutoutImageUrls = [];
	const cutoutImageStyles = [];
	const cutoutBackgroundImageUrls = [];
	const cutoutBackgroundImageStyles = [];
	const cutoutGrids = [];
	const cutoutBlockStyles = [];
	const mobileCutoutImageStyles = [];
	const mobileCutoutBackgroundImageStyles = [];
	const mobileCutoutGrids = [];
	const mobileCutoutBlockStyles = [];

	for (i = 0; i < imageCount; i++) {
		const blockTitle = document.querySelector(
			`#${productType}-cutout${i} .classics-body__block-title`
		);
		const blockPrice = document.querySelector(
			`#${productType}-cutout${i} .classics-body__block-price`
		);
		const blockImage = document.querySelector(
			`#${productType}-cutout${i} .classics-body__block-cutout`
		) as HTMLElement;
		const blockBackgroundImage = document.querySelector(
			`#${productType}-cutout${i} .classics-body__block-background`
		) as HTMLElement;
		const blockGrid = document.querySelector(
			`#${productType}-cutout${i}.classics-body__block`
		) as HTMLElement;
		const blockStyle = document.querySelector(
			`#${productType}-cutout${i} .classics-body__block-content`
		) as HTMLElement;

		cutoutTypes.push(CutoutImages[`${productType}`][`${i}`].type);
		cutoutPrices.push(CutoutImages[`${productType}`][`${i}`].price);
		cutoutImageUrls.push(CutoutImages[`${productType}`][`${i}`].url);
		cutoutBackgroundImageUrls.push(
			CutoutImages[`${productType}`][`${i}`].backgroundImgUrl
		);
		cutoutImageStyles.push(
			CutoutImages[`${productType}`][`${i}`].desktop.imgStyle
		);

		mobileCutoutImageStyles.push(
			CutoutImages[`${productType}`][`${i}`].mobile.imgStyle
		);
		cutoutBackgroundImageStyles.push(
			CutoutImages[`${productType}`][`${i}`].desktop.backgroundStyle
		);
		mobileCutoutBackgroundImageStyles.push(
			CutoutImages[`${productType}`][`${i}`].mobile.backgroundStyle
		);
		cutoutGrids.push(CutoutImages[`${productType}`][`${i}`].desktop.gridArea);
		mobileCutoutGrids.push(
			CutoutImages[`${productType}`][`${i}`].mobile.gridArea
		);
		cutoutBlockStyles.push(
			CutoutImages[`${productType}`][`${i}`].desktop.style
		);
		mobileCutoutBlockStyles.push(
			CutoutImages[`${productType}`][`${i}`].mobile.style
		);

		blockTitle.textContent = cutoutTypes[i];
		blockPrice.textContent = cutoutPrices[i];
		blockImage.setAttribute('src', cutoutImageUrls[i]);
		blockBackgroundImage.setAttribute('src', cutoutBackgroundImageUrls[i]);

		if (window.matchMedia('(min-width: 760px)').matches) {
			blockGrid.style.gridArea = cutoutGrids[i];
			Object.assign(blockStyle.style, cutoutBlockStyles[i]);
			Object.assign(blockImage.style, cutoutImageStyles[i]);
			Object.assign(blockBackgroundImage.style, cutoutBackgroundImageStyles[i]);
		} else {
			blockGrid.style.gridArea = mobileCutoutGrids[i];
			Object.assign(blockStyle.style, mobileCutoutBlockStyles[i]);
			Object.assign(blockImage.style, mobileCutoutImageStyles[i]);
			Object.assign(
				blockBackgroundImage.style,
				mobileCutoutBackgroundImageStyles[i]
			);
		}
	}
}

/* Generate Lifestyle Images */
function generateLifestyle(productType: string, imageCount: number) {
	const lifestyleImages = [];
	const lifestyleGrids = [];
	const lifestyleStyles = [];
	const lifestyleEasings = [];
	const mobileLifestyleGrids = [];
	const mobileLifestyleStyles = [];

	for (i = 0; i < imageCount; i++) {
		const blockImage = document.querySelector(
			`#${productType}-lifestyle${i} .classics-body__block-lifestyle`
		);
		const blockGrid = document.querySelector(
			`#${productType}-lifestyle${i}.classics-body__block`
		) as HTMLElement;

		const blockStyle = document.querySelector(
			`#${productType}-lifestyle${i} .classics-body__block-content`
		) as HTMLElement;

		lifestyleImages.push(LifestyleImages[`${productType}`][`${i}`].url);
		lifestyleGrids.push(
			LifestyleImages[`${productType}`][`${i}`].desktop.gridArea
		);
		lifestyleStyles.push(
			LifestyleImages[`${productType}`][`${i}`].desktop.style
		);
		lifestyleEasings.push(
			LifestyleImages[`${productType}`][`${i}`].desktop.ease
		);
		mobileLifestyleGrids.push(
			LifestyleImages[`${productType}`][`${i}`].mobile.gridArea
		);
		mobileLifestyleStyles.push(
			LifestyleImages[`${productType}`][`${i}`].mobile.style
		);

		blockImage.setAttribute('src', lifestyleImages[i]);

		if (window.matchMedia('(min-width: 760px)').matches) {
			blockGrid.style.gridArea = lifestyleGrids[i];
			blockGrid.setAttribute('data-parallax', lifestyleEasings[i]);
			Object.assign(blockStyle.style, lifestyleStyles[i]);
		} else {
			blockGrid.style.gridArea = mobileLifestyleGrids[i];
			Object.assign(blockStyle.style, mobileLifestyleStyles[i]);
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

		/**** description ****/
		$('.classics-description')
			.text('') // none for main page
			.css({ marginTop: '50px' });

		/**** product images ****/
		generateProducts('all', 9);

		/**** cutout product images ****/
		generateCutout('all', 2);

		/**** lifestyle images ****/
		generateLifestyle('all', 4);

		/**** subfooter cta ****/
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

		/**** description ****/
		$('.classics-description').text(
			'The Vans Era was the first shoe designed for skateboarders by skateboarders. Introduced in 1976 and originally called the Style #95, the Era was made popular by the legendary Z-Boys and remains the shoe of choice for skaters, surfers, and creative people worldwide.'
		);

		/**** product images ****/
		generateProducts('era', 8);

		/**** cutout product images ****/
		generateCutout('era', 2);

		/**** lifestyle images ****/
		generateLifestyle('era', 5);

		/**** subfooter cta ****/
		$('.classics-subfooter__button').text('SHOP ALL ERAS');
	})
	.resolve();
