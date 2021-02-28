import { Fragment } from 'react';
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
});

function App() {
	return (
		<Fragment>
			<ThemeProvider theme={theme}>
				<Navbar />
				<HeroSlider />
				<Deals />
				<TravelStyles />
				<WhyUs />
				<Highlights />
				<Reviews />
				<Stories />
				<Footer />
			</ThemeProvider>
		</Fragment>
	);
}

export default App;
