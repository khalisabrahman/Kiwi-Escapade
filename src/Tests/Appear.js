import React from 'react';
import { animated, useSpring } from 'react-spring';

 const Appear = ({ rotation = 0, timing = 1000, children }) => {
     const [isBooped, setIsBooped] = React.useState(false);

     const style = useSpring({
         transform: isBooped ? 'translateY(-10px)' : 'translateY(0px)',
         backfaceVisibility: 'hidden',
        display: 'inline-block',
         visibility: 'visible',
         
         
     })

     React.useEffect(() => {
         if (!isBooped) {
             return;
         }

         const timeoutId =  window.setTimeout(() => {
            setIsBooped(false);
         }, timing)

         return () => {
             window.clearTimeout(timeoutId);
         };
     }, [isBooped, timing])

    const trigger = () => {
        setIsBooped(true);
    }
    return (
        <animated.span onMouseEnter={trigger} style={style}>
            {children}
        </animated.span>
    )
}

export default Appear;
