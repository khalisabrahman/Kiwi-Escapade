import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import {
// 	FaFacebook,
// 	FaTwitter,
// 	FaInstagram,
// 	FaYoutube,
// } from '../../node_modules/react-icons/fa';
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
	subtitle: {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		width: '60%',
		padding: '0',
		marginTop: '0px',
	},
    section: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		alignItems: 'center',
		marginBottom: '30px',
	},
    socialMediaContainer: {
		backgroundColor: 'white',
		borderRadius: '50%',
		padding: '5px',
		width: '40px',
		height: '40px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '10px',
	},
}))
 const Stories = () => {
     const classes = useStyles();
    return (
        <Fragment>
				<div
					className={classes.section}
					style={{
						height: '650px',
						minWidth: 'auto',
						background: `url(https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
						marginBottom: '0px',
					}}
				>
					<h1 className={classes.title}>CUSTOMER STORIES</h1>
					<p className={classes.subtitle}>
						We’ve hosted over 500,000 passengers in our 30 years. Check out their
						stories here
					</p>
					<div style={{ display: 'flex', marginBottom: '200px' }}>
						<div className={classes.socialMediaContainer}>
							{/* <FaFacebook size='1.2em' /> */}
						</div>
						<div className={classes.socialMediaContainer}>
							{/* <FaTwitter size='1em' /> */}
						</div>
						<div className={classes.socialMediaContainer}>
							{/* <FaInstagram size='1em' /> */}
						</div>
						<div className={classes.socialMediaContainer}>
							{/* <FaYoutube size='1em' /> */}
						</div>
					</div>
					<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<Button
							variant='contained'
							onClick={() => {
								alert('clicked');
							}}
							style={{
								width: '278px',
								height: '60px',
								padding: '15px',
								backgroundColor: '#f4d160',
								fontSize: '1.1em',
							}}
						>
							EXPLORE ALL EXPERIENCES
						</Button>
					</div>
				</div>
			</Fragment>
    )
}

export default Stories;