import React, { Fragment } from 'react';
import { Glide } from 'react-glide';
import { makeStyles } from '@material-ui/core/styles';
import reviews from '../constants/reviews.js';
import Button from '@material-ui/core/Button';

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
    section: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		alignItems: 'center',
		marginBottom: '30px',
	},
}))

 const Reviews = () => {
    const classes = useStyles();
    return (
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
						{reviews.map((review) => {
							return (
								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										height: '500px',
										width: '100%',
									}}
								>
									<div>
										<h2>{review.title}</h2>
										<div>
											<span>{review.stars}</span>
										</div>
										<p>{review.subtitle}</p>
										<h4 style={{ width: '45ch' }}>{review.review}</h4>
										<h4>{review.reviewer}</h4>
									</div>
								</div>
							);
						})}
					</Glide>
					<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<Button
							variant='contained'
							onClick={() => {
								alert('clicked');
							}}
							style={{ width: '15ch', backgroundColor: '#f4d160' }}
						>
							READ MORE
						</Button>
					</div>
				</Fragment>

    )
}

export default Reviews;