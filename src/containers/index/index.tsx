import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ImageURLs from '../../images/image-urls';
import { deployedURLHome } from '../../constants/deployed-url';
import Header from './header';
import Benefits from './benefits';
import Prices from './prices';
import { AboutUs } from './about-us';
import { Contact } from './contact';

const Main = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.white.background};
`;

/**
 * Visit https://schema.org/docs/full.html for a list of all types to put here
 */
const JSONLD = `{
	"@context": "http://schema.org/",
	"@type": "Thing",
	"name": "Tech Viz",
	"url": "${deployedURLHome}",
	"image": "${ImageURLs.logoPng}"
}`;

export default function Home() {
	return (
		<>
			<Head>
				<title>Tech Viz</title>
				<link rel="canonical" href={deployedURLHome} />
				<script type="application/ld+json">{JSONLD}</script>
				{/* TODO - Set custom page description */}
				{/* <meta name="description" content="My personal description" /> */}
			</Head>
			<Main>
				<Header />
				<Benefits />
				<Prices />
				<AboutUs />
				<Contact />
			</Main>
		</>
	);
}
