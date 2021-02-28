import React, { Fragment, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import exploreArray from '../constants/explore.js';

const useStyles = makeStyles((theme) => ({
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
    section: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		alignItems: 'center',
		marginBottom: '30px',
	},
}))

 const TravelStyles = () => {
     const classes = useStyles();
    return (
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
										className={classes.exploreBox}
										style={{
											background: `url(${explore.img})`,
											backgroundPosition: 'center',
											backgroundRepeat: 'no-repeat',
											backgroundSize: 'cover',
										}}
									>
										<h2>{explore.description}</h2>
									</div>
								);
							} else {
								return (
									<div
										className={classes.exploreBox}
										style={{
											background: `url(${explore.img})`,
											marginTop: '84px',
											backgroundPosition: ' center',
											backgroundRepeat: 'no-repeat',
											backgroundSize: 'cover',
										}}
									>
										<h2>{explore.description}</h2>
									</div>
								);
							}
						})}
					</div>
				</Fragment>
    )
}

export default TravelStyles;