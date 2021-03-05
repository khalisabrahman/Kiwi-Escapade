import React, { Fragment, Suspense } from 'react';
import Button from '@material-ui/core/Button';
import styles from '../styles/StoriesStyles';
import { withStyles } from '@material-ui/core/styles';

const FacebookIcon = React.lazy(() => import('../icons/FacebookIcon'));
const TwitterIcon = React.lazy(() => import('../icons/TwitterIcon'));
const InstagramIcon = React.lazy(() => import('../icons/InstagramIcon'));
const YoutubeIcon = React.lazy(() => import('../icons/YoutubeIcon'));

const Stories = (props) => {
	const { classes } = props;

	return (
		<Fragment>
			<div className={classes.section}>
				<h1 className={classes.title}>CUSTOMER STORIES</h1>
				<p className={classes.subtitle}>
					We’ve hosted over 500,000 passengers in our 30 years. Check out their
					stories here
				</p>
				<div className={classes.iconContainer}>
					<div className={classes.socialMediaContainer}>
						<a href='https://www.facebook.com/'>
							<Suspense fallback={<div>Loading...</div>}>
								<FacebookIcon className={classes.iconStyle} />
							</Suspense>
						</a>
					</div>
					<div className={classes.socialMediaContainer}>
						<a href='https://twitter.com/'>
							<Suspense fallback={<div>Loading...</div>}>
								<TwitterIcon className={classes.iconStyle} />
							</Suspense>
						</a>
					</div>
					<div className={classes.socialMediaContainer}>
						<a href='https://www.instagram.com/'>
							<Suspense fallback={<div>Loading...</div>}>
								<InstagramIcon className={classes.iconStyle} />
							</Suspense>
						</a>
					</div>
					<div className={classes.socialMediaContainer}>
						<a href='https://www.youtube.com/'>
							<Suspense fallback={<div>Loading...</div>}>
								<YoutubeIcon className={classes.iconStyle} />
							</Suspense>
						</a>
					</div>
				</div>
				<div className={classes.buttonContainer}>
					<Button
						variant='contained'
						onClick={() => {
							alert('clicked');
						}}
						className={classes.storiesButton}
					>
						EXPLORE ALL EXPERIENCES
					</Button>
				</div>
			</div>
		</Fragment>
	);
};

export default withStyles(styles, { withTheme: true })(Stories);
