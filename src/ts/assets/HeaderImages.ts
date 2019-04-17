/***********************************/
/**** Header Images and Styling ****/
/***********************************/

/* Do not touch unless design changes are required */

class HeaderImages {
	public static all = {
		mobileImg: {
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
		img1: {
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
		img2: {
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
		img3: {
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
	};
	public static era = {
		mobileImg: {
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
		img1: {
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
		img2: {
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
	};
}
