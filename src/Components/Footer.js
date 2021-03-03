import React, { Fragment } from 'react';
// import {
// 	FaFacebookF,
// 	FaTwitter,
// 	FaInstagram,
// 	FaGooglePlusG,
// 	FaYoutube,
// } from '../../node_modules/react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
		backgroundColor: '#28527a',
	},
	gutterMain: {
		display: 'flex',
		justifyContent: 'space-between',
		marginRight: '20px',
	},
	footerIcons: {
		display: 'flex',
	},
	footerBox: {
		margin: '30px',
	},
}))

 const Footer = () => {
    const classes = useStyles();
    return (
        <Fragment>
				<div className={classes.footer}>
					<div className={classes.gutterMain}>
						{/* <FaFacebookF size='1.8rem' color='white' /> */}
						<div className={classes.footerIcons}>
							<div className={classes.footerBox}>
								{/* <FaFacebookF size='1.8rem' color='white' /> */}
							</div>
							<div className={classes.footerBox}>
								{/* <FaGooglePlusG size='1.8rem' color='white' /> */}
								<p>About us</p>
							</div>
							<div className={classes.footerBox}>
								{/* <FaInstagram size='1.8rem' color='white' /> */}
								<p>Contact us</p>
							</div>
							<div className={classes.footerBox}>
								{/* <FaYoutube size='1.8rem' color='white' /> */}
								<p>Blog</p>
							</div>
							<div className={classes.footerBox}>
								{/* <FaTwitter size='1.8rem' color='white' /> */}
								<p>FAQ's</p>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
    )
}

export default Footer;