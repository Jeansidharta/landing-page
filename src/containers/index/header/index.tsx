import React, { FC } from 'react';
import styled from 'styled-components';
import TextInput from '../../../components/reusable/text-input';
import CardTemplate from '../../../components/visual/card';
import Images from '../../../images';

const Root = styled.div`
	min-height: 100vh;
	height: 100%;
	display: grid;
	grid-template-columns: 50% 50%;
`;
const BlueSide = styled.div`
	padding: 32px;
	background-color: ${props => props.theme.colors.secondary.main};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Logo = styled(Images.Logo)`
	width: 100%;
	height: max-content;
`;

const Subtitle = styled.p`
	font-size: 24px;
	text-align: center;
`;

const WhiteSide = styled.div`
	padding: 32px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

const Title = styled.h1`
	text-align: center;
	margin: 0;
`;

const Form = styled.form``;

const Card = styled(CardTemplate)`
	border: 1px solid rgba(0, 0, 0, 0.5);
`;

const Header: FC<{}> = ({}) => {
	return (
		<Root>
			<BlueSide>
				<Logo />
				<Subtitle>
					Faça a gestão da Diversidade, Equidade e Inclusão na sua empresa orientada por dados.
				</Subtitle>
			</BlueSide>
			<WhiteSide>
				<Card>
					<Title>Assine com a Tech Viz!</Title>
					<Form>
						<TextInput label="Nome" />
						<TextInput label="Empresa" />
					</Form>
				</Card>
			</WhiteSide>
		</Root>
	);
};

export default Header;
