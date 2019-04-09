/**** Initialize Navigo router ****/
declare var Navigo: any;
let root = null;
let useHash = true;
let hash = '#';
let router = new Navigo(root, useHash, hash);

/***************************/
/**** All Classics Page ****/
/***************************/
router
	.on('/', () => {
		console.log('This is all');
		$('#all-shoes').css('color', '#c9192e');

		$('#classics-header__img--1')
			.attr('src', '../img/s19-core-classics-slipon-1.jpg')
			.css({
				position: 'absolute',
				zIndex: '1',
				bottom: '-500px',
				left: '0',
				width: '25%',
				minWidth: '400px'
			});

		$('#classics-header__img--2')
			.attr('src', '../img/s19-core-classics-sk8hi-1.png')
			.css({
				position: 'absolute',
				zIndex: '0',
				top: '-40px',
				right: '20%',
				width: '60%',
				minWidth: '966px'
			});

		$('#classics-header__img--3')
			.attr('src', '../img/s19-core-classics-era-1.png')
			.css({
				position: 'absolute',
				zIndex: '1',
				bottom: '-520px',
				right: '0',
				width: '25%',
				minWidth: '400px'
			});

		// first image
		$('#img1.classics-body__img').css({
			gridArea: '1 / 1 / 3 / 3'
		});
		$('#img1 .classics-body__img-content').css({
			justifySelf: 'end',
			width: '75%'
		});
		$('#img1 .classics-body__img-image').attr(
			'src',
			'../img/shoes/slipon-1.png'
		);
		$('#img1 .classics-body__img-title').text('Slip-On');
		$('#img1 .classics-body__img-price').text('$65.00');

		// second image
		$('#img2.classics-body__img').css({
			gridArea: '1 / 3 / 2 / 4'
		});
		$('#img2 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '75%'
		});
		$('#img2 .classics-body__img-image').attr('src', '../img/shoes/era-1.png');
		$('#img2 .classics-body__img-title').text('Era');
		$('#img2 .classics-body__img-price').text('$65.00');

		// third image
		$('#img3.classics-body__img').css({
			gridArea: '1 / 4 / 2 / 5'
		});
		$('#img3 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '75%'
		});
		$('#img3 .classics-body__img-image').attr(
			'src',
			'../img/shoes/authentic-1.png'
		);
		$('#img3 .classics-body__img-title').text('Authentic');
		$('#img3 .classics-body__img-price').text('$65.00');

		// fourth image
		$('#img4.classics-body__img').css({
			gridArea: '2 / 3 / 5 / 5'
		});
		$('#img4 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '88%'
		});
		$('#img4 .classics-body__img-image').attr(
			'src',
			'../img/s19-core-classics-era-2.png'
		);

		// // fourth image
		// $('#img4')
		// 	.attr('src', '../img/s19-core-classics-era-2.png')
		// 	.css({
		// 		gridArea: '2 / 3 / 5 / 5',
		// 		width: '88%'
		// 	});

		// fifth image
		$('#img5.classics-body__img').css({
			gridArea: '4 / 1 / 6 / 3'
		});
		$('#img5 .classics-body__img-content').css({
			width: '90%',
			transform: 'translate(-5%, -15%)'
		});
		$('#img5 .classics-body__img-image').attr(
			'src',
			'../img/s19-core-classics-sk8hi-2.png'
		);

		// sixth image
		$('#img6.classics-body__img').css({
			gridArea: '5 / 3 / 6 / 5'
		});
		$('#img6 .classics-body__img-content').css({
			justifySelf: 'start',
			margin: '10% auto auto 15%',
			width: '50%'
		});
		$('#img6 .classics-body__img-image').attr(
			'src',
			'../img/shoes/sk8hi-1.png'
		);
		$('#img6 .classics-body__img-title').text('Sk8-Hi');
		$('#img6 .classics-body__img-price').text('$65.00');

		// seventh image
		$('#img7.classics-body__img').css({
			gridArea: '1 / 2 / 2 / 3'
		});
		$('#img7 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '75%',
			transform: 'translateX(-45%)'
		});
		$('#img7 .classics-body__img-image').attr('src', '../img/shoes/era-2.png');
		$('#img7 .classics-body__img-title').text('Era');
		$('#img7 .classics-body__img-price').text('$65.00');

		// eighth image
		$('#img8.classics-body__img').css({
			gridArea: '1 / 3 / 2 / 4'
		});
		$('#img8 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '75%',
			transform: 'translateX(-45%)'
		});
		$('#img8 .classics-body__img-image').attr(
			'src',
			'../img/shoes/oldskool-1.png'
		);
		$('#img8 .classics-body__img-title').text('Old Skool');
		$('#img8 .classics-body__img-price').text('$65.00');

		// ninth image
		$('#img9.classics-body__img').css({
			gridArea: '1 / 3 / 3 / 5'
		});
		$('#img9 .classics-body__img-content').css({
			justifySelf: 'end',
			width: '60%',
			transform: 'translateX(-5%)'
		});
		$('#img9 .classics-body__img-image').attr(
			'src',
			'../img/s19-core-classics-era-3.png'
		);

		// tenth image
		$('#img10.classics-body__img').css({
			gridArea: '2 / 1 / 4 / 2'
		});
		$('#img10 .classics-body__img-content').css({
			justifySelf: 'end',
			width: '75%',
			transform: 'translateY(27%)'
		});
		$('#img10 .classics-body__img-image').attr(
			'src',
			'../img/shoes/authentic-2.png'
		);
		$('#img10 .classics-body__img-title').text('Authentic');
		$('#img10 .classics-body__img-price').text('$65.00');

		// eleventh image
		$('#img11.classics-body__img').css({
			gridArea: '2 / 2 / 5 / 4'
		});
		$('#img11 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '85%',
			transform: 'translateY(3%)'
		});
		$('#img11 .classics-body__img-image').attr('src', '../img/shoes/era-3.png');
		$('#img11 .classics-body__img-title').text('Era');
		$('#img11 .classics-body__img-price').text('$65.00');

		// twelfth image
		$('#img12.classics-body__img').css({
			gridArea: '3 / 4 / 4 / 5'
		});
		$('#img12 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '75%',
			transform: 'translate(5%, 5%)'
		});
		$('#img12 .classics-body__img-image').attr('src', '../img/shoes/era-4.png');
		$('#img12 .classics-body__img-title').text('Era');
		$('#img12 .classics-body__img-price').text('$65.00');

		// thirteenth image
		$('#img13.classics-body__img').css({
			gridArea: '4 / 1 / 5 / 2'
		});
		$('#img13 .classics-body__img-content').css({
			justifySelf: 'end',
			width: '90%',
			transform: 'translate(25%, 16%)'
		});
		$('#img13 .classics-body__img-image').attr(
			'src',
			'../img/shoes/slipon-2.png'
		);
		$('#img13 .classics-body__img-title').text('Slip-On');
		$('#img13 .classics-body__img-price').text('$65.00');

		// fourteenth image
		$('#img14.classics-body__img').css({
			gridArea: '4 / 3 / 5 / 4'
		});
		$('#img14 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '75%',
			transform: 'translate(-45%, 35%)'
		});
		$('#img14 .classics-body__img-image').attr(
			'src',
			'../img/shoes/sk8hi-2.png'
		);
		$('#img14 .classics-body__img-title').text('Sk8-Hi');
		$('#img14 .classics-body__img-price').text('$65.00');

		// fifteenth image
		$('#img15.classics-body__img').css({
			gridArea: '4 / 3 / 5 / 5'
		});
		$('#img15 .classics-body__img-content').css({
			justifySelf: 'end',
			width: '65%',
			transform: 'translateX(-5%)'
		});
		$('#img15 .classics-body__img-image').attr(
			'src',
			'../img/s19-core-classics-era-4.gif'
		);

		document.querySelector(
			'.classics-header__title-text--bottom h1'
		).textContent = 'Era.';
		setInterval(changeText, 1000);

		$('.classics-subfooter__button').text('SHOP ALL CLASSICS');
	})
	.resolve();

