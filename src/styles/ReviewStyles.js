import 'react-glide/lib/reactGlide.css';

const styles = (theme) => ({
	title: {
		marginTop: '80px',
		marginBottom: '0px',
		display: 'flex',
		justifyContent: 'center',
		fontSize: '2.75rem',
		fontWeight: '900',
		fontFamily: 'catamaran',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.1rem',
		},
	},
	section: {
		display: 'flex',
		flexDirection: 'column',
		width: '100vw',
		alignItems: 'center',
		marginBottom: '35px'
	},
	stars: {
		color: 'yellow',
	},
	reviewTitle: {
		color: '#8ac4d0',
		textAlign: 'center',
		fontSize: '1.2rem'
	},
	review: {
		color: 'rgb(85, 85, 85)',
		maxWidth: '45ch',
	},
	buttonContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '30px',
	},
	buttonStyle: {
		width: '15ch',
		backgroundColor: '#f4d160',
	},
	
});

export default styles;
