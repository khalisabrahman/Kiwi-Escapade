const styles = (theme) => ({
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
		marginTop: '20px',
	},
	buttonStyle: {
		width: '20ch',
		backgroundColor: '#f4d160',
	},

	
});

export default styles;
