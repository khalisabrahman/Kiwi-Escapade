import Glide from '@glidejs/glide';
import { useEffect, useRef } from 'react';
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';
import React from 'react';

const sliderConfiguration = {
	type: 'carousel',
	startAt: 0,
	animationTimingFunc: 'ease-in-out',
	gap: 100,
	perView: 3,
};

export default function Content() {
    const ref = React.useRef();
	const slider = new Glide('.glide', sliderConfiguration);

	useEffect(() => {
		return () => slider.mount();
	}, [slider]);

	return (
		<div className='content'>
			<div ref={ref} className='glide'>
				<div className='glide__cover'></div>

				<div className='glide__track' data-glide-el='track'>
					<ul className='glide__slides'>
						<li className='glide__slide'>
							<div className='slide one'>
								<p>1</p>
								<div className='rating'>
									<div className='circle active'></div>
									<div className='circle active'></div>
									<div className='circle active'></div>
									<div className='circle active'></div>
									<div className='circle'></div>
								</div>
								<div className='slider-image'>
									<img src='https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='something' />
									<div className='bookmark'>
										<p>Hello</p>
									</div>
								</div>
							</div>
						</li>

						<li className='glide__slide'>
							<div className='slide two'>
								<p>2</p>
								<div className='rating'>
									<div className='circle active'></div>
									<div className='circle active'></div>
									<div className='circle active'></div>
									<div className='circle active'></div>
									<div className='circle'></div>
								</div>
								<div className='slider-image'>
									<img src='https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='something' />
									<div className='bookmark'>
										<p>Hello</p>
									</div>
								</div>
							</div>
						</li>

						<li className='glide__slide'>
							<div className='slide three'>
								<p>3</p>
								<div className='slider-image'>
									<img src='https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='something' />
									<div className='bookmark'>
										<p>Hello</p>
									</div>
								</div>
							</div>
						</li>

						<li className='glide__slide'>
							<div className='slide four'>
								<p>4</p>
								<div className='slider-image'>
									<img src='https://images.pexels.com/photos/3396657/pexels-photo-3396657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='something' />
									<div className='bookmark'>
										<p>Hello</p>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>

				<div data-glide-el='controls' className='controls'>
					<div data-glide-dir='<' id='prev'>
						<FaArrowAltCircleLeft className='controls-arrow' />
					</div>
					<div data-glide-dir='>' id='next'>
						<FaArrowAltCircleRight className='controls-arrow' />
					</div>
				</div>
			</div>
		</div>
	);
}
