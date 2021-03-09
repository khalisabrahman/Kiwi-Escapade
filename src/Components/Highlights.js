import React, { Fragment } from 'react';
import styles from '../styles/HighlightStyles';
import { withStyles } from '@material-ui/core/styles';
import { useSpring, animated, config } from 'react-spring';

const Highlights = (props) => {
	const { classes } = props;

	const [active, setActive] = React.useState(false);
	const classSpring = useSpring({
		transform: active ? 'translateY(-10px)' : 'translateY(0px)',
		visibility: active ? 'visible' : 'hidden' 
	});

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
						onMouseOver={() => setActive(true)}
						onMouseOut={() => setActive(false)}
					>
						<div className={classes.hoverTint}></div>
						<div className={classes.mainHighlight}>
							<animated.h2
								style={{
									transform: classSpring.transform,
								}}
							>
								guide to skiing new zealand on a budget
							</animated.h2>
							<div>
								<animated.p className={classes.hoverDesc} style={{
									visibility: classSpring.visibility,
									transform: classSpring.transform,
								}}>
									Whether you’re a seasoned shredder, a bit of a snow bunny, or a
									complete punter, hitting the mountain is a perfect choice.{' '}
								</animated.p>
							</div>
						</div>
					</animated.div>
					<animated.div
						className={classes.b}
						onMouseOver={() => setActive(true)}
						onMouseOut={() => setActive(false)}
					>
						<div className={classes.hoverTint}></div>
						<div className={classes.mainHighlight}>
							<animated.h2
								style={{
									transform: classSpring.transform,
								}}
							>
								queenstown
							</animated.h2>
							<div>
								<animated.p className={classes.hoverDesc} style={{
									visibility: classSpring.visibility,
									transform: classSpring.transform,
								}}>
									Whether you’re a seasoned shredder, a bit of a snow bunny, or a
									complete punter, hitting the mountain is a perfect choice.{' '}
								</animated.p>
							</div>
						</div>
					</animated.div>
					<animated.div
						className={classes.c}
						onMouseOver={() => setActive(true)}
						onMouseOut={() => setActive(false)}
					>
						<div className={classes.hoverTint}></div>
						<div className={classes.mainHighlight}>
							<animated.h2
								style={{
									transform: classSpring.transform,
								}}
							>
								explore new zealand's great walk
							</animated.h2>
							<div>
								<animated.p className={classes.hoverDesc} style={{
									visibility: classSpring.visibility,
									transform: classSpring.transform,
								}}>
									Whether you’re a seasoned shredder, a bit of a snow bunny, or a
									complete punter, hitting the mountain is a perfect choice.{' '}
								</animated.p>
							</div>
						</div>
					</animated.div>
					<animated.div
						className={classes.d}
						onMouseOver={() => setActive(true)}
						onMouseOut={() => setActive(false)}
					>
						<div className={classes.hoverTint}></div>
						<div className={classes.mainHighlight}>
							<animated.h2
								style={{
									transform: classSpring.transform,
								}}
							>
								bungy
							</animated.h2>
							<div>
								<animated.p className={classes.hoverDesc} style={{
									visibility: classSpring.visibility,
									transform: classSpring.transform,
								}}>
									Whether you’re a seasoned shredder, a bit of a snow bunny, or a
									complete punter, hitting the mountain is a perfect choice.{' '}
								</animated.p>
							</div>
						</div>
					</animated.div>
					<animated.div
						className={classes.e}
						onMouseOver={() => setActive(true)}
						onMouseOut={() => setActive(false)}
					>
						<div className={classes.hoverTint}></div>
						<div className={classes.mainHighlight}>
							<animated.h2
								style={{
									transform: classSpring.transform,
								}}
							>
								solo travel
							</animated.h2>
							<div>
								<animated.p className={classes.hoverDesc} style={{
									visibility: classSpring.visibility,
									transform: classSpring.transform,
								}}>
									Whether you’re a seasoned shredder, a bit of a snow bunny, or a
									complete punter, hitting the mountain is a perfect choice.{' '}
								</animated.p>
							</div>
						</div>
					</animated.div>
					<animated.div
						className={classes.f}
						onMouseOver={() => setActive(true)}
						onMouseOut={() => setActive(false)}
					>
						<div className={classes.hoverTint}></div>
						<div className={classes.mainHighlight}>
							<animated.h2
								style={{
									transform: classSpring.transform,
								}}
							>
								Māori culture
							</animated.h2>
							<div>
								<animated.p className={classes.hoverDesc} style={{
									visibility: classSpring.visibility,
									transform: classSpring.transform,
								}}>
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
