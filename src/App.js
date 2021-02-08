import { Fragment } from 'react';
import Navbar from './Components/Navbar';
import HeroSlider from './Components/HeroSlider';
import Deals from './Components/Deals';
import Content from './Components/Content';
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
				<Content />
			</ThemeProvider>
		</Fragment>
	);
}

export default App;
