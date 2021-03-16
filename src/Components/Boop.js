import React from 'react';
import { animated, useSpring } from 'react-spring';

const Boop = ({ timing = 150, children }) => {
	const [isBooped, setIsBooped] = React.useState(false);

	const style = useSpring({
		display: 'inline-block',
		backfaceVisibility: 'hidden',
		opacity: isBooped ? 1 : 0,
        cursor: 'pointer'
	});

	const trigger = (value) => {
		setIsBooped(value);
	};
	return (
		<animated.span
			onMouseEnter={() => trigger(!isBooped)}
			onMouseLeave={() => trigger(!isBooped)}
			style={style}
		>
			{children}
		</animated.span>
	);
};

export default Boop;
