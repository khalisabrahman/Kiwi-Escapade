import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import snow from '../images/Snow.jpg';
import queenstownView from '../images/queenstownView.jpg';
import hiking from '../images/hiking.jpg';
import bungy from '../images/bungy.jpg';
import solo from '../images/solo.jpg';
import maori from '../images/maori.jpg';

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
    galleryWrapper: {
		width: '100%',
		height: '820px',
		marginTop: '60px',
		fontSize: '1.5em',
		color: 'white',
		textTransform: 'uppercase',
		textAlign: 'center',
		display: 'grid',
		gridTemplateRows: '400px 400px',
		gridTemplateColumns: '356.25px 356.25px 356.25px 356.25px',
		gridGap: '5px',
		backgroundColor: 'white',
	},
	a: {
		gridColumn: '1/3',
		gridRow: '1/2',
		background: `url(${snow})`,
		backgroundPosition: 'bottom center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	b: {
		gridColumn: '3/4',
		gridRow: '1/2',
		background: `url(${queenstownView})`,
		backgroundPosition: 'bottom center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	c: {
		gridColumn: '4/5',
		gridRow: '1/2',
		background: `url(${hiking})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	d: {
		background: `url(${bungy})`,
		backgroundPosition: 'bottom center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	e: {
		gridColumn: '2/3',
		gridRow: '2/3',
		background: `url(${solo})`,
		backgroundPosition: 'top center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	f: {
		gridColumn: '3/5',
		gridRow: '2/3',
		background: `url(${maori})`,
		backgroundPosition: 'top center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}))

 const Highlights = () => {
     const classes = useStyles();
    return (
        <Fragment>
					<div className={classes.section}>
						<h1 className={classes.title}>NEW ZEALAND HIGHLIGHTS</h1>
						<p className={classes.subtitle}>
							After 30 years on the road, we truly are the experts on all things New
							Zealand. Let us share and inspire you to experience our New Zealand with
							you.
						</p>
					</div>
					<div className={classes.galleryWrapper}>
						<div className={classes.a}>
							<h2>guide to skiing new zealand on a budget</h2>
						</div>
						<div className={classes.b}>
							<h2>queenstown</h2>
						</div>
						<div className={classes.c}>
							<h2>explore new zealand's great walk</h2>
						</div>
						<div className={classes.d}>
							<h2>bungy</h2>
						</div>
						<div className={classes.e}>
							<h2>solo travel</h2>
						</div>
						<div className={classes.f}>
							<h2>Māori culture</h2>
						</div>
					</div>
				</Fragment>

    )
}

export default Highlights;