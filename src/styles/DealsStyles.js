const styles = (theme) => ({
    title: {
		marginTop: '50px',
		marginBottom: '0px',
		display: 'flex',
		justifyContent: 'center',
		fontSize: '2.75rem',
		fontWeight: '900',
		fontFamily: 'catamaran',
		[theme.breakpoints.down('sm')]: {
			fontSize: '1.1rem'
		}
	},
	subtitle: {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		width: '70%',
		padding: '0',
		marginTop: '0px',
	},
	dealsContainer: {
		display: 'flex',
		justifyContent: 'center',
		position: 'relative',
		marginBottom: '70px',
		[theme.breakpoints.down('lg')]: {
			flexDirection: 'column',
			alignItems: 'center'
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: '0px',
		}
	},

	dealBox: {
		height: '393px',
		width: '278px',
		margin: '15px',
		position: 'relative',
	},
	dealImage: {
		width: '100%',
		objectFit: 'cover',
		height: '393px',
	},
	dealTitle: {
		fontWeight: '900',
		fontFamily: 'catamaran',
		fontSize: '1.2rem',
		position: 'absolute',
		top: '15px',
		left: '15px',
		textTransform: 'uppercase',
		color: 'white',
		margin: '0',
		lineHeight: '20px',
		
	},
	label: {
		position: 'relative',
		clear: 'both',
		color: 'white',
		fontSize: '0.8rem',
		fontWeight: '600',
		background: '#30353a',
		width: '13ch',
	},

	dealMain: {
		position: 'absolute',
		fontWeight: '900',
		fontFamily: 'catamaran',
		bottom: '25px',
		left: '15px',
		color: 'white',
		margin: '0',

		lineHeight: '20px',
		'& h3': {
			fontSize: '1.3rem',
			textTransform: 'uppercase',
		},
		'& h4': {
			fontSize: '1rem',
			textTransform: 'uppercase',
		},
		
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
})

export default styles;