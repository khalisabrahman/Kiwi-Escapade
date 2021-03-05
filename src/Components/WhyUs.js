import React, { Fragment, Suspense } from 'react';

import { makeStyles } from '@material-ui/core/styles';
// import BxBusIcon from '../icons/BusIcon';
// import HeartbeatIcon from '../icons/HeartbeatIcon';
// import SmileBeamIcon from '../icons/SmileBeamIcon';
// import PineTreeIcon from '../icons/PineTreeIcon';
// import WalletIcon from '../icons/WalletIcon';
// import MedalIcon from '../icons/MedalIcon';

const BxBusIcon = React.lazy(() => import('../icons/BusIcon'));
const MedalIcon = React.lazy(() => import('../icons/MedalIcon'));
const HeartbeatIcon = React.lazy(() => import('../icons/HeartbeatIcon'));
const SmileBeamIcon = React.lazy(() => import('../icons/SmileBeamIcon'));
const PineTreeIcon = React.lazy(() => import('../icons/PineTreeIcon'));
const WalletIcon = React.lazy(() => import('../icons/WalletIcon'));

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
							<Suspense fallback={<div>Loading</div>}>
								<BxBusIcon width='48px' height='48px' className={classes.whyIcons} />
							</Suspense>
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
							<Suspense fallback={<div>Loading</div>}>
								<HeartbeatIcon
									width='48px'
									height='48px'
									className={classes.whyIcons}
								/>
							</Suspense>
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
							<Suspense fallback={<div>Loading</div>}>
								<SmileBeamIcon
									width='48px'
									height='48px'
									className={classes.whyIcons}
								/>
							</Suspense>
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
							<Suspense fallback={<div>Loading</div>}>
								<PineTreeIcon width='48px' height='48px' className={classes.whyIcons} />
							</Suspense>
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
							<Suspense fallback={<div>Loading</div>}>
								<WalletIcon width='48px' height='48px' className={classes.whyIcons} />
							</Suspense>
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
							<Suspense fallback={<div>Loading</div>}>
								<MedalIcon width='48px' height='48px' className={classes.whyIcons} />
							</Suspense>
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
