/*******************/
/**** Functions ****/
/*******************/

/* Initialize Parallax Scroll */
declare var ParallaxScroll: any;
ParallaxScroll.init();

/* Initialize WOW.js */
declare var WOW: any;
new WOW().init();

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
		'#all-header .classics-header__text .classics-header__text-bottom h1'
	).textContent = text[textIndex - 1];
}
setInterval(changeText, 1000);

/* Mobile subnav */
$('.classics-subnav--mobile').click(() => {
	$('.classics-subnav--mobile__pane').slideToggle(250);
});
$('.era-link, .all-link').click(() => {
	if (window.matchMedia('(max-width: 760px)').matches) {
		$('.classics-subnav--mobile__pane').slideToggle(250);
	}
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

/* Ensure page loads from the top on route click */
$('.era-link').click(() => {
	// TweenMax.to($('html, body'), 1, { scrollTop: 0 });
	window.scrollTo(0, 0);
});

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

/* Generate Header */
function generateHeader(productType: string) {
	const imageCount = HeaderAssets[`${productType}`].desktop.length;
	const mobileHeaderImageUrl = HeaderAssets[`${productType}`].mobile.url;
	const mobileHeaderImageStyle = HeaderAssets[`${productType}`].mobile.style;
	const mobileHeaderImageAnimation =
		HeaderAssets[`${productType}`].mobile.animation;
	const headerImageUrls = [];
	const headerImageStyles = [];
	const headerImageAnimations = [];

	const textBackground1 = document.querySelector(
		`#${productType}-header .classics-header__text-bg1`
	);
	const textBackground2 = document.querySelector(
		`#${productType}-header .classics-header__text-bg2`
	);
	const textTop = document.querySelector(
		`#${productType}-header .classics-header__text-top`
	) as HTMLElement;
	const textMiddle = document.querySelector(
		`#${productType}-header .classics-header__text-middle`
	) as HTMLElement;
	const textBottom = document.querySelector(
		`#${productType}-header .classics-header__text-bottom`
	) as HTMLElement;
	const textBottomShoe = document.querySelector(
		`#${productType}-header .classics-header__text-bottom h1`
	);

	textBackground1.classList.add(
		HeaderAssets[`${productType}`].text.backgroundImg1.animation
	);
	textBackground2.classList.add(
		HeaderAssets[`${productType}`].text.backgroundImg2.animation
	);
	textTop.classList.add(HeaderAssets[`${productType}`].text.textTop.animation);
	textTop.style.animationDelay =
		HeaderAssets[`${productType}`].text.textTop.animationDelay;
	textMiddle.classList.add(
		HeaderAssets[`${productType}`].text.textMiddle.animation
	);
	textMiddle.style.animationDelay =
		HeaderAssets[`${productType}`].text.textMiddle.animationDelay;
	textBottom.classList.add(
		HeaderAssets[`${productType}`].text.textBottom.animation
	);
	textBottom.style.animationDelay =
		HeaderAssets[`${productType}`].text.textBottom.animationDelay;
	textBottomShoe.textContent =
		HeaderAssets[`${productType}`].text.textBottomShoe.text;

	for (let i = 0; i < imageCount; i++) {
		headerImageUrls.push(HeaderAssets[`${productType}`].desktop[`${i}`].url);
		headerImageStyles.push(
			HeaderAssets[`${productType}`].desktop[`${i}`].style
		);
		headerImageAnimations.push(
			HeaderAssets[`${productType}`].desktop[`${i}`].animation
		);
		const headerDesktopImages = document.querySelector(
			`#${productType}-header__img--${i}`
		) as HTMLElement;
		const headerMobileImage = document.querySelector(
			`#${productType}-header__img--mobile`
		) as HTMLElement;

		if (window.matchMedia('(min-width: 760px)').matches) {
			headerDesktopImages.setAttribute('src', headerImageUrls[i]);
			Object.assign(headerDesktopImages.style, headerImageStyles[i]);
			headerDesktopImages.classList.add(headerImageAnimations[i]);
		} else {
			headerMobileImage.setAttribute('src', mobileHeaderImageUrl);
			Object.assign(headerMobileImage.style, mobileHeaderImageStyle);
			headerMobileImage.classList.add(mobileHeaderImageAnimation);
		}
	}
}

/* Generate Description */
function generateDescription(productType: string) {
	const description = document.querySelector(`.classics-description`);
	const descriptionText = MiscAssets[`${productType}`].description.text;
	description.textContent = descriptionText;
}

/* Generate Randomized Product Blocks */
function generateProducts(productType: string) {
	const imageCount = ProductStyles[`${productType}`].length;
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

	for (let i = 0; i < imageCount; i++) {
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
			blockGrid.classList.add('fadeInUp');
			Object.assign(blockStyle.style, mobileProductStyles[i]);
		}
	}
}

/* Generate Cutout Product Blocks */
function generateCutout(productType: string) {
	const imageCount = CutoutStyles[`${productType}`].length;
	const shuffledArray = shuffleProducts(
		CutoutAssets[`${productType}`].slice()
	).slice(0, imageCount);
	const cutoutUrl = [];
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

	for (let i = 0; i < imageCount; i++) {
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
		const blockImageLink = document.querySelector(
			`#${productType}-cutout${i} .classics-body__block-content a`
		) as HTMLElement;

		cutoutUrl.push(shuffledArray[i].url);
		cutoutTypes.push(shuffledArray[i].type);
		cutoutPrices.push(shuffledArray[i].price);
		cutoutImageUrls.push(shuffledArray[i].imgUrl);

		cutoutBackgroundImageUrls.push(
			CutoutStyles[`${productType}`][`${i}`].backgroundImgUrl
		);
		cutoutImageStyles.push(
			CutoutStyles[`${productType}`][`${i}`].desktop.imgStyle
		);

		mobileCutoutImageStyles.push(
			CutoutStyles[`${productType}`][`${i}`].mobile.imgStyle
		);
		cutoutBackgroundImageStyles.push(
			CutoutStyles[`${productType}`][`${i}`].desktop.backgroundStyle
		);
		mobileCutoutBackgroundImageStyles.push(
			CutoutStyles[`${productType}`][`${i}`].mobile.backgroundStyle
		);
		cutoutGrids.push(CutoutStyles[`${productType}`][`${i}`].desktop.gridArea);
		mobileCutoutGrids.push(
			CutoutStyles[`${productType}`][`${i}`].mobile.gridArea
		);
		cutoutBlockStyles.push(
			CutoutStyles[`${productType}`][`${i}`].desktop.style
		);
		mobileCutoutBlockStyles.push(
			CutoutStyles[`${productType}`][`${i}`].mobile.style
		);

		blockTitle.textContent = cutoutTypes[i];
		blockTitle.setAttribute('href', cutoutUrl[i]);
		blockPrice.textContent = cutoutPrices[i];
		blockImage.setAttribute('src', cutoutImageUrls[i]);
		blockImageLink.setAttribute('href', cutoutUrl[i]);
		blockBackgroundImage.setAttribute('src', cutoutBackgroundImageUrls[i]);

		if (window.matchMedia('(min-width: 760px)').matches) {
			blockGrid.style.gridArea = cutoutGrids[i];
			Object.assign(blockStyle.style, cutoutBlockStyles[i]);
			Object.assign(blockImage.style, cutoutImageStyles[i]);
			Object.assign(blockBackgroundImage.style, cutoutBackgroundImageStyles[i]);
		} else {
			blockGrid.style.gridArea = mobileCutoutGrids[i];
			blockGrid.classList.add('fadeInUp');
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
function generateLifestyle(productType: string) {
	const imageCount = LifestyleAssets[`${productType}`].length;
	const lifestyleImages = [];
	const lifestyleGrids = [];
	const lifestyleStyles = [];
	const lifestyleEasings = [];
	const mobileLifestyleGrids = [];
	const mobileLifestyleStyles = [];

	for (let i = 0; i < imageCount; i++) {
		const blockImage = document.querySelector(
			`#${productType}-lifestyle${i} .classics-body__block-lifestyle`
		);
		const blockGrid = document.querySelector(
			`#${productType}-lifestyle${i}.classics-body__block`
		) as HTMLElement;

		const blockStyle = document.querySelector(
			`#${productType}-lifestyle${i} .classics-body__block-content`
		) as HTMLElement;

		lifestyleImages.push(LifestyleAssets[`${productType}`][`${i}`].url);
		lifestyleGrids.push(
			LifestyleAssets[`${productType}`][`${i}`].desktop.gridArea
		);
		lifestyleStyles.push(
			LifestyleAssets[`${productType}`][`${i}`].desktop.style
		);
		lifestyleEasings.push(
			LifestyleAssets[`${productType}`][`${i}`].desktop.ease
		);
		mobileLifestyleGrids.push(
			LifestyleAssets[`${productType}`][`${i}`].mobile.gridArea
		);
		mobileLifestyleStyles.push(
			LifestyleAssets[`${productType}`][`${i}`].mobile.style
		);

		blockImage.setAttribute('src', lifestyleImages[i]);

		if (window.matchMedia('(min-width: 760px)').matches) {
			blockGrid.style.gridArea = lifestyleGrids[i];
			blockGrid.setAttribute('data-parallax', lifestyleEasings[i]);
			Object.assign(blockStyle.style, lifestyleStyles[i]);
		} else {
			blockGrid.style.gridArea = mobileLifestyleGrids[i];
			blockGrid.classList.add('fadeInUp');
			Object.assign(blockStyle.style, mobileLifestyleStyles[i]);
		}
	}
}

/* Generate Subfooter */
function generateSubfooter(productType: string) {
	const subfooter = document.querySelector(`.classics-subfooter a`);
	const subfooterButton = document.querySelector(`.classics-subfooter__button`);
	const subfooterCta = MiscAssets[`${productType}`].subfooter.text;
	const subfooterUrl = MiscAssets[`${productType}`].subfooter.url;
	subfooterButton.textContent = subfooterCta;
	subfooter.setAttribute('href', subfooterUrl);
}

/* Generate Route Layout */
function generateLayout(productType: string) {
	generateHeader(productType); // header section
	generateDescription(productType); // description section
	generateProducts(productType); // product images
	generateCutout(productType); // cutout product images
	generateLifestyle(productType); // lifestyle images
	generateSubfooter(productType); // subfooter section
}

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

		generateLayout('all');
	})
	.resolve();

/******************/
/**** Era Page ****/
/******************/
router
	.on('era', () => {
		$('#era-body, #era-header').css('display', 'block');
		$('#all-body, #all-header').css('display', 'none');

		$('.all-link').css('color', 'white');
		$('.era-link').css('color', '#c9192e');

		generateLayout('era');
	})
	.resolve();
