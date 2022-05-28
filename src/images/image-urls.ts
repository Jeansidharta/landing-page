import logo from './tech_viz_logo.svg';
import logoPng from './tech_viz_logo.png';
import logoSquaredPng from './tech_viz_logo_squared.png';

const ImageURLs = {
	logo,

	/**
	 * The PNG versions of the logo exist to use with the OpenGraph meta tags, because
	 * they don't support SVG. These images SHOULD NOT be used in the website itself,
	 * as the svg version is lighter, and therefore preferable.
	 */
	logoPng,
	logoSquaredPng,
};

export default ImageURLs;
