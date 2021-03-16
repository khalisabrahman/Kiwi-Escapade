import React, { Fragment, useState, useEffect } from 'react';
import styles from '../styles/HighlightStyles';
import { withStyles } from '@material-ui/core/styles';
import { useSpring, animated } from 'react-spring';
import Boop from './Boop';
import { Button } from '@material-ui/core';
import { useMeasure } from 'react-use';
import BusIcon from '../icons/BusIcon';

const Highlights = (props) => {
	const { classes } = props;
	// const [{ transform, visibility, heightP }, set] = useSpring(() => ({
	// 	transform: 'translateY(0px)',
	// 	visibility: 'hidden',
	// 	maxHeight: 'auto',
	// }));
	// const [isBooped, setIsBooped] = React.useState(false);
	const defaultHeight = '5px';

	// // Manages the open or cloased state of the accordion
	const [open, toggle] = useState(false);

	// // The height of the content inside of the accordion
	const [contentHeight, setContentHeight] = useState(defaultHeight);

	// // Gets the height of the element (ref)
	// const [ref, { height }] = useMeasure();

	// const trigger = () => {
	// 	setIsBooped(true);
	// };

	// const [{height, visibility}, set] = useSpring(() => ({
	// 	height: open ? `${contentHeight}px` : defaultHeight,
	// 	visibility: 'visible',
	// }))

	const [{ y, color, visibility }, set] = useSpring(() => ({
		y: 100,
		color: '#fff',
		visibility: 'visible',
	}));

	// const expand = useSpring({
	// 	config: { friction: 10 },
	// 	height: open ? `${contentHeight}px` : defaultHeight,
	// });

	// const spin = useSpring({
	// 	config: { friction: 10 },
	// 	transform: open ? "rotate(180deg)" : "rotate(0deg)",

	//   });

	// useEffect(() => {
	// 	//Sets initial height
	// 	setContentHeight(height);

	// 	//Adds resize event listener
	// 	window.addEventListener('resize', setContentHeight(height));

	// 	// Clean-up
	// 	return window.removeEventListener('resize', setContentHeight(height));
	// }, [height]);

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
					<div className={classes.a}>
						<div>
							<div className={classes.hoverTint}></div>
							<Boop>
								<div className={classes.mainHighlight}>
									<h2>guide to skiing new zealand on a budget</h2>

									<div>
										<p className={classes.hoverDesc}>
											Whether you’re a seasoned shredder, a bit of a snow bunny, or a
											complete punter, hitting the mountain is a perfect choice.
										</p>
									</div>
								</div>
							</Boop>
						</div>
					</div>

					<div className={classes.b}>
						<div>
							<div className={classes.hoverTint}></div>
							<Boop>
								<div className={classes.mainHighlight}>
									<h2>queenstown</h2>

									<div>
										<p className={classes.hoverDesc}>
										Adrenaline capital of the world, Queenstown delivers all the goods
											you could ever want from one town.
										</p>
									</div>
								</div>
							</Boop>
						</div>
					</div>

					<div className={classes.c}>
						<div>
							<div className={classes.hoverTint}></div>
							<Boop>
								<div className={classes.mainHighlight}>
									<h2>explore new zealand's great walk</h2>

									<div>
										<p className={classes.hoverDesc}>
										We've compiled a list of New Zealand's 9 Great Walks that will take you
									through the country;s most stunning and breathtaking places.
										</p>
									</div>
								</div>
							</Boop>
						</div>
					</div>

					<div className={classes.d}>
						<div>
							<div className={classes.hoverTint}></div>
							<Boop>
								<div className={classes.mainHighlight}>
									<h2>bungy</h2>

									<div>
										<p className={classes.hoverDesc}>
										Bungy from the World's 1st Commercial Bungy Jump, the historic Kawarau
									Bridge
										</p>
									</div>
								</div>
							</Boop>
						</div>
					</div>

					<div className={classes.e}>
						<div>
							<div className={classes.hoverTint}></div>
							<Boop>
								<div className={classes.mainHighlight}>
									<h2>solo travel</h2>

									<div>
										<p className={classes.hoverDesc}>
										So you want to explore New Zealand but the problem is you've got no one
									to go with? No worries!
										</p>
									</div>
								</div>
							</Boop>
						</div>
					</div>

					<div className={classes.f}>
						<div>
							<div className={classes.hoverTint}></div>
							<Boop>
								<div className={classes.mainHighlight}>
									<h2>Māori culture</h2>

									<div>
										<p className={classes.hoverDesc}>
										Experience the real New Zealand with Tamaki Māori Village
										</p>
									</div>
								</div>
							</Boop>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default withStyles(styles, { withTheme: true })(Highlights);
