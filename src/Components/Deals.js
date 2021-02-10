import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import dealsArray from '../constants/deals.js';
import 'react-glide/lib/reactGlide.css';

const useStyle = makeStyles((theme) => ({
	title: {
		marginTop: '40px',
		marginBottom: '0px',
		display: 'flex',
		justifyContent: 'center',
		fontSize: '44px',
		fontWeight: '700',
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
	},
	dealBox: {
		height: '393px',
		width: '278px',
		backgroundColor: 'pink',
		margin: '15px',
    },
    dealImage: {
        width: '100%',
        objectFit:'cover',
        height: '393px'
    },
	exploreContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		height: '477px',
	},
	exploreBox: {
		height: '393px',
		width: '25%',
		backgroundColor: 'pink',
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
	testing: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		alignItems: 'center',
	},
}));

function Deals() {
	const classes = useStyle();
	return (
		<>
			<div className={classes.testing}>
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
                            <img src={deal.img} className={classes.dealImage}></img>
                        </div>    
                    )
                })}
				</div>
				
				{/* <div className={classes.dealsContainer}>
					<div className={classes.dealBox}>1</div>
					<div className={classes.dealBox}>2</div>
					<div className={classes.dealBox}>3</div>
					<div className={classes.dealBox}>4</div>
				</div> */}
			</Fragment>
			<h1 className={classes.title}>EXPLORE OUR TRAVEL STYLES</h1>
			<p className={classes.subtitle}>
				We've got you covered. Kiwi Experience offers a range of different travel
				styles to help you experience our New Zealand, your way.
			</p>
			<Fragment>
				<div className={classes.exploreContainer}>
					<div className={classes.exploreBox}>1</div>
					<div className={classes.exploreBox} style={{ marginTop: '84px' }}>
						2
					</div>
					<div className={classes.exploreBox}>3</div>
					<div className={classes.exploreBox} style={{ marginTop: '84px' }}>
						4
					</div>
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
