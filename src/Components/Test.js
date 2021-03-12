import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const Test = () => {
	const props = useSpring({ config: { duration: 5000 },opacity: 1, from: { opacity: 0 } });
    const props2 = useSpring({ config: { duration: 2000 },opacity: 1, from: { opacity: 0 } });
	return (
        <>
            <animated.div style={props}>I will fade in</animated.div>
            <animated.h1 style={props2}>I will also fade in</animated.h1>
        </>
    
    );
};

export default Test;