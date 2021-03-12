import React, { Fragment } from 'react';
import styles from '../styles/HighlightStyles';
import { withStyles } from '@material-ui/core/styles';
import { useSpring, animated } from "react-spring";

const Highlights = (props) => {
	const { classes } = props;
	const [{transform, visibility, heightP}, set] = useSpring(() => ({transform: 'translateY(0px)', visibility: 'hidden', maxHeight: 'auto'}));


	return (
		<Fragment>
			
			<div className={classes.section}>
				<h1 className={classes.title}>NEW ZEALAND HIGHLIGHTS</h1>
				<p className={classes.subtitle}>
					After 30 years on the road, we truly are the experts on all things New
					Zealand. Let us share and inspire you to experience our New Zealand with
					you.
				</p>
			</div>

			<div className={classes.galleryWrapperContainer}>
				<div className={classes.galleryWrapper}>
					<animated.div
						className={classes.a}
						onMouseOver={() => set({transform: 'translateY(-10px)', visibility: 'visible', height: '10px'})}
						onMouseOut={() => set({transform: 'translateY(0px)', visibility: 'hidden', height: '0'})}
					>
						<div className={classes.hoverTint}></div>
						<div className={classes.mainHighlight}>
							<animated.h2
								style={{transform}}
							>
								guide to skiing new zealand on a budget
							</animated.h2>
							<div>
								<animated.p className={classes.hoverDesc}  style={{visibility, transform, heightP}}>
									Whether you’re a seasoned shredder, a bit of a snow bunny, or a
									complete punter, hitting the mountain is a perfect choice.{' '}
								</animated.p>
							</div>
						</div>
					</animated.div> 
					 <animated.div
						className={classes.b}
						onMouseOver={() => set({transform: 'translateY(-10px)', visibility: 'visible', height: '10px'})}
						onMouseOut={() => set({transform: 'translateY(0px)', visibility: 'hidden', height: '0'})}
					>
						<div className={classes.hoverTint}></div>
						<div className={classes.mainHighlight}>
							<animated.h2
								style={{transform}}
							>
								queenstown
							</animated.h2>
							<div>
								<animated.p className={classes.hoverDesc}  style={{visibility, transform, heightP}}>
									Whether you’re a seasoned shredder, a bit of a snow bunny, or a
									complete punter, hitting the mountain is a perfect choice.{' '}
								</animated.p>
							</div>
						</div>
					</animated.div>
					<animated.div
						className={classes.c}
						onMouseOver={() => set({transform: 'translateY(-10px)', visibility: 'visible', height: '10px'})}
						onMouseOut={() => set({transform: 'translateY(0px)', visibility: 'hidden', height: '0'})}
					>
						<div className={classes.hoverTint}></div>
						<div className={classes.mainHighlight}>
							<animated.h2
								style={{transform}}
							>
								explore new zealand's great walk
							</animated.h2>
							<div>
								<animated.p className={classes.hoverDesc}  style={{visibility, transform, heightP}}>
									Whether you’re a seasoned shredder, a bit of a snow bunny, or a
									complete punter, hitting the mountain is a perfect choice.{' '}
								</animated.p>
							</div>
						</div>
					</animated.div>
					<animated.div
						className={classes.d}
						onMouseOver={() => set({transform: 'translateY(-10px)', visibility: 'visible', height: '10px'})}
						onMouseOut={() => set({transform: 'translateY(0px)', visibility: 'hidden', height: '0'})}
					>
						<div className={classes.hoverTint}></div>
						<div className={classes.mainHighlight}>
							<animated.h2
								style={{transform}}
							>
								bungy
							</animated.h2>
							<div>
								<animated.p className={classes.hoverDesc}  style={{visibility, transform, heightP}}>
									Whether you’re a seasoned shredder, a bit of a snow bunny, or a
									complete punter, hitting the mountain is a perfect choice.{' '}
								</animated.p>
							</div>
						</div>
					</animated.div>
					<animated.div
						className={classes.e}
						onMouseOver={() => set({transform: 'translateY(-10px)', visibility: 'visible', height: '10px'})}
						onMouseOut={() => set({transform: 'translateY(0px)', visibility: 'hidden', height: '0'})}
					>
						<div className={classes.hoverTint}></div>
						<div className={classes.mainHighlight}>
							<animated.h2
								style={{transform}}
							>
								solo travel
							</animated.h2>
							<div>
								<animated.p className={classes.hoverDesc}  style={{visibility, transform, heightP}}>
									Whether you’re a seasoned shredder, a bit of a snow bunny, or a
									complete punter, hitting the mountain is a perfect choice.{' '}
								</animated.p>
							</div>
						</div>
					</animated.div>
					<animated.div
						className={classes.f}
						onMouseOver={() => set({transform: 'translateY(-10px)', visibility: 'visible', height: '10px'})}
						onMouseOut={() => set({transform: 'translateY(0px)', visibility: 'hidden', height: '0'})}
					>
						<div className={classes.hoverTint}></div>
						<div className={classes.mainHighlight}>
							<animated.h2
								style={{transform}}
							>
								Māori culture
							</animated.h2>
							<div>
								<animated.p className={classes.hoverDesc}  style={{visibility, transform, heightP}}>
									Whether you’re a seasoned shredder, a bit of a snow bunny, or a
									complete punter, hitting the mountain is a perfect choice.{' '}
								</animated.p>
							</div>
						</div>
					</animated.div> 
				</div> 
			</div>
		</Fragment>
	);
};

export default withStyles(styles, { withTheme: true })(Highlights);
