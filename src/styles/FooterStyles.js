const styles = (theme) => ({
	iconStyle: {
		width: '32px',
		height: '32px',
	},
	footer: {
		backgroundColor: '#28527a',
		overflow: 'auto',
		width: '100vw',
	},
	gutterMain: {
		display: 'flex',
		justifyContent: 'center',

		[theme.breakpoints.down('sm')]: {},
	},
	footerIcons: {
		display: 'flex',
	},
	footerBox: {
		margin: '20px',

		'& a': {
			color: 'inherit',
		},
		'& a:hover': {
			color: '#f4d160',
		},
	},
});

export default styles;
