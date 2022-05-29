import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../../components/reusable/button';

const Root = styled.div`
	height: 100vh;
	padding: 32px 64px;
	display: grid;
	grid-template-columns: 50% 50%;
`;

const PriceContainer = styled.div``;

const CallToActionContainer = styled.div``;

const CallToActionText = styled.p``;

const Price = styled.p`
	margin: 0;
`;

const Prices: FC<{}> = ({}) => {
	return (
		<Root>
			<CallToActionContainer>
				<CallToActionText>
					Você poderá ter nosso Censo de DE&I e entrevistas com as lideranças de sua empresa por
					apenas 4,99 por colaborador. Aproveite que é por pouco tempo!
				</CallToActionText>
				<Button>Agendar Consultoria Grátis</Button>
			</CallToActionContainer>
			<PriceContainer>
				<Price>R$ 9,99</Price>
			</PriceContainer>
		</Root>
	);
};

export default Prices;
