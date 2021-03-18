import React from 'react';
import { animated, useSpring } from 'react-spring';
import useAppear from '../hooks/use-appear';

const Appear = ( { children, ...boopConfig } ) => {
	// const [isBooped, setIsBooped] = React.useState(false);

	// const style = useSpring({
	// 	display: 'inline-block',
	// 	backfaceVisibility: 'hidden',
	// 	opacity: isBooped ? 1 : 0,
    //     cursor: 'pointer',
	// 	background: 'rgba(0, 0, 0, 0.25)'
	// });

	// const trigger = (value) => {
	// 	setIsBooped(value);
	// };

	const [style, styleBackground, trigger, trigger2] = useAppear(boopConfig);
	return (
		<animated.span
			onMouseEnter={trigger}
			onMouseLeave={trigger2}
			style={style}
		>
			{children}
		</animated.span>
	);
};

export default Appear;
