/***************************************/
/**** Silhouette Images and Styling ****/
/***************************************/

/* Do not touch unless design changes are required */

class CutoutImages {
	public static all = {
		one: {
			type: 'Sk8-Hi',
			price: '$65.00',
			url:
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-sk8hi-1?wid=473&fmt=png-alpha',
			backgroundImgUrl:
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-paper-3?wid=764',
			desktop: {
				style: {
					justifySelf: 'start',
					margin: '10% auto auto 15%',
					width: '50%',
					transform: 'translate(0)'
				},
				gridArea: '5 / 3 / 6 / 5',
				imgStyle: {},
				backgroundStyle: {
					width: '80%',
					transform: 'scale(0.85) translate(-20%, 15%)'
				}
			},
			mobile: {
				gridArea: '8 / 1 / 10 / 3',
				style: {
					width: '100%',
					padding: '0 20px',
					margin: '0'
				},
				imgStyle: {
					transform: 'scale(.8) translate(0, 10%)'
				},
				backgroundStyle: {
					transform: 'scale(0.5) translate(-45%, 5%)',
					zIndex: '0'
				}
			}
		},
		two: {
			type: 'Slip-On',
			price: '$65.00',
			url:
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-slipon-2?wid=374&fmt=png-alpha',
			backgroundImgUrl:
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-paper-3?wid=764',
			desktop: {
				style: {
					justifySelf: 'end',
					width: '90%',
					transform: 'translate(25%, 40%)'
				},
				gridArea: '4 / 1 / 5 / 2',
				imgStyle: {
					transform: 'scale(1.2) translate(0, .5%)',
					zIndex: '1'
				},
				backgroundStyle: {
					transform: 'scale(0.8) translate(-5%, -40%)',
					zIndex: '0'
				}
			},
			mobile: {
				gridArea: '8 / 1 / 10 / 3',
				style: {
					justifySelf: 'center',
					width: '70%',
					padding: '0 10px'
				},
				imgStyle: {
					transform: 'scale(1.3) translate(0, -10%)',
					zIndex: '1'
				},
				backgroundStyle: {
					transform: 'scale(0.5) translate(-45%, -90%)',
					zIndex: '0'
				}
			}
		}
	};
	public static era = {
		one: {
			type: 'Era',
			price: '$65.00',
			url:
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-6?wid=561&fmt=png-alpha',
			backgroundImgUrl:
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-paper-3?wid=764',
			desktop: {
				style: {
					justifySelf: 'start',
					margin: '10% auto auto 15%',
					width: '60%',
					transform: 'translate(0, 55%)'
				},
				gridArea: '3 / 3 / 4 / 5',
				imgStyle: {},
				backgroundStyle: {
					width: '68%',
					transform: 'translate(20%, -10%)'
				}
			},
			mobile: {
				gridArea: '6 / 1 / 8 / 3',
				style: {
					width: '100%',
					padding: '10px',
					margin: '0'
				},
				imgStyle: {
					transform: 'scale(1) translate(0, 0)'
				},
				backgroundStyle: {
					transform: 'scale(0.7) translate(-5%, -30%)',
					zIndex: '0'
				}
			}
		},
		two: {
			type: 'Era',
			price: '$65.00',
			url:
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-era-9?wid=548&fmt=png-alpha',
			backgroundImgUrl:
				'https://images.vans.com/is/image/VansBrand/sp19-core-classics-header-paper-2?wid=720',
			desktop: {
				style: {
					justifySelf: 'start',
					width: '65%',
					transform: 'translate(15%, 70%)'
				},
				gridArea: '4 / 1 / 5 / 3',
				imgStyle: {},
				backgroundStyle: {
					transform: 'scale(0.35) translate(-105%, -115%)'
				}
			},
			mobile: {
				gridArea: '12 / 1 / 14 / 3',
				style: {
					justifySelf: 'center',
					width: '100%',
					padding: '0 50px'
				},
				imgStyle: {
					transform: 'scale(1.1) translate(0)',
					zIndex: '1'
				},
				backgroundStyle: {
					transform: 'scale(0.3) translate(-140%, -130%)',
					zIndex: '0'
				}
			}
		}
	};
}
