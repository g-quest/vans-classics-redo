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

		$('#classics-header__img--1')
			.attr(
				'src',
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-all-header-1?wid=836'
			)
			.css({
				position: 'absolute',
				zIndex: '1',
				bottom: '-500px',
				left: '0',
				width: '25%',
				minWidth: '400px'
			});

		$('#classics-header__img--2')
			.attr(
				'src',
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-all-header-2?wid=1824&fmt=png-alpha'
			)
			.css({
				position: 'absolute',
				zIndex: '0',
				top: '-40px',
				right: '20%',
				width: '60%',
				minWidth: '966px'
			});

		$('#classics-header__img--3')
			.attr(
				'src',
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-all-header-3?wid=1030&fmt=png-alpha'
			)
			.css({
				position: 'absolute',
				zIndex: '1',
				bottom: '-520px',
				right: '0',
				width: '25%',
				minWidth: '400px'
			});

		$('.classics-header__title-text--bottom h1').css({
			display: 'block'
		});
		$('.classics-header__title-text--bottom-shoe h1').text('');

		$('.classics-description')
			.text('')
			.css({ marginTop: '50px' });

		// first image
		$('#img1 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-slipon-1?wid=356&fmt=png-alpha'
		);
		$('#img1 .classics-body__img-title').text('Slip-On');
		$('#img1 .classics-body__img-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img1.classics-body__img').css({
				gridArea: '1 / 1 / 3 / 3'
			});
			$('#img1 .classics-body__img-content').css({
				justifySelf: 'end',
				width: '75%',
				padding: '0'
			});
		} else {
			$('#img1.classics-body__img').css({
				gridArea: '1 / 1 / 3 / 3'
			});
			$('#img1 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px'
			});
		}

		// second image
		$('#img2 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-1?wid=1072&fmt=png-alpha'
		);
		$('#img2 .classics-body__img-title').text('Era');
		$('#img2 .classics-body__img-price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img2.classics-body__img').css({
				gridArea: '1 / 3 / 2 / 4'
			});
			$('#img2 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translateY(0)'
			});
		} else {
			$('#img2.classics-body__img').css({
				gridArea: '3 / 1 / 4 / 2'
			});
			$('#img2 .classics-body__img-content').css({
				width: '100%',
				padding: '0 20px'
			});
		}

		// third image
		$('#img3 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-authentic-1?wid=400&fmt=png-alpha'
		);
		$('#img3 .classics-body__img-title').text('Authentic');
		$('#img3 .classics-body__img-price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img3.classics-body__img').css({
				gridArea: '1 / 4 / 2 / 5'
			});
			$('#img3 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translateY(0)'
			});
		} else {
			$('#img3.classics-body__img').css({
				gridArea: '3 / 2 / 4 / 3'
			});
			$('#img3 .classics-body__img-content').css({
				width: '100%',
				padding: '0 20px'
			});
		}

		// fourth image
		$('#img4 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-1?wid=1576&fmt=png-alpha'
		);
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img4.classics-body__img')
				.css({
					gridArea: '2 / 3 / 5 / 5'
				})
				.attr('data-parallax', '{"y": "-100"}');

			$('#img4 .classics-body__img-content')
				.css({
					justifySelf: 'start',
					width: '88%'
				})
				.addClass('animated fadeInLeft');
		} else {
			$('#img4.classics-body__img').css({
				gridArea: '4 / 1 / 6 / 3'
			});
			$('#img4 .classics-body__img-content').css({
				width: '100%',
				padding: '0 20px',
				marginBottom: '20px'
			});
		}

		// fifth image
		$('#img5 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-2?wid=1586&fmt=png-alpha'
		);
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img5.classics-body__img')
				.css({
					gridArea: '4 / 1 / 6 / 3'
				})
				.attr('data-parallax', '{"y": "-100"}');

			$('#img5 .classics-body__img-content')
				.css({
					width: '90%',
					transform: 'translate(-5%, -15%)'
				})
				.addClass('animated fadeInLeft');
		} else {
			$('#img5.classics-body__img').css({
				gridArea: '6 / 1 / 8 / 3'
			});
			$('#img5 .classics-body__img-content').css({
				width: '100%',
				padding: '0 20px',
				transform: 'translate(0)',
				marginBottom: '20px'
			});
		}

		// sixth image
		$('#img6 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-sk8hi-1?wid=510&fmt=png-alpha'
		);
		$('#img6 .classics-body__img-title').text('Sk8-Hi');
		$('#img6 .classics-body__img-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img6.classics-body__img').css({
				gridArea: '5 / 3 / 6 / 5'
			});
			$('#img6 .classics-body__img-content').css({
				justifySelf: 'start',
				margin: '10% auto auto 15%',
				width: '50%',
				transform: 'translateY(0)'
			});
		} else {
			$('#img6.classics-body__img').css({
				gridArea: '8 / 1 / 10 / 3'
			});
			$('#img6 .classics-body__img-content').css({
				width: '100%',
				padding: '0 20px',
				margin: '0'
			});
		}

		// seventh image
		$('#img7 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-2?wid=1072&fmt=png-alpha'
		);
		$('#img7 .classics-body__img-title').text('Era');
		$('#img7 .classics-body__img-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img7.classics-body__img').css({
				gridArea: '1 / 2 / 2 / 3'
			});
			$('#img7 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translateX(-45%)'
			});
		} else {
			$('#img7.classics-body__img').css({
				gridArea: '1 / 1 / 2 / 2'
			});
			$('#img7 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// eighth image
		$('#img8 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-oldskool-1?wid=400&fmt=png-alpha'
		);
		$('#img8 .classics-body__img-title').text('Old Skool');
		$('#img8 .classics-body__img-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img8.classics-body__img').css({
				gridArea: '1 / 3 / 2 / 4'
			});
			$('#img8 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translateX(-45%)'
			});
		} else {
			$('#img8.classics-body__img').css({
				gridArea: '1 / 2 / 2 / 3'
			});
			$('#img8 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// ninth image
		$('#img9 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-3?wid=1010&fmt=png-alpha'
		);
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img9.classics-body__img')
				.css({
					gridArea: '1 / 3 / 3 / 5'
				})
				.attr('data-parallax', '{"y": "-100"}');
			$('#img9 .classics-body__img-content').css({
				justifySelf: 'end',
				width: '60%',
				transform: 'translateX(-5%)'
			});
		} else {
			$('#img9.classics-body__img').css({
				gridArea: '2 / 1 / 4 / 3'
			});
			$('#img9 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '90%%',
				padding: '0 10px',
				transform: 'translateX(0)',
				margin: '35px'
			});
		}

		// tenth image
		$('#img10 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-authentic-2?wid=400&fmt=png-alpha'
		);
		$('#img10 .classics-body__img-title').text('Authentic');
		$('#img10 .classics-body__img-price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img10.classics-body__img')
				.css({
					gridArea: '2 / 1 / 4 / 2'
				})
				.attr('data-parallax', '{"y": "-100", "x":"-50"}');
			$('#img10 .classics-body__img-content').css({
				justifySelf: 'end',
				width: '75%',
				transform: 'translateY(27%)'
			});
		} else {
			$('#img10.classics-body__img').css({
				gridArea: '4 / 1 / 5 / 2'
			});
			$('#img10 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// eleventh image
		$('#img11 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-3?wid=1072&fmt=png-alpha'
		);
		$('#img11 .classics-body__img-title').text('Era');
		$('#img11 .classics-body__img-price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img11.classics-body__img').css({
				gridArea: '2 / 2 / 5 / 4'
			});
			$('#img11 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '85%',
				transform: 'translateY(3%)'
			});
		} else {
			$('#img11.classics-body__img').css({
				gridArea: '4 / 2 / 5 / 3'
			});
			$('#img11 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// twelfth image
		$('#img12 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-4?wid=1072&fmt=png-alpha'
		);
		$('#img12 .classics-body__img-title').text('Era');
		$('#img12 .classics-body__img-price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img12.classics-body__img').css({
				gridArea: '3 / 4 / 4 / 5'
			});
			$('#img12 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(5%, 5%)'
			});
		} else {
			$('#img12.classics-body__img').css({
				gridArea: '5 / 1 / 6 / 2'
			});
			$('#img12 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// thirteenth image
		$('#img13 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-slipon-2?wid=263&fmt=png-alpha'
		);
		$('#img13 .classics-body__img-title').text('Slip-On');
		$('#img13 .classics-body__img-price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img13.classics-body__img').css({
				gridArea: '4 / 1 / 5 / 2'
			});
			$('#img13 .classics-body__img-content').css({
				justifySelf: 'end',
				width: '90%',
				transform: 'translate(25%, 16%)'
			});
		} else {
			$('#img13.classics-body__img').css({
				gridArea: '8 / 1 / 10 / 3'
			});
			$('#img13 .classics-body__img-content').css({
				justifySelf: 'center',
				width: '70%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// fourteenth image
		$('#img14 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-sk8hi-2?wid=356&fmt=png-alpha'
		);
		$('#img14 .classics-body__img-title').text('Sk8-Hi');
		$('#img14 .classics-body__img-price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img14.classics-body__img').css({
				gridArea: '4 / 3 / 5 / 4'
			});
			$('#img14 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(-45%, 35%)'
			});
		} else {
			$('#img14.classics-body__img').css({
				gridArea: '5 / 2 / 6 / 3'
			});
			$('#img14 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// fifteenth image
		$('#img15 .classics-body__img-image').attr(
			'src',
			'http://0bcaec7ece69371763f5-b1bcbcfde69c8ed350e6ba506c5f8d5c.r72.cf1.rackcdn.com/s19-core-classics-era-4.gif'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img15.classics-body__img').css({
				gridArea: '4 / 3 / 5 / 5'
			});
			$('#img15 .classics-body__img-content').css({
				justifySelf: 'end',
				width: '65%',
				transform: 'translateX(-5%)'
			});
		} else {
			$('#img15.classics-body__img').css({
				gridArea: '6 / 1 / 8 / 3'
			});
			$('#img15 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

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

		$('#classics-header__img--1')
			.attr(
				'src',
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-header-1?wid=946&fmt=png-alpha'
			)
			.css({
				position: 'absolute',
				zIndex: '3',
				top: '-70px',
				left: '0',
				width: '25%',
				minWidth: '400px'
			});

		$('#classics-header__img--2')
			.attr(
				'src',
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-header-2?wid=2814'
			)
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
		$('#img1 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-5?wid=1072&fmt=png-alpha'
		);
		$('#img1 .classics-body__img-title').text('Era');
		$('#img1 .classics-body__img-price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img1.classics-body__img').css({
				gridArea: '1 / 1 / span 2 / 3'
			});
			$('#img1 .classics-body__img-content').css({
				justifySelf: 'end',
				width: '75%'
			});
		} else {
			$('#img1.classics-body__img').css({
				gridArea: '1 / 1 / 3 / 3'
			});
			$('#img1 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				marginTop: '10px'
			});
		}

		// second image
		$('#img2 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-1?wid=1072&fmt=png-alpha'
		);
		$('#img2 .classics-body__img-title').text('Era');
		$('#img2 .classics-body__img-price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img2.classics-body__img').css({
				gridArea: '3 / 3 / 4 / 4'
			});
			$('#img2 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translateY(-25%)'
			});
		} else {
			$('#img2.classics-body__img').css({
				gridArea: '3 / 1 / 4 / 2'
			});
			$('#img2 .classics-body__img-content').css({
				width: '100%',
				padding: '0 10px',
				transform: 'translateY(0)'
			});
		}

		// third image
		$('#img3 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-4?wid=1072&fmt=png-alpha'
		);
		$('#img3 .classics-body__img-title').text('Era');
		$('#img3 .classics-body__img-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img3.classics-body__img').css({
				gridArea: '3 / 4 / 4 / 5'
			});
			$('#img3 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translateY(-25%)'
			});
		} else {
			$('#img3.classics-body__img').css({
				gridArea: '3 / 2 / 4 / 3'
			});
			$('#img3 .classics-body__img-content').css({
				width: '100%',
				padding: '0 10px',
				transform: 'translateY(0)'
			});
		}

		// fourth image
		$('#img4 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-5?wid=1504&fmt=png-alpha'
		);
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img4.classics-body__img').css({
				gridArea: '1 / 3 / 3 / 5'
			});
			$('#img4 .classics-body__img-content').css({
				justifySelf: 'end',
				width: '85%'
			});
		} else {
			$('#img4.classics-body__img').css({
				gridArea: '4 / 1 / 6 / 3'
			});
			$('#img4 .classics-body__img-content').css({
				width: '100%',
				padding: '10px',
				transform: 'translateY(0)'
			});
		}

		// fifth image
		$('#img5 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-6?wid=906&fmt=png-alpha'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img5.classics-body__img').css({
				gridArea: '3 / 1 / 4 / 3'
			});
			$('#img5 .classics-body__img-content').css({
				margin: '0 auto',
				width: '50%',
				transform: 'translate(25%, 10%)'
			});
		} else {
			$('#img5.classics-body__img').css({
				gridArea: '8 / 1 / 10 / 3'
			});
			$('#img5 .classics-body__img-content').css({
				width: '100%',
				padding: '10px 50px',
				transform: 'translateY(0)'
			});
		}

		// sixth image
		$('#img6 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-6?wid=561&fmt=png-alpha'
		);
		$('#img6 .classics-body__img-title').text('Era');
		$('#img6 .classics-body__img-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img6.classics-body__img').css({
				gridArea: '3 / 3 / 4 / 5'
			});
			$('#img6 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '60%',
				transform: 'translateY(55%)'
			});
		} else {
			$('#img6.classics-body__img').css({
				gridArea: '6 / 1 / 8 / 3'
			});
			$('#img6 .classics-body__img-content').css({
				width: '100%',
				padding: '10px',
				transform: 'translateY(0)'
			});
		}

		// seventh image
		$('#img7 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-7?wid=1072&fmt=png-alpha'
		);
		$('#img7 .classics-body__img-title').text('Era');
		$('#img7 .classics-body__img-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img7.classics-body__img').css({
				gridArea: '1 / 1 / 2 / 2'
			});
			$('#img7 .classics-body__img-content').css({
				justifySelf: 'end',
				width: '75%',
				transform: 'translateX(30%)'
			});
		} else {
			$('#img7.classics-body__img').css({
				gridArea: '1 / 1 / 2 / 2'
			});
			$('#img7 .classics-body__img-content').css({
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// eighth image
		$('#img8 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-8?wid=583&fmt=png-alpha'
		);
		$('#img8 .classics-body__img-title').text('Era');
		$('#img8 .classics-body__img-price').text('$65.00');
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img8.classics-body__img').css({
				gridArea: '1 / 4 / 2 / 5'
			});
			$('#img8 .classics-body__img-content').css({
				justifySelf: 'end',
				width: '75%',
				transform: 'translateX(-10%)'
			});
		} else {
			$('#img8.classics-body__img').css({
				gridArea: '1 / 2 / 2 / 3'
			});
			$('#img8 .classics-body__img-content').css({
				width: '100%',
				padding: '0 10px',
				transform: 'translateX(0)'
			});
		}

		// ninth image
		$('#img9 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-1?wid=1576&fmt=png-alpha'
		);
		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img9.classics-body__img').css({
				gridArea: '1 / 2 / 3 / 4'
			});
			$('#img9 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '90%',
				transform: 'translateX(10%)'
			});
		} else {
			$('#img9.classics-body__img').css({
				gridArea: '2 / 1 / 4 / 3'
			});
			$('#img9 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				margin: '20px 0'
			});
		}

		// tenth image
		$('#img10 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-static-7?wid=549&fmt=png-alpha'
		);
		$('#img10 .classics-body__img-title').text('');
		$('#img10 .classics-body__img-price').text('');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img10.classics-body__img').css({
				gridArea: '3 / 1 / 4 / 2'
			});
			$('#img10 .classics-body__img-content').css({
				justifySelf: 'end',
				width: '130%',
				transform: 'translate(-5%, 45%)'
			});
		} else {
			$('#img10.classics-body__img').css({
				gridArea: '6 / 1 / 8 / 3'
			});
			$('#img10 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				marginBottom: '20px'
			});
		}

		// eleventh image
		$('#img11 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-3?wid=1072&fmt=png-alpha'
		);
		$('#img11 .classics-body__img-title').text('Era');
		$('#img11 .classics-body__img-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img11.classics-body__img').css({
				gridArea: '2 / 2 / 5 / 4'
			});
			$('#img11 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '80%',
				transform: 'translate(-5%, 15%)'
			});
		} else {
			$('#img11.classics-body__img').css({
				gridArea: '4 / 1 / 6 / 3'
			});
			$('#img11 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px'
			});
		}

		// twelfth image
		$('#img12 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-2?wid=1072&fmt=png-alpha'
		);
		$('#img12 .classics-body__img-title').text('Era');
		$('#img12 .classics-body__img-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img12.classics-body__img').css({
				gridArea: '3 / 4 / 4 / 5'
			});
			$('#img12 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(-40%, 15%)'
			});
		} else {
			$('#img12.classics-body__img').css({
				gridArea: '8 / 1 / 10 / 2'
			});
			$('#img12 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px'
			});
		}

		// thirteenth image
		$('#img13 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-9?wid=548&fmt=png-alpha'
		);
		$('#img13 .classics-body__img-title').text('Era');
		$('#img13 .classics-body__img-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img13.classics-body__img').css({
				gridArea: '4 / 1 / 5 / 3'
			});
			$('#img13 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '65%',
				transform: 'translate(15%, 70%)'
			});
		} else {
			$('#img13.classics-body__img').css({
				gridArea: '12 / 1 / 14 / 3'
			});
			$('#img13 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 50px'
			});
		}

		// fourteenth image
		$('#img14 .classics-body__img-image').attr(
			'src',
			'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-10?wid=1072&fmt=png-alpha'
		);
		$('#img14 .classics-body__img-title').text('Era');
		$('#img14 .classics-body__img-price').text('$65.00');

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img14.classics-body__img').css({
				gridArea: '4 / 3 / 5 / 4'
			});
			$('#img14 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '75%',
				transform: 'translate(-35%, 60%)'
			});
		} else {
			$('#img14.classics-body__img').css({
				gridArea: '8 / 2 / 10 / 3'
			});
			$('#img14 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px'
			});
		}

		// fifteenth image
		$('#img15 .classics-body__img-image').attr(
			'src',
			'http://0bcaec7ece69371763f5-b1bcbcfde69c8ed350e6ba506c5f8d5c.r72.cf1.rackcdn.com/s19-core-classics-era-4.gif'
		);

		if (window.matchMedia('(min-width: 760px)').matches) {
			$('#img15.classics-body__img').css({
				gridArea: '4 / 3 / 5 / 5'
			});
			$('#img15 .classics-body__img-content').css({
				justifySelf: 'end',
				width: '65%',
				transform: 'translate(-5%, 5%)'
			});
		} else {
			$('#img15.classics-body__img').css({
				gridArea: '10 / 1 / 12 / 3'
			});
			$('#img15 .classics-body__img-content').css({
				justifySelf: 'start',
				width: '100%',
				padding: '0 10px',
				marginBottom: '10px '
			});
		}

		$('.classics-subfooter__button').text('SHOP ALL ERAS');
	})
	.resolve();

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

/* Mobile subnav */
$('#subnav--mobile, .classics-subnav--mobile__wrapper--item').click(() => {
	$(
		'.classics-subnav--mobile__wrapper--item, .classics-subnav--mobile__wrapper--shop'
	).slideToggle(250);
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

declare var ParallaxScroll: any;
ParallaxScroll.init();
