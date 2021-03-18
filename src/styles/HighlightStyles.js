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
	},
	title: {
		marginTop: '100px',
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
	galleryWrapperContainer: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},
	galleryWrapper: {
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
	},
	
	mainHighlight: {
		
		color: 'white',
		display: 'block',
		margin: '0px',
	},
	a: {
		position: 'relative',
		gridColumn: '1/3',
		gridRow: '1/2',
		background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)), url(${snow})`,
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		
	},
	b: {
		gridColumn: '3/4',
		gridRow: '1/2',
		background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)),url(${queenstownView})`,
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
	},
	e: {
		gridColumn: '2/3',
		gridRow: '2/3',
		background: `linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.1)),url(${solo})`,
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
		
	
	}
});

export default styles;
