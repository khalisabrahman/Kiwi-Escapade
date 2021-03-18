import React from 'react';
import Boop from '../Components/Boop'
import { Spring } from 'react-spring/';
import styles from '../styles/HighlightStyles';
import { withStyles } from '@material-ui/core/styles';

const Test2 = (props) => {
	const { classes } = props;
	return (
		<Boop rotation={20} timing={300}>
			<div>
				Whether you’re a seasoned shredder, a bit of a snow bunny, or a complete
				punter, hitting the mountain is a perfect choice.
			</div>
		</Boop>
	);
};

export default withStyles(styles, { withTheme: true })(Test2);
