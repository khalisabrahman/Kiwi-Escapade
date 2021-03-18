import React from 'react';
import { useSpring } from 'react-spring';

function useAppear() {
  const [isHovered, setisHovered] = React.useState(false);
  const style = useSpring({
        display: 'inline-block',
		backfaceVisibility: 'hidden',
		opacity: isHovered ? 1 : 0,
        cursor: 'pointer',
    
    
		
  });

  const styleBackground = useSpring({
      cursor: 'pointer',
  })

  const trigger = React.useCallback(() => {
    setisHovered(true);
  }, []);

  const trigger2 = React.useCallback(() => {
    setisHovered(false);
  }, []);
  return [style, styleBackground, trigger, trigger2];
}

export default useAppear;