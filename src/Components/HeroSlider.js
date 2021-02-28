import React, { Fragment } from 'react';
import { Glide } from 'react-glide';
import 'react-glide/lib/reactGlide.css';
import queenstown from '../images/queenstown.jpg';
import kokatahi from '../images/Kokatahi.jpg';
import mtcook from '../images/Mtcook.jpg';
import MountainCook from '../images/MountCook.jpg';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
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
		flexDirection: 'column',
	},
	heroTitle: {
		fontSize: '3.5rem',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
  },
	formContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '20px'
	},
}));

function HeroSlider() {
	const classes = useStyles();
	const [duration, setDuration] = React.useState('');
	const [destination, setDestination] = React.useState('');
	const [travelStyle, setTravelStyle] = React.useState('');

	const handleChangeDuration = (event) => {
		setDuration(event.target.value);
	};

	const handleChangeDestination = (event) => {
		setDestination(event.target.value);
	};

	const handleChangeTravelStyle = (event) => {
		setTravelStyle(event.target.value);
	};
	return (
		<>
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
						<h1 className={classes.heroTitle}>New Zealand's Best Group Tours</h1>
						<p>
							Award-winning Small Group Tours that take you to the heart of New
							Zealand.
						</p>
					</div>

					<img src={queenstown} className={classes.heroBackground} alt='queenstown'/>
				</div>

				<img
					src={kokatahi} alt='kokatahi'
					style={{ height: '570px', width: '100%', objectFit: 'cover', top: 0 }}
				/>
				<img
					src={mtcook} alt='mount cook'
					style={{ height: '570px', width: '100%', objectFit: 'cover', top: 0 }}
				/>
				<img
					src={MountainCook} alt='mount cook'
					style={{ height: '570px', width: '100%', objectFit: 'cover', top: 0 }}
				/>
			</Glide>
				<div className={classes.formContainer}>
					<FormControl outlined className={classes.formControl}>
						<InputLabel id='travel-duration-label'>Travel Time</InputLabel>
						<Select
							labelId='travel-duration-label'
							id='travel-duration'
							value={duration}
							onChange={handleChangeDuration}
							label='Duration'
						>
							<MenuItem value={22}>21+ days</MenuItem>
							<MenuItem value={21}>Up to 21 days</MenuItem>
							<MenuItem value={14}>Up to 14 days</MenuItem>
							<MenuItem value={7}>Up to 7 days</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel id='travel-destination-label'>Where</InputLabel>
						<Select
							labelId='travel-destination-label'
							id='travel-destination'
							value={destination}
							onChange={handleChangeDestination}
							label='Destination'
						>
							<MenuItem value={'North and South'}>North + South Islands</MenuItem>
							<MenuItem value={'South'}>South Island</MenuItem>
							<MenuItem value={'North'}>North Island</MenuItem>
						</Select>
					</FormControl>
					<FormControl className={classes.formControl}>
						<InputLabel id='travel-style-label'>Travel Style</InputLabel>
						<Select
							labelId='travel-style-label'
							id='travel-style'
							value={travelStyle}
							onChange={handleChangeTravelStyle}
							label='Style'
						>
							<MenuItem value={'Small Group Tours'}>Small Group Tours</MenuItem>
							<MenuItem value={'Snow Experience'}>Snow Experience</MenuItem>
							<MenuItem value={'Both'}>Both</MenuItem>
						</Select>
					</FormControl>
					<Button
            variant='contained' 
						onClick={() => {
							alert('clicked');
						}}
						style={{width: '20ch', backgroundColor: '#f4d160'}}
					>
						FIND MY ADVENTURE!
					</Button>
				</div>
		</>
	);
}

export default HeroSlider;
