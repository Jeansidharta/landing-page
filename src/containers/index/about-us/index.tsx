import React, { FC } from 'react';
import styled from 'styled-components';
import { BoxedInfo } from '../../../components/reusable/boxed-info';
import Images from '../../../images';

const Root = styled.div`
	min-height: 100vh;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 67px 75px;
	justify-content: space-between;
`;

const Title = styled.h2`
	margin: 0;
	font-weight: normal;
	font-size: 50px;
`;

const Logo = styled(Images.Logo)`
	width: 700px;
	margin: 50px 60px 140px 60px;
`;

const Text = styled.p`
	margin: 0;
	font-size: 40px;
`;

const Quote = styled.p`
	margin: 80px 0 120px 0;
	font-size: 50px;
	color: ${props => props.theme.colors.primary.main};
	font-weight: bold;
	text-align: center;
`;

const AchievmentsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const AboutUs: FC<{}> = ({}) => {
	return (
		<Root>
			<Title>Conheça a</Title>
			<Logo />
			<Text>
				Somos uma solução de dados para
				<br />
				diagnósticos de Diversidade, Equidade &
				<br />
				Inclusão (DE&I) multistakeholders:
				<br />
				colaboradores, fornecedores, clientes e
				<br />
				conselhos.
				<br />
				<br />
				Trabalhamos com coleta de dados de
				<br />
				qualidade e entregamos resultados
				<br />
				tangíveis.
			</Text>
			<Quote>
				”Queremos te ajudar a reduzir custos em
				<br />
				ações de diversidade e garantir a
				<br />
				concretização da sua entrega de
				<br />
				Diversidade, Equidade e Inclusão baseadas
				<br />
				em dados de qualidade.”
			</Quote>
			<AchievmentsContainer>
				<BoxedInfo icon={<Images.Icons.Medal />}>
					Pioneira em DE&I Analytics
					<br />
					no Brasil.
				</BoxedInfo>
				<BoxedInfo icon={<Images.Icons.Research />}>
					A única solução com pesquisa
					<br />
					científica aplicada ao conceito
					<br />
					de Creating Shared Value.
				</BoxedInfo>
				<BoxedInfo icon={<Images.Icons.Analytics />}>
					Conectamos DE&I à<br />
					perfomance e ROI da sua
					<br />
					empresa.
				</BoxedInfo>
			</AchievmentsContainer>
		</Root>
	);
};
