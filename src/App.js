import React, { Fragment, Suspense } from 'react';

import Navbar from './Components/Navbar';
import HeroSlider from './Components/HeroSlider';
import Deals from './Components/Deals';
import TravelStyles from './Components/TravelStyles';
import WhyUs from './Components/WhyUs';
import Highlights from './Components/Highlights';
import Reviews from './Components/Reviews';
import Stories from './Components/Stories';
import Footer from './Components/Footer';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const font = "'Open Sans', sans-serif";
const theme = createMuiTheme({
	typography: {
		fontFamily: font,
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 682,
			md: 896,
			lg: 992,
			xl: 1202,
		},
	},
});

// const TravelStyles = React.lazy(() => import('./Components/TravelStyles'));
// const WhyUs = React.lazy(() => import('./Components/WhyUs'));
// const Highlights = React.lazy(() => import('./Components/Highlights'));
// const Reviews = React.lazy(() => import('./Components/Reviews'));
// const Stories = React.lazy(() => import('./Components/Stories'));
// const Footer = React.lazy(() => import('./Components/Footer'));
// const Test = React.lazy(() => import('./Components/Test'));

function App() {
	return (
		<Fragment>
			<ThemeProvider theme={theme}>
				<Navbar />
				<HeroSlider />
				<Deals />
				<Suspense fallback={<div>Loading...</div>}>
					<TravelStyles />
					<WhyUs />
					<Highlights />
					<Reviews />
					<Stories />
					<Footer />
				</Suspense>
			</ThemeProvider>
		</Fragment>
	);
}

export default App;
