import MountainReflection from '../images/MountainReflection.jpeg';

const styles = (theme) => ({
	title: {
		marginTop: '50px',
		marginBottom: '0px',
		display: 'flex',
		justifyContent: 'center',
		fontSize: '2.75rem',
		fontWeight: '900',
		fontFamily: 'catamaran',
		textAlign: 'center'
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
		minWidth: '100%',
		alignItems: 'center',
		height: '650px',
		background: `url(${MountainReflection})`,
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
		'& a': {
            color: 'inherit'
        },
        '& a:hover': {
            color: '#f4d160'
        }
	},
	iconStyle: {
		width: '48px',
		height: '32px',
	},
	iconContainer: {
		display: 'flex',
	},
	buttonContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
	storiesButton: {
		width: '278px',
		height: '60px',
		padding: '15px',
		backgroundColor: '#f4d160',
		fontSize: '1.1em',
	},
});

export default styles;
