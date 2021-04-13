import React, { Fragment } from 'react';
import { Glide } from 'react-glide';
import reviews from '../constants/reviews.js';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/ReviewStyles';

const Reviews = (props) => {
	const {classes} = props;
	return (
		<Fragment>
			<div className={classes.section}>
				<h1 className={classes.title}>SEE WHAT OTHERS HAVE TO SAY</h1>
			</div>
			<Glide
				height={'570px'}
				width={'100vw'}
				// autoPlay={true}
				// autoPlaySpeed={3500}
				dots={false}
				infinite={true}
			>
				{reviews.map((review) => {
					return (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '500px',
								width: '100vw',
							}}
						>
							<div>
								<h2 className={classes.reviewTitle}>{review.title}</h2>
								<div>
									<span className={classes.stars}>{review.stars}</span>
								</div>
								<p>{review.subtitle}</p>
								<h4 className={classes.review}>{review.review}</h4>
								<h4>{review.reviewer}</h4>
							</div>
						</div>
					);
				})}
			</Glide>
			<div className={classes.buttonContainer}>
				<Button
					variant='contained'
					onClick={() => {
						alert('clicked');
					}}
					className={classes.buttonStyle}
				>
					READ MORE
				</Button>
			</div>
		</Fragment>
	);
};

export default withStyles(styles, {withTheme: true})(Reviews);
