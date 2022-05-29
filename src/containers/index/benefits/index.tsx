import React, { FC } from 'react';
import styled from 'styled-components';

const Root = styled.div`
	padding: 32px 64px;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const Title = styled.h1`
	margin: 0;
`;

const FooterTitle = styled.p`
	margin: 0;
	font-size: 24px;
`;

const BenefitsItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	height: 100%;
	justify-items: center;
	align-items: center;
`;

const BenefitRoot = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	row-gap: 16px;
	width: min-content;
	padding: 16px;
	border-radius: 8px;
	box-shadow: ${props => props.theme.shadows.benefit};
	background-color: ${props => props.theme.colors.white.full};
`;

const BenefitText = styled.p`
	margin: 0;
`;

const BenefitIcon = styled.div`
	height: 100px;
	width: 100px;
	background-color: red;
	border-radius: 16px;
`;

const Benefits: FC<{}> = ({}) => {
	const benefits = [
		{ name: 'Redução de custos das estratégias de DE&I', icon: <span /> },
		{ name: 'Censo de Diversidade escalável', icon: <span /> },
		{ name: 'Acompanhamento do Índice de Maturidade de DE&I', icon: <span /> },
		{ name: 'Gestão de Grupos de Afinidade', icon: <span /> },
		{ name: 'Percentual de vagas afirmativas fechadas', icon: <span /> },
		{ name: 'Controle de Turnover em DE&I', icon: <span /> },
	];

	return (
		<Root>
			<Title>Benefícios com impactos tangíveis no seu ROI:</Title>
			<BenefitsItemsContainer>
				{benefits.map(benefit => (
					<BenefitRoot>
						<BenefitIcon />
						<BenefitText>{benefit.name}</BenefitText>
					</BenefitRoot>
				))}
			</BenefitsItemsContainer>
			<FooterTitle>Aproveite nosso valor promocional!</FooterTitle>
		</Root>
	);
};

export default Benefits;
