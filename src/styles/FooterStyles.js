const styles = ((theme) => ({
    iconStyle: {
		width: '32px',
		height: '32px',
	},
	footer: {
		backgroundColor: '#28527a',
		overflow: 'auto',
		width: '100vw'
	},
	gutterMain: {
		display: 'flex',
		justifyContent: 'center',
		// marginRight: '20px',
		[theme.breakpoints.down('sm')]: {
			// marginRight: '5px',
		},
	},
	footerIcons: {
		display: 'flex',
	},
	footerBox: {
		margin: '30px',
        '& a': {
            color: 'inherit'
        },
        '& a:hover': {
            color: '#f4d160'
        }
	},
}));

export default styles;