import React, { Fragment, Suspense } from 'react';
import styles from '../styles/FooterStyles.js';
import { withStyles } from '@material-ui/core/styles';

const FacebookFIcon = React.lazy(() => import('../icons/FacebookFIcon'));
const GooglePlusIcon = React.lazy(() => import('../icons/GooglePlusIcon'));
const TwitterIcon = React.lazy(() => import('../icons/TwitterLineIcon'));
const InstagramLineIcon = React.lazy(() =>
	import('../icons/InstagramLineIcon')
);
const YoutubeIcon = React.lazy(() => import('../icons/YoutubeLineIcon'));

const Footer = (props) => {
	const { classes } = props;
	return (
		<Fragment>
			<div className={classes.footer}>
				<div className={classes.gutterMain}>
					<div className={classes.footerIcons}>
						<div className={classes.footerBox}>
							<a href='https://www.facebook.com/'>
								<Suspense fallback={<div>Loading...</div>}>
									<FacebookFIcon className={classes.iconStyle} />
								</Suspense>
							</a>
						</div>
						<div className={classes.footerBox}>
							<a href='https://www.google.com/'>
								<Suspense fallback={<div>Loading...</div>}>
									<GooglePlusIcon className={classes.iconStyle} />
								</Suspense>
							</a>
						</div>
						<div className={classes.footerBox}>
							<a href='https://twitter.com/'>
								<Suspense fallback={<div>Loading...</div>}>
									<TwitterIcon className={classes.iconStyle} />
								</Suspense>
							</a>
						</div>
						<div className={classes.footerBox}>
							<a href='https://www.instagram.com/'>
								<Suspense fallback={<div>Loading...</div>}>
									<InstagramLineIcon className={classes.iconStyle} />
								</Suspense>
							</a>
						</div>
						<div className={classes.footerBox}>
							<a href='https://www.youtube.com/'>
								<Suspense fallback={<div>Loading...</div>}>
									<YoutubeIcon className={classes.iconStyle} />
								</Suspense>
							</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default withStyles(styles, { withTheme: true })(Footer);
