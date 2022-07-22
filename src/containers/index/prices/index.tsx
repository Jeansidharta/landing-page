import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../../components/reusable/button';
import Images from '../../../images';

const Root = styled.div`
	padding: 67px 75px;
	display: flex;
	flex-direction: column;
`;

const Title = styled.h2`
	maring: 0;
	font-size: 50px;
	font-weight: normal;
`;

const SecondTitle = styled.p`
	maring: 0;
	font-size: 50px;
	font-weight: bold;
`;

const PricesImage = styled(Images.Prices)`
	max-width: 800px;
	align-self: center;
	margin-bottom: 60px;
`;

const BenefitsContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 16px;
	margin-bottom: 90px;
`;

const Benefit = styled.p`
	font-size: 30px;
	margin: 0;
	display: flex;
	align-items: center;
`;

const Checkbox = styled(Images.Icons.Checkbox)`
	width: 25px;
	height: 25px;
	margin-right: 32px;
	position: relative;
	bottom: 2px;
`;

const Prices: FC<{}> = ({}) => {
	return (
		<Root>
			<Title>
				Implemente o que há de <strong>mais inovador</strong> em
				<br />
				<strong>gestão de pessoas</strong> para <strong>aumento de performance.</strong>
			</Title>
			<SecondTitle>DE&I as a Service:</SecondTitle>
			<PricesImage />
			<BenefitsContainer>
				<Benefit>
					<Checkbox /> Censo de Diversidade escalável.
				</Benefit>
				<Benefit>
					<Checkbox /> Dashboard e relatórios de dados comparáveis.
				</Benefit>
				<Benefit>
					<Checkbox /> Acompanhamento do Índice de Maturidade de DE&I
				</Benefit>
				<Benefit>
					<Checkbox /> Métricas e KPIs de People/DE&I Analytics.
				</Benefit>
				<Benefit>
					<Checkbox /> Score Promocional: desempenho e expertise
					<br />
					orientado por dados.
				</Benefit>
			</BenefitsContainer>
			<Button>QUERO UMA AVALIAÇÃO GRÁTIS</Button>
		</Root>
	);
};

export default Prices;
