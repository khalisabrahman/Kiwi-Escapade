import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import dealsArray from '../constants/deals.js';
import exploreArray from '../constants/explore.js';
import 'react-glide/lib/reactGlide.css';

const useStyle = makeStyles((theme) => ({
	title: {
		marginTop: '50px',
		marginBottom: '0px',
		display: 'flex',
		justifyContent: 'center',
		fontSize: '44px',
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
            fontSize: '1.8rem'
        }
	},
	whyUs: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: '#f3f3f3',
		height: '661px',
		alignItems: 'center',
	},
	whyUsContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	section: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
        alignItems: 'center',
        marginBottom: '30px'
	},
}));

function Deals() {
	const classes = useStyle();
	return (
		<>
			<div className={classes.section}>
				<h1 className={classes.title}>DEALS</h1>
				<p className={classes.subtitle}>
					Looking to save up to 20% on a last-minute deal? You’ve come to the right
					place. Whatever kind of New Zealand experience you’re looking for, we
					reckon we can help you save a little extra cash.
				</p>
			</div>

			<Fragment>
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
                        if(explore.id == 1 || explore.id == 3) {
                            return (
                                <div style={{background: `url(${explore.img})`, backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'}} className={classes.exploreBox} >
                                    <h2>{explore.description}</h2>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div style={{background: `url(${explore.img})`, marginTop: '84px', backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'}} className={classes.exploreBox} >
                                    <h2>{explore.description}</h2>
                                </div>
                            )
                        }
                        
                    })}
				</div>
			</Fragment>
			<Fragment>
				<div className={classes.whyUs}>
					<h1>WHY CHOOSE US</h1>
					<section className={classes.whyUsContainer}>
						<div>1</div>
						<div>2</div>
						<div>3</div>
						<div>4</div>
						<div>5</div>
						<div>6</div>
						<div>7</div>
					</section>
				</div>
			</Fragment>
		</>
	);
}

export default Deals;
