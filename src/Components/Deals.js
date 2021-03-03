import React, { Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { withStyles } from '@material-ui/core/styles';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from '../styles/DealsStyles.js';
import dealsArray from '../constants/deals.js';
import 'react-glide/lib/reactGlide.css';

// const FaRegSmileBeam = React.lazy(() => import('react-icons/fa'));
// const FaTree = React.lazy(() => import('react-icons/fa'));
// const FaWallet = React.lazy(() => import('react-icons/fa'));
// const FaMedal = React.lazy(() => import('react-icons/fa'));
// const FaFacebook = React.lazy(() => import('react-icons/fa'));
// const FaFacebookF = React.lazy(() => import('react-icons/fa'));
// const FaTwitter = React.lazy(() => import('react-icons/fa'));
// const FaInstagram = React.lazy(() => import('react-icons/fa'));
// const FaGooglePlusG = React.lazy(() => import('react-icons/fa'));
// const FaYoutube = React.lazy(() => import('react-icons/fa'));

// const renderLoader = () => <p>Loading</p>;

// const useStyle = makeStyles((theme) => ({
// 	title: {
// 		marginTop: '50px',
// 		marginBottom: '0px',
// 		display: 'flex',
// 		justifyContent: 'center',
// 		fontSize: '2.75rem',
// 		fontWeight: '900',
// 		fontFamily: 'catamaran',
// 	},
// 	subtitle: {
// 		display: 'flex',
// 		justifyContent: 'center',
// 		textAlign: 'center',
// 		width: '60%',
// 		padding: '0',
// 		marginTop: '0px',
// 	},
// 	dealsContainer: {
// 		display: 'flex',
// 		justifyContent: 'center',
// 		position: 'relative',
// 		marginBottom: '70px',
// 	},

// 	dealBox: {
// 		height: '393px',
// 		width: '278px',
// 		margin: '15px',
// 		position: 'relative',
// 	},
// 	dealImage: {
// 		width: '100%',
// 		objectFit: 'cover',
// 		height: '393px',
// 	},
// 	dealTitle: {
// 		fontWeight: '900',
// 		fontFamily: 'catamaran',
// 		fontSize: '1.2rem',
// 		position: 'absolute',
// 		top: '15px',
// 		left: '15px',
// 		textTransform: 'uppercase',
// 		color: 'white',
// 		margin: '0',
// 		lineHeight: '20px',
// 	},
// 	label: {
// 		position: 'relative',
// 		clear: 'both',
// 		color: 'white',
// 		fontSize: '0.8rem',
// 		fontWeight: '600',
// 		background: '#30353a',
// 		width: '13ch',
// 	},

// 	dealMain: {
// 		position: 'absolute',
// 		fontWeight: '900',
// 		fontFamily: 'catamaran',
// 		bottom: '25px',
// 		left: '15px',
// 		color: 'white',
// 		margin: '0',

// 		lineHeight: '20px',
// 		'& h3': {
// 			fontSize: '1.3rem',
// 			textTransform: 'uppercase',
// 		},
// 		'& h4': {
// 			fontSize: '1rem',
// 			textTransform: 'uppercase',
// 		},
// 		'& p::after': {
// 			content: "''",
// 			width: '0',
// 			height: '0',
// 			borderTop: '20px solid #30353a',
// 			borderRight: '20px solid transparent',
// 		},
// 	},

// 	section: {
// 		display: 'flex',
// 		flexDirection: 'column',
// 		width: '100%',
// 		alignItems: 'center',
// 		marginBottom: '30px',
// 	},

// 	socialMediaContainer: {
// 		backgroundColor: 'white',
// 		borderRadius: '50%',
// 		padding: '5px',
// 		width: '40px',
// 		height: '40px',
// 		display: 'flex',
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		margin: '10px',
// 	},
// }));

function Deals(props) {
	const {classes} = props;
	return (
		<>
			<Fragment>
				<div className={classes.section}>
					<h1 className={classes.title}>DEALS</h1>
					<p className={classes.subtitle}>
						Looking to save up to 20% on a last-minute deal? You’ve come to the right
						place. Whatever kind of New Zealand experience you’re looking for, we
						reckon we can help you save a little extra cash.
					</p>
				</div>
				<div className={classes.dealsContainer}>
					{dealsArray.map((deal) => {
						return (
							<div className={classes.dealBox}>
								<LazyLoadImage
									src={deal.img}
									className={classes.dealImage}
									alt='deal images'
									effect='blur'
								/>

								<p className={classes.dealTitle}>Experience New Zealand</p>

								<div className={classes.dealMain}>
									<p className={classes.label}>Small Group Tour</p>
									<h3>{deal.description}</h3>
									<h4>{deal.timeline}</h4>
								</div>
							</div>
						);
					})}
				</div>
			</Fragment>
		</>
	);
}

export default withStyles(styles, { withTheme: true })(Deals);
