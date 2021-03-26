import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import TravelWalkIcon from '../icons/TravelWalkIcon';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	toolbar: {
		backgroundColor: '#28527a',
		// [theme.breakpoints.down('md')]: {},
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
		color: '#f4d160',
		fontFamily: 'Rock Salt',
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
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleMenuClick = () => {
		setAnchorEl(null);
	};
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	return (
		<div className={classes.root}>
			<Fragment>
				<AppBar position='static'>
					<Toolbar className={classes.toolbar}>
						{/* add a link here */}
						<Typography className={classes.title} variant='h6' noWrap>
							KIWI VACATIONS
							{/* <TravelWalkIcon width='36px' height='36px'/> */}
						</Typography>
						{isMobile ? (
							<>
								<IconButton
									edge='false'
									// className={classes.menuButton}
									color='inherit'
									aria-label='menu'
									onClick={handleMenu}
								>
									<MenuIcon fontSize='large' />
								</IconButton>
								<Menu
									id='menu-appbar'
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={open}
									onClose={() => setAnchorEl(null)}
								>
									<MenuItem onClick={() => handleMenuClick()}>Small Group Tours</MenuItem>
									<MenuItem onClick={() => handleMenuClick()}>About Us</MenuItem>
									<MenuItem onClick={() => handleMenuClick()}>New Zealand Destinations</MenuItem>
									<MenuItem onClick={() => handleMenuClick()}>Travel Info</MenuItem>
								</Menu>
							</>
						) : (
							<>
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
							</>
						)}
					</Toolbar>
				</AppBar>
			</Fragment>
		</div>
	);
}
