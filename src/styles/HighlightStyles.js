import snow from '../images/Snow.jpg';
import queenstownView from '../images/queenstownView.jpg';
import hiking from '../images/hiking.jpg';
import bungy from '../images/bungy.jpg';
import solo from '../images/solo.jpg';
import maori from '../images/maori.jpg';

const styles = (theme) => ({
	section: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		alignItems: 'center',
		marginBottom: '30px',
		[theme.breakpoints.down('md')]: {
			marginBottom: '10px'
		},
	},
	title: {
		marginTop: '100px',
		marginBottom: '0px',
		display: 'flex',
		justifyContent: 'center',
		fontSize: '2.75rem',
		fontWeight: '900',
		fontFamily: 'catamaran',
		textAlign: 'center',
		[theme.breakpoints.down('md')]: {
			fontSize: '1.4rem'
		},
	},
	subtitle: {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
		width: '60%',
		padding: '0',
		marginTop: '0px',
	},
	galleryWrapperContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: '100vw',
	},
	galleryWrapper: {
		height: '100vh',
		marginTop: '60px',
		fontSize: '1.5em',
		color: 'white',
		textTransform: 'uppercase',
		textAlign: 'center',
		display: 'grid',
		gridTemplateRows: '1fr 1fr',
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		gridTemplateAreas: `
		'a a b c'
		'd e f f'
		` ,
		gridGap: '5px',
		[theme.breakpoints.down('lg')]: {
			gridTemplateColumns: '0.7fr 0.3fr 0.3fr 0.7fr',
			gridTemplateRows: '1fr 1fr 1fr',
			gridTemplateAreas: `
			'a a a b'
			'c c d d'
			'e f f f'
			`
		},
		[theme.breakpoints.down('md')]: {
			gridTemplateColumns: '1fr 1fr',
			gridTemplateRows: '1fr 1fr 1fr',
			gridTemplateAreas: `
			'a b'
			'c d'
			'e f'
			`
		},
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: '1fr',
			gridTemplateRows: '1fr',
			gridTemplateAreas: `
			'a'
			'b'
			'c'
			'd'
			'e'
			'f'
			`
		}
	},
	
	mainHighlight: {
		
		color: 'white',
		display: 'block',
		margin: '0px',
		[theme.breakpoints.down('lg')]: {
			fontSize: '0.9rem'
		}
	},
	a: {
		position: 'relative',
		gridArea: 'a',
		background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${snow})`,
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		
	},
	b: {
		gridArea: 'b',
		background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)),url(${queenstownView})`,
		backgroundPosition: 'bottom center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	c: {
		gridArea: 'c',
		background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)),url(${hiking})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	d: {
		background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)),url(${bungy})`,
		backgroundPosition: 'bottom center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gridArea: 'd',
		[theme.breakpoints.down('md')]: {
			backgroundPosition: 'center',
		}
	},
	e: {
		gridArea: 'e',
		background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)),url(${solo})`,
		backgroundPosition: 'top center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			backgroundPosition: 'center',
		}
	},
	f: {
		gridArea: 'f',
		background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)),url(${maori})`,
		backgroundPosition: 'top center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	App: {
		fontFamily: 'sans-serif',
		textAlign: 'center',
	},

	button: {
		display: 'inline-block',
		padding: '1em 2em',
		background: '#5dc77a',
		color: '#fff',
		textDecoration: 'none',
		fontSize: '1.5em',
		fontWeight: '700',
		border: 'none',
		cursor: 'pointer',
		position: 'relative',
		overflow: 'hidden',
		marginBottom: '2em',
		width: '15ch',
	},

	hoverDesc: {
		display: 'none',
		fontSize: '1rem',
		textTransform: 'none',
		opacity: '0',
		overflow: 'hidden',
		[theme.breakpoints.down('lg')]: {
			fontSize: '0.95rem'
		}
		
	
	}
});

export default styles;
