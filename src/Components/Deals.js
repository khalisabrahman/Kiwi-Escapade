import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Glide } from 'react-glide';

import 'react-glide/lib/reactGlide.css';



const useStyle = makeStyles((theme) => ({
	title: {
		display: 'flex',
		justifyContent: 'center',
	},
	subtitle: {
		display: 'flex',
		justifyContent: 'center',
	},
	glideContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},
}));

function Deals() {
	const classes = useStyle();
	return (
		<>
			<h1 className={classes.title}>DEALS</h1>
			<p className={classes.subtitle}>
				Looking to save up to 20% on a last-minute deal? You’ve come to the right
				place. Whatever kind of New Zealand experience you’re looking for, we reckon
				we can help you save a little extra cash.
			</p>
			<Fragment className={classes.glideContainer}>
				<Glide
					height={'393px'}
					width={'100%'}
					// autoPlay={true}
					// autoPlaySpeed={3500}
					dots={true}
					infinite={true}
				>
                    <img src='https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' style={{width: '278px', height: '393px'}} />
                    <img src='https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' style={{width: '278px', height: '393px'}} />
                    <img src='https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' style={{width: '278px', height: '393px'}} />
				
				</Glide>

		
			</Fragment>
		</>
	);
}

export default Deals;
