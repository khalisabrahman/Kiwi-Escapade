const styles = ((theme) => ({
    iconStyle: {
		width: '32px',
		height: '32px',
	},
	footer: {
		backgroundColor: '#28527a',
	},
	gutterMain: {
		display: 'flex',
		justifyContent: 'center',
		marginRight: '20px',
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