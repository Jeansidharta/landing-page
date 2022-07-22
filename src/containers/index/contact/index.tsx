import React, { FC } from 'react';
import styled from 'styled-components';
import Images from '../../../images';

const Root = styled.div`
	padding: 67px 75px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const Title = styled.h2`
	margin: 0 0 100px 0;
	font-weight: normal;
	font-size: 50px;
	max-width: 600px;
`;

const ContactItems = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 24px;
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	column-gap: 16px;
	font-size: 40px;
`;

const IconContainer = styled.div`
	width: 60px;
	height: 60px;
`;

export const Contact: FC<{}> = ({}) => {
	return (
		<Root>
			<Title>Fale com a gente:</Title>
			<ContactItems>
				<Item>
					<IconContainer>
						<Images.Icons.Email />
					</IconContainer>
					<a href="mailto:contato@techviz.me">contato@techviz.me</a>
				</Item>
				<Item>
					<IconContainer>
						<Images.Icons.Whatsapp />
					</IconContainer>
					<a href="wa.me/5516992557327" rel="noopener noreferrer" target="_blank">
						+55 16 99255-7327
					</a>
				</Item>
				<Item>
					<IconContainer>
						<Images.Icons.LocationPin />
					</IconContainer>
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://www.google.com.br/maps/place/Wikilab+Coworking/@-22.0132538,-47.8932051,15.08z/data=!4m5!3m4!1s0x94b8773ada06bdbf:0xe02725957861d221!8m2!3d-22.0179764!4d-47.892865"
					>
						R. Conde do Pinhal, 1762 - Nucleo Res. Silvio Vilari, São Carlos - SP, 13560-648
					</a>
				</Item>
			</ContactItems>
		</Root>
	);
};
