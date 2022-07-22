import logo from './tech_viz_logo.svg';
import logoPng from './tech_viz_logo.png';
import logoSquaredPng from './tech_viz_logo_squared.png';
import capeIlustration from './cape-ilustration.svg';

// Icons
import analytics from './icons/analytics.svg';
import checkbox from './icons/checkbox.svg';
import dialogs from './icons/dialogs.svg';
import downwardChart from './icons/downward-chart.svg';
import email from './icons/email.svg';
import exitDoor from './icons/exit-door.svg';
import locationPint from './icons/location-pin.svg';
import medal from './icons/medal.svg';
import research from './icons/research.svg';
import upwardsChartWithBars from './icons/upwards-chart-with-bars.svg';
import whatsapp from './icons/whatsapp.svg';

const ImageURLs = {
	logo,

	/**
	 * The PNG versions of the logo exist to use with the OpenGraph meta tags, because
	 * they don't support SVG. These images SHOULD NOT be used in the website itself,
	 * as the svg version is lighter, and therefore preferable.
	 */
	logoPng,
	logoSquaredPng,
	capeIlustration,

	icons: {
		analytics,
		checkbox,
		dialogs,
		downwardChart,
		email,
		exitDoor,
		locationPint,
		medal,
		research,
		upwardsChartWithBars,
		whatsapp,
	},
};

export default ImageURLs;
