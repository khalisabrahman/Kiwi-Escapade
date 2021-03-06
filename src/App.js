import React, { Fragment, Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
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
			sm: 429,
			md: 638,
			lg: 768,
			xl: 1000,
		},
	},
});

function App() {
	return (
		<Fragment>
			<CssBaseline>
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
			</CssBaseline>
		</Fragment>
	);
}

export default App;
