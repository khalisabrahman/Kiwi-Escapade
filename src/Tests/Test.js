import { Button } from '@material-ui/core';
import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import styles from '../styles/HighlightStyles';
import { withStyles } from '@material-ui/core/styles';
import Boop from '../Components/Boop';

const Test = () => {
   
	const props2 = useSpring({
		config: { duration: 2000 },
		opacity: 1,
		from: { opacity: 0 },
	});
	

	return (
		<>
			<animated.h1 style={props2}>I will also fade in</animated.h1>
			<Boop rotation={20} timing={300}>
				<Button
					variant='contained'
					onClick={() => {
						alert('clicked');
					}}
				>
					READ MORE
				</Button>
			</Boop>
			
		</>
	);
};

export default withStyles(styles, { withTheme: true })(Test);
