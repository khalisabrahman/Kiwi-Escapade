import React, { Fragment } from 'react';
// import { GrBus } from '../../node_modules/react-icons/gr';
// import { GiHeartBeats } from '../../node_modules/react-icons/gi';
// import { FaRegSmileBeam, FaTree, FaWallet, FaMedal } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';

// const FaRegSmileBeam = React.lazy(() => import('react-icons/fa'));
// const FaTree = React.lazy(() => import('react-icons/fa'));
// const FaWallet = React.lazy(() => import('react-icons/fa'));
// const FaMedal = React.lazy(() => import('react-icons/fa'));
// const GrBus = React.lazy(() => import('react-icons/gr'));
// const GiHeartBeats = React.lazy(() => import('react-icons/gi'));
// const FaTwitter = React.lazy(() => import('react-icons/fa'));
// const FaInstagram = React.lazy(() => import('react-icons/fa'));
// const FaGooglePlusG = React.lazy(() => import('react-icons/fa'));
// const FaYoutube = React.lazy(() => import('react-icons/fa'));

const useStyles = makeStyles((theme) => ({
	whyUs: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#f3f3f3',
		height: '661px',
		alignItems: 'center',
		'& h1': {
			paddingTop: '70px',
			fontSize: '2.75rem',
			fontWeight: '900',
			fontFamily: 'catamaran',
		},
	},
	whyUsContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	whyHead: {
		fontSize: '1rem',
		display: 'block',
		width: '175px',
		height: '350px',
		margin: '10px',
	},
	whyIcons: {
		margin: '5px',
	},
	triangle1: {
		width: '0',
		height: '0',
		borderBottom: '60px solid rgba(92,155,63,.8)',
		borderRight: '60px solid transparent',
	},
	triangle2: {
		width: '0',
		height: '0',
		borderBottom: '60px solid rgba(241,99,120,.8)',
		borderRight: '60px solid transparent',
	},
	triangle3: {
		width: '0',
		height: '0',
		borderBottom: '60px solid rgba(249,156,4,.8)',
		borderRight: '60px solid transparent',
	},
	triangle4: {
		width: '0',
		height: '0',
		borderBottom: '60px solid rgba(31,143,183,.8)',
		borderRight: '60px solid transparent',
	},
	triangle5: {
		width: '0',
		height: '0',
		borderBottom: '60px solid rgba(48,53,58,.8)',
		borderRight: '60px solid transparent',
	},
	triangle6: {
		width: '0',
		height: '0',
		borderBottom: '60px solid rgba(155,91,164,.8)',
		borderRight: '60px solid transparent',
	},
}));

const WhyUs = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<div className={classes.whyUs}>
				<h1>WHY CHOOSE US</h1>
				<section className={classes.whyUsContainer}>
					<div className={classes.whyHead}>
						<div className={classes.triangle1}>
							{/* <GrBus size='2.5em' className={classes.whyIcons} /> */}
						</div>
						<h3>AUTHENTIC EXPERIENCES</h3>
						<p>
							We’re passionate about creating unforgettable trips that connect you with
							the real New Zealand. Our travel network connects you with the best
							destinations and secret spots that can’t be Googled.
						</p>
					</div>
					<div className={classes.whyHead}>
						<div className={classes.triangle2}>
							{/* <GiHeartBeats size='2.5em' className={classes.whyIcons} /> */}
						</div>
						<h3>CREATING CONNECTIONS</h3>
						<p>
							In an age where we’re stuck behind screens, we use adventure to fuel
							connection. When you travel with us, you’ll meet kind, friendly and
							open-minded people from around the world, who will rock your world.
						</p>
					</div>
					<div className={classes.whyHead}>
						<div className={classes.triangle3}>
							{/* <FaRegSmileBeam size='2.5em' className={classes.whyIcons} /> */}
						</div>
						<h3>OUR PEOPLE</h3>
						<p>
							Our team of New Zealand experts are dedicated to making your trip
							convenient and hassle-free by taking care of the details so you can focus
							on the unrivalled memory making.
						</p>
					</div>
					<div className={classes.whyHead}>
						<div className={classes.triangle4}>
							{/* <FaTree size='2.5em' className={classes.whyIcons} /> */}
						</div>
						<h3>GREEN, NOT MEAN</h3>
						<p>
							With an award-winning approach to sustainability, we encourage a little
							dash of self-awareness, and a slightly softer tread when you travel with
							us. We’re Green, not mean.
						</p>
					</div>
					<div className={classes.whyHead}>
						<div className={classes.triangle5}>
							{/* <FaWallet size='2.5em' className={classes.whyIcons} /> */}
						</div>
						<h3>UNBEATABLE VALUE</h3>
						<p>
							Allowing for all budgets and appetites; we ensure each passenger gets
							what they want out of their New Zealand adventure. Across all activity
							bookings, we offer our customers a Best Price Guarantee.
						</p>
					</div>
					<div className={classes.whyHead}>
						<div className={classes.triangle6}>
							{/* <FaMedal size='2.5em' className={classes.whyIcons} /> */}
						</div>
						<h3>AWARD WINNING</h3>
						<p>
							The original and the best. With 30 years in the New Zealand tourism
							industry, we’ve scooped up more awards than you can shake a stick at for
							our adventure tourism experiences and sustainability initiatives.
						</p>
					</div>
				</section>
			</div>
		</Fragment>
	);
};

export default WhyUs;
