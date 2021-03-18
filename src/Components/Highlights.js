import React, { Fragment } from 'react';
import styles from '../styles/HighlightStyles';
import { withStyles } from '@material-ui/core/styles';
import {  animated } from 'react-spring';
import useAppear from '../hooks/use-appear';


const Highlights = (props) => {
	const { classes } = props;
	const [styleA, styleBackgroundA, triggerA, untriggerA] = useAppear();
	const [styleB, styleBackgroundB, triggerB, untriggerB] = useAppear();
	const [styleC, styleBackgroundC, triggerC, untriggerC] = useAppear();
	const [styleD, styleBackgroundD, triggerD, untriggerD] = useAppear();
	const [styleE, styleBackgroundE, triggerE, untriggerE] = useAppear();
	const [styleF, styleBackgroundF, triggerF, untriggerF] = useAppear();
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
					<animated.div style={styleBackgroundA} className={classes.a} onMouseEnter={triggerA} onMouseLeave={untriggerA} >
						
							<div className={classes.mainHighlight}>
								<h2>guide to skiing new zealand on a budget</h2>

								<animated.p className={classes.hoverDesc} style={styleA}>
									Whether you’re a seasoned shredder, a bit of a snow bunny, or a
									complete punter, hitting the mountain is a perfect choice.
								</animated.p>
							</div>
						
					</animated.div>

					<animated.div style={styleBackgroundB} className={classes.b} onMouseEnter={triggerB} onMouseLeave={untriggerB} >
						
							<div className={classes.mainHighlight}>
								<h2>queenstown</h2>

								<animated.p className={classes.hoverDesc} style={styleB}>
								Adrenaline capital of the world, Queenstown delivers all the goods you
										could ever want from one town.
								</animated.p>
							</div>
						
					</animated.div>

					<animated.div style={styleBackgroundC} className={classes.c} onMouseEnter={triggerC} onMouseLeave={untriggerC} >
						
							<div className={classes.mainHighlight}>
								<h2>explore new zealand's great walk</h2>

								<animated.p className={classes.hoverDesc} style={styleC}>
								We've compiled a list of New Zealand's 9 Great Walks that will take
										you through the country;s most stunning and breathtaking places.
								</animated.p>
							</div>
						
					</animated.div>

					<animated.div style={styleBackgroundD} className={classes.d} onMouseEnter={triggerD} onMouseLeave={untriggerD} >
						
							<div className={classes.mainHighlight}>
								<h2>bungy</h2>

								<animated.p className={classes.hoverDesc} style={styleD}>
								Bungy from the World's 1st Commercial Bungy Jump, the historic Kawarau
										Bridge
								</animated.p>
							</div>
						
					</animated.div>

					<animated.div style={styleBackgroundE} className={classes.e} onMouseEnter={triggerE} onMouseLeave={untriggerE} >
						
							<div className={classes.mainHighlight}>
								<h2>solo travel</h2>

								<animated.p className={classes.hoverDesc} style={styleE}>
								So you want to explore New Zealand but the problem is you've got no
										one to go with? No worries!
								</animated.p>
							</div>
						
					</animated.div>

					<animated.div style={styleBackgroundF} className={classes.f} onMouseEnter={triggerF} onMouseLeave={untriggerF} >
						
							<div className={classes.mainHighlight}>
								<h2>Māori culture</h2>

								<animated.p className={classes.hoverDesc} style={styleF}>
								Experience the real New Zealand with Tamaki Māori Village
								</animated.p>
							</div>
						
					</animated.div>

				</div>
			</div>
		</Fragment>
	);
};

export default withStyles(styles, { withTheme: true })(Highlights);
