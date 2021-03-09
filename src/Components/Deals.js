import React, { Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { withStyles } from '@material-ui/core/styles';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from '../styles/DealsStyles.js';
import dealsArray from '../constants/deals.js';
import 'react-glide/lib/reactGlide.css';


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
