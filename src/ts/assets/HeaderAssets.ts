/***********************************/
/**** Header Images and Styling ****/
/***********************************/

/* Do not touch unless design changes are required */

class HeaderAssets {
	public static all = {
		text: {
			backgroundImg1: {
				animation: 'slideInDown'
			},
			backgroundImg2: {
				animation: 'slideInUp'
			},
			textTop: {
				animation: 'fadeIn',
				animationDelay: '.75s'
			},
			textMiddle: {
				animation: 'fadeIn',
				animationDelay: '1s'
			},
			textBottom: {
				animation: 'fadeIn',
				animationDelay: '1.25s'
			},
			textBottomShoe: {
				text: ''
			}
		},
		mobile: {
			url:
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-all-header-mobile?wid=800',
			style: {
				position: 'absolute',
				zIndex: '3',
				bottom: '-350px',
				left: '0',
				width: '100%'
			},
			animation: 'zoomIn'
		},
		desktop: [
			{
				url:
					'https://images.vans.com/is/image/VansBrand/sp19-core-classics-all-header-1?wid=836',
				style: {
					position: 'absolute',
					zIndex: '1',
					bottom: '-650px',
					left: '-25px',
					width: '30%',
					minWidth: '400px'
				},
				animation: 'fadeInLeft'
			},
			{
				url:
					'https://images.vans.com/is/image/VansBrand/sp19-core-classics-all-header-2?wid=1824&fmt=png-alpha',
				style: {
					position: 'absolute',
					zIndex: '0',
					top: '-60px',
					left: '15%',
					width: '65%',
					minWidth: '966px'
				},
				animation: 'zoomIn'
			},
			{
				url:
					'https://images.vans.com/is/image/VansBrand/sp19-core-classics-all-header-3?wid=1030&fmt=png-alpha',
				style: {
					position: 'absolute',
					zIndex: '1',
					bottom: '-520px',
					right: '0',
					width: '25%',
					minWidth: '400px'
				},
				animation: 'fadeInRight'
			}
		]
	};
	public static era = {
		text: {
			backgroundImg1: {
				animation: 'slideInDown'
			},
			backgroundImg2: {
				animation: 'slideInUp'
			},
			textTop: {
				animation: 'fadeIn',
				animationDelay: '.75s'
			},
			textMiddle: {
				animation: 'fadeIn',
				animationDelay: '1s'
			},
			textBottom: {
				animation: 'fadeIn',
				animationDelay: '1.25s'
			},
			textBottomShoe: {
				text: 'Era.'
			}
		},
		mobile: {
			url:
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-header-mobile?wid=800',
			style: {
				position: 'absolute',
				zIndex: '3',
				bottom: '-350px',
				left: '0',
				width: '100%'
			},
			animation: 'zoomIn'
		},
		desktop: [
			{
				url:
					'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-header-1?wid=946&fmt=png-alpha',
				style: {
					position: 'absolute',
					zIndex: '3',
					bottom: '-550px',
					left: '0',
					width: '25%',
					minWidth: '400px'
				},
				animation: 'fadeInLeft'
			},
			{
				url:
					'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-header-2?wid=2814',
				style: {
					position: 'absolute',
					zIndex: '2',
					bottom: '-500px',
					right: '0',
					width: '90%',
					minWidth: '1270px'
				},
				animation: 'fadeInRight'
			}
		]
	};
}