/******************/
/**** Era Page ****/
/******************/
router
	.on('era', () => {
		console.log('This is era');
		$('#all-shoes').css('color', 'white');

		$('#classics-header__img--1')
			.attr('src', '../img/s19-core-classics-era-5.png')
			.css({
				position: 'absolute',
				zIndex: '3',
				top: '-70px',
				left: '0',
				width: '25%',
				minWidth: '400px'
			});

		$('#classics-header__img--2')
			.attr('src', '../img/s19-core-classics-slipon-2.jpg')
			.css({
				position: 'absolute',
				zIndex: '2',
				top: '-30px',
				right: '0',
				width: '80%',
				minWidth: '1270px'
			});

		$('.classics-header__title-text--bottom h1').css({
			display: 'none'
		});
		$('.classics-header__title-text--bottom-shoe h1').text('Era.');

		$('.classics-description').text(
			'The Vans Era was the first shoe designed for skateboarders by skateboarders. Introduced in 1976 and originally called the Style #95, the Era was made popular by the legendary Z-Boys and remains the shoe of choice for skaters, surfers, and creative people worldwide.'
		);

		// first image
		$('#img1.classics-body__img').css({
			gridArea: '1 / 1 / span 2 / 3'
		});
		$('#img1 .classics-body__img-content').css({
			justifySelf: 'end',
			width: '75%'
		});
		$('#img1 .classics-body__img-image').attr('src', '../img/shoes/era-5.png');
		$('#img1 .classics-body__img-title').text('Era');
		$('#img1 .classics-body__img-price').text('$65.00');

		// second image
		$('#img2.classics-body__img').css({
			gridArea: '3 / 3 / 4 / 4'
		});
		$('#img2 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '75%',
			transform: 'translateY(-25%)'
		});
		$('#img2 .classics-body__img-image').attr('src', '../img/shoes/era-1.png');
		$('#img2 .classics-body__img-title').text('Era');
		$('#img2 .classics-body__img-price').text('$65.00');

		// third image
		$('#img3.classics-body__img').css({
			gridArea: '3 / 4 / 4 / 5'
		});
		$('#img3 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '75%',
			transform: 'translateY(-25%)'
		});
		$('#img3 .classics-body__img-image').attr('src', '../img/shoes/era-4.png');
		$('#img3 .classics-body__img-title').text('Era');
		$('#img3 .classics-body__img-price').text('$65.00');

		// fourth image
		$('#img4.classics-body__img').css({
			gridArea: '1 / 3 / 3 / 5'
		});
		$('#img4 .classics-body__img-content').css({
			justifySelf: 'end',
			width: '85%'
		});
		$('#img4 .classics-body__img-image').attr(
			'src',
			'../img/s19-core-classics-era-6.png'
		);

		// fifth image
		$('#img5.classics-body__img').css({
			gridArea: '3 / 1 / 4 / 3'
		});
		$('#img5 .classics-body__img-content').css({
			margin: '0 auto',
			width: '50%',
			transform: 'translate(25%, 10%)'
		});
		$('#img5 .classics-body__img-image').attr(
			'src',
			'../img/s19-core-classics-era-7.png'
		);

		// sixth image
		$('#img6.classics-body__img').css({
			gridArea: '3 / 3 / 4 / 5'
		});
		$('#img6 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '60%',
			transform: 'translate(0, 55%)'
		});
		$('#img6 .classics-body__img-image').attr('src', '../img/shoes/era-6.png');
		$('#img6 .classics-body__img-title').text('Era');
		$('#img6 .classics-body__img-price').text('$65.00');

		// seventh image
		$('#img7.classics-body__img').css({
			gridArea: '1 / 1 / 2 / 2'
		});
		$('#img7 .classics-body__img-content').css({
			justifySelf: 'end',
			width: '75%',
			transform: 'translateX(30%)'
		});
		$('#img7 .classics-body__img-image').attr('src', '../img/shoes/era-7.png');
		$('#img7 .classics-body__img-title').text('Era');
		$('#img7 .classics-body__img-price').text('$65.00');

		// eighth image
		$('#img8.classics-body__img').css({
			gridArea: '1 / 4 / 2 / 5'
		});
		$('#img8 .classics-body__img-content').css({
			justifySelf: 'end',
			width: '75%',
			transform: 'translateX(-10%)'
		});
		$('#img8 .classics-body__img-image').attr('src', '../img/shoes/era-8.png');
		$('#img8 .classics-body__img-title').text('Era');
		$('#img8 .classics-body__img-price').text('$65.00');

		// ninth image
		$('#img9.classics-body__img').css({
			gridArea: '1 / 2 / 3 / 4'
		});
		$('#img9 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '90%',
			transform: 'translateX(10%)'
		});
		$('#img9 .classics-body__img-image').attr(
			'src',
			'../img/s19-core-classics-era-2.png'
		);

		// tenth image
		$('#img10.classics-body__img').css({
			gridArea: '3 / 1 / 4 / 2'
		});
		$('#img10 .classics-body__img-content').css({
			justifySelf: 'end',
			width: '130%',
			transform: 'translate(-5%, 45%)'
		});
		$('#img10 .classics-body__img-image').attr(
			'src',
			'../img/s19-core-classics-era-8.png'
		);
		$('#img10 .classics-body__img-title').text('');
		$('#img10 .classics-body__img-price').text('');

		// eleventh image
		$('#img11.classics-body__img').css({
			gridArea: '2 / 2 / 5 / 4'
		});
		$('#img11 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '80%',
			transform: 'translate(-5%, 15%)'
		});
		$('#img11 .classics-body__img-image').attr('src', '../img/shoes/era-3.png');
		$('#img11 .classics-body__img-title').text('Era');
		$('#img11 .classics-body__img-price').text('$65.00');

		// twelfth image
		$('#img12.classics-body__img').css({
			gridArea: '3 / 4 / 4 / 5'
		});
		$('#img12 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '75%',
			transform: 'translate(-40%, 15%)'
		});
		$('#img12 .classics-body__img-image').attr('src', '../img/shoes/era-2.png');
		$('#img12 .classics-body__img-title').text('Era');
		$('#img12 .classics-body__img-price').text('$65.00');

		// thirteenth image
		$('#img13.classics-body__img').css({
			gridArea: '4 / 1 / 5 / 3'
		});
		$('#img13 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '65%',
			transform: 'translate(15%, 70%)'
		});
		$('#img13 .classics-body__img-image').attr('src', '../img/shoes/era-9.png');
		$('#img13 .classics-body__img-title').text('Era');
		$('#img13 .classics-body__img-price').text('$65.00');

		// fourteenth image
		$('#img14.classics-body__img').css({
			gridArea: '4 / 3 / 5 / 4'
		});
		$('#img14 .classics-body__img-content').css({
			justifySelf: 'start',
			width: '75%',
			transform: 'translate(-35%, 60%)'
		});
		$('#img14 .classics-body__img-image').attr(
			'src',
			'../img/shoes/era-10.png'
		);
		$('#img14 .classics-body__img-title').text('Era');
		$('#img14 .classics-body__img-price').text('$65.00');

		// fifteenth image
		$('#img15.classics-body__img').css({
			gridArea: '4 / 3 / 5 / 5'
		});
		$('#img15 .classics-body__img-content').css({
			justifySelf: 'end',
			width: '65%',
			transform: 'translate(-5%, 5%)'
		});
		$('#img15 .classics-body__img-image').attr(
			'src',
			'../img/s19-core-classics-era-4.gif'
		);

		$('.classics-subfooter__button').text('SHOP ALL ERAS');
	})
	.resolve();

/*******************/
/**** Functions ****/
/*******************/

/* Change text automatically on 'ALL' page */
let textIndex: number = 1;
function changeText(): void {
	const text = ['Era.', 'Sk8-Hi.', 'Slip-On.', 'Authentic.', 'Old-Skool.'];
	textIndex++;
	if (textIndex > text.length) {
		textIndex = 1;
	}
	document.querySelector(
		'.classics-header__title-text--bottom h1'
	).textContent = text[textIndex - 1];
}
