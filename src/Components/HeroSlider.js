import React from 'react';
import { Glide } from 'react-glide';
import 'react-glide/lib/reactGlide.css';
import queenstown from '../images/queenstown.jpg';
import kokatahi from '../images/Kokatahi.jpg';
import mtcook from '../images/Mtcook.jpg';
import video from '../assets/Lake_Mountain_Timelapse.mp4';
import MountainCook from '../images/MountCook.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	hero: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		position: 'relative',
		color: 'white',
		height: '100%',
	},
	heroBackground: {
		position: 'absolute',
		height: '570px',
		width: '100%',
		objectFit: 'cover',
		top: 0,
		left: 0,
		zIndex: -1,
  },
  heroText: {
    display: 'flex',
    flexDirection: 'column'
  },
  heroTitle: {
    fontSize: '3.5rem'
  }
});

function HeroSlider() {
	const classes = useStyles();
	return (
		<Glide
			height={'570px'}
			width={'100%'}
			// autoPlay={true}
			// autoPlaySpeed={3500}
			dots={false}
			infinite={true}
		>
			<div className={classes.hero}>
				<div className={classes.heroText}>
					<h1 className={classes.heroTitle} >New Zealand's Best Group Tours</h1>
					<p>Award-winning Small Group Tours that take you to the heart of New Zealand.</p>
				</div>

				<img src={queenstown} className={classes.heroBackground} />
			</div>

			<img
				src={kokatahi}
				style={{ height: '570px', width: '100%', objectFit: 'cover', top: 0 }}
			/>
			<img
				src={mtcook}
				style={{ height: '570px', width: '100%', objectFit: 'cover', top: 0 }}
			/>
			<img
				src={MountainCook}
				style={{ height: '570px', width: '100%', objectFit: 'cover', top: 0 }}
			/>
		</Glide>
	);
}

export default HeroSlider;
