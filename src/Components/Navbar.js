import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import TravelWalkIcon from '../icons/TravelWalkIcon';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	toolbar: {
		backgroundColor: '#28527a',
		
	},
	menuButton: {
		marginRight: theme.spacing(2),
		
	},
	title: {
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		color: '#f4d160',
		fontFamily: "'Rock Salt, cursive;'"
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

export default function SearchAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Fragment>
				<AppBar position='fixed'>
					<Toolbar className={classes.toolbar}>
						<Typography className={classes.title} variant='h6' noWrap>
							KIWI VACATIONS
							<i class='fas fa-kiwi-bird'></i>
							<TravelWalkIcon />
						</Typography>
						<MenuItem>Small Group Tours</MenuItem>
						<MenuItem>About Us</MenuItem>
						<MenuItem>New Zealand Destinations</MenuItem>
						<MenuItem>Travel Info</MenuItem>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder='Search…'
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ 'aria-label': 'search' }}
							/>
						</div>
					</Toolbar>
				</AppBar>
				<Toolbar />
			</Fragment>
		</div>
	);
}
