import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GrBus } from '../../node_modules/react-icons/gr';
import { GiHeartBeats } from '../../node_modules/react-icons/gi';
import {
	FaRegSmileBeam,
	FaTree,
	FaWallet,
	FaMedal,
	FaRegStar,
} from '../../node_modules/react-icons/fa';
import dealsArray from '../constants/deals.js';
import exploreArray from '../constants/explore.js';
import 'react-glide/lib/reactGlide.css';
import { Glide } from 'react-glide';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles((theme) => ({
	title: {
		marginTop: '50px',
		marginBottom: '0px',
		display: 'flex',
		justifyContent: 'center',
		fontSize: '2.75rem',
		fontWeight: '900',
		fontFamily: 'catamaran',
	},
	subtitle: {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		width: '60%',
		padding: '0',
		marginTop: '0px',
	},
	dealsContainer: {
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
		marginBottom: '70px',
	},

	dealBox: {
		height: '393px',
		width: '278px',
		margin: '15px',
		position: 'relative',
	},
	dealImage: {
		width: '100%',
		objectFit: 'cover',
		height: '393px',
	},
	dealTitle: {
		fontWeight: '900',
		fontFamily: 'catamaran',
		fontSize: '1.2rem',
		position: 'absolute',
		top: '15px',
		left: '15px',
		textTransform: 'uppercase',
		color: 'white',
		margin: '0',
		lineHeight: '20px',
	},
	label: {
		position: 'relative',
		clear: 'both',
		color: 'white',
		fontSize: '0.8rem',
		fontWeight: '600',
		background: '#30353a',
		width: '13ch',
	},

	dealMain: {
		position: 'absolute',
		fontWeight: '900',
		fontFamily: 'catamaran',
		bottom: '25px',
		left: '15px',
		color: 'white',
		margin: '0',

		lineHeight: '20px',
		'& h3': {
			fontSize: '1.3rem',
			textTransform: 'uppercase',
		},
		'& h4': {
			fontSize: '1rem',
			textTransform: 'uppercase',
		},
		'& p::after': {
			content: "''",
			width: '0',
			height: '0',
			borderTop: '20px solid #30353a',
			borderRight: '20px solid transparent',
		},
	},

	exploreContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: '100vw',
		height: '477px',
		marginBottom: '70px',
	},
	exploreBox: {
		height: '393px',
		width: '25%',
		// background: `url(https://images.pexels.com/photos/3741382/pexels-photo-3741382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		'& h2': {
			color: '#FFFFFF',
			fontWeight: '900',
			fontSize: '1.8rem',
		},
	},
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

	section: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		alignItems: 'center',
		marginBottom: '30px',
	},
	galleryWrapper: {
		width: '100%',
		height: '820px',
		fontSize: '1.5em',
		color: 'white',
		textTransform: 'uppercase',
		textAlign: 'center',
		display: 'grid',
		gridTemplateRows: '400px 400px',
		gridTemplateColumns: '356.25px 356.25px 356.25px 356.25px',
		gridGap: '5px',
		backgroundColor: 'white',
	},
	a: {
		gridColumn: '1/3',
		gridRow: '1/2',
		background: `url(https://images.pexels.com/photos/844528/pexels-photo-844528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
		backgroundPosition: 'bottom center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	b: {
		gridColumn: '3/4',
		gridRow: '1/2',
		background: `url(https://images.pexels.com/photos/724963/pexels-photo-724963.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
		backgroundPosition: 'bottom center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	c: {
		gridColumn: '4/5',
		gridRow: '1/2',
		background: `url(https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	d: {
		background: `url(https://images.pexels.com/photos/5169015/pexels-photo-5169015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
		backgroundPosition: 'bottom center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	e: {
		gridColumn: '2/3',
		gridRow: '2/3',
		background: `url(https://images.pexels.com/photos/3217911/pexels-photo-3217911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
		backgroundPosition: 'top center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	f: {
		gridColumn: '3/5',
		gridRow: '2/3',
		background: `url(https://cdn.pixabay.com/photo/2013/05/26/10/51/maori-113729_960_720.jpg)`,
		backgroundPosition: 'top center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

function Deals() {
	const classes = useStyle();
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
								<img
									src={deal.img}
									className={classes.dealImage}
									alt='deal images'
								></img>
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

			<Fragment>
				<div className={classes.section}>
					<h1 className={classes.title}>EXPLORE OUR TRAVEL STYLES</h1>
					<p className={classes.subtitle}>
						We've got you covered. Kiwi Experience offers a range of different travel
						styles to help you experience our New Zealand, your way.
					</p>
				</div>
				<div className={classes.exploreContainer}>
					{exploreArray.map((explore) => {
						if (explore.id == 1 || explore.id == 3) {
							return (
								<div
									style={{
										background: `url(${explore.img})`,
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
									}}
									className={classes.exploreBox}
								>
									<h2>{explore.description}</h2>
								</div>
							);
						} else {
							return (
								<div
									style={{
										background: `url(${explore.img})`,
										marginTop: '84px',
										backgroundPosition: 'center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
									}}
									className={classes.exploreBox}
								>
									<h2>{explore.description}</h2>
								</div>
							);
						}
					})}
				</div>
			</Fragment>
			<Fragment>
				<div className={classes.whyUs}>
					<h1>WHY CHOOSE US</h1>
					<section className={classes.whyUsContainer}>
						<div className={classes.whyHead}>
							<div className={classes.triangle1}>
								<GrBus size='2.5em' />
							</div>
							<h3>AUTHENTIC EXPERIENCES</h3>
							<p>
								We’re passionate about creating unforgettable trips that connect you
								with the real New Zealand. Our travel network connects you with the best
								destinations and secret spots that can’t be Googled.
							</p>
						</div>
						<div className={classes.whyHead}>
							<div className={classes.triangle2}>
								<GiHeartBeats size='2.5em' />
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
								<FaRegSmileBeam size='2.5em' />
							</div>
							<h3>OUR PEOPLE</h3>
							<p>
								Our team of New Zealand experts are dedicated to making your trip
								convenient and hassle-free by taking care of the details so you can
								focus on the unrivalled memory making.
							</p>
						</div>
						<div className={classes.whyHead}>
							<div className={classes.triangle4}>
								<FaTree size='2.5em' />
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
								<FaWallet size='2.5em' />
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
								<FaMedal size='2.5em' />
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
			<Fragment>
				<div className={classes.section}>
					<h1 className={classes.title}>NEW ZEALAND HIGHLIGHTS</h1>
					<p className={classes.subtitle}>
						After 30 years on the road, we truly are the experts on all things New
						Zealand. Let us share and inspire you to experience our New Zealand with
						you.
					</p>
				</div>
				<div className={classes.galleryWrapper}>
					<div className={classes.a}>
						<h2>guide to skiing new zealand on a budget</h2>
					</div>
					<div className={classes.b}>
						<h2>queenstown</h2>
					</div>
					<div className={classes.c}>
						<h2>explore new zealand's great walk</h2>
					</div>
					<div className={classes.d}>
						<h2>bungy</h2>
					</div>
					<div className={classes.e}>
						<h2>solo travel</h2>
					</div>
					<div className={classes.f}>
						<h2>Māori culture</h2>
					</div>
				</div>
			</Fragment>

			<Fragment>
				<div className={classes.section}>
					<h1 className={classes.title}>SEE WHAT OTHERS HAVE TO SAY</h1>
				</div>
				<Glide
					height={'570px'}
					width={'100%'}
					// autoPlay={true}
					// autoPlaySpeed={3500}
					dots={false}
					infinite={true}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '570px',
							width: '100%',

							backgroundColor: 'pink',
						}}
					>
						<div>
							<h2>HOP-ON HOP-OFF REVIEW</h2>
							<div>
								<span>
									<FaRegStar color='yellow' />
									<FaRegStar color='yellow' />
									<FaRegStar color='yellow' />
									<FaRegStar color='yellow' />
									<FaRegStar color='yellow' />
								</span>
							</div>
							<p>Good fun, difference experience</p>
							<h4 style={{ width: '45ch' }}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
								praesentium exercitationem tempore reprehenderit nemo fugiat
								accusantium. Maxime cumque, quibusdam sunt officiis veniam voluptas
								atque magnam, quod vero, vitae fugit placeat reprehenderit! Aspernatur
								ea odio aperiam nemo quidem assumenda quae reprehenderit ipsam, iusto
								illum, dignissimos aliquid.
							</h4>
							<h4>-Raihana (Singapore)</h4>
						</div>
					</div>

					<div>2</div>
					<div>3</div>
					<div>4</div>
				</Glide>
				<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
					<Button
						variant='contained'
						onClick={() => {
							alert('clicked');
						}}
						style={{ width: '15ch' }}
					>
						READ MORE
					</Button>
				</div>
			</Fragment>
		</>
	);
}

export default Deals;
