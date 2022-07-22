import React, { FC } from 'react';
import styled from 'styled-components';
import { BoxedInfo } from '../../../components/reusable/boxed-info';
import Button from '../../../components/reusable/button';
import Images from '../../../images';

const Root = styled.div`
	padding: 67px 75px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const Title = styled.h2`
	margin: 0;
	font-weight: normal;
	font-size: 50px;
	max-width: 600px;
`;

const BenefitsContainer = styled.div`
	display: flex;
	column-gap: 24px;
`;

const Benefits: FC<{}> = ({}) => {
	return (
		<Root>
			<Title>
				Benefícios com <strong>impactos tangíveis no seu ROI.</strong>
			</Title>
			<BenefitsContainer>
				<BoxedInfo icon={<Images.Icons.DownwardChart />}>
					Reduza seus custos em
					<br />
					estratégias de DE&I.
				</BoxedInfo>
				<BoxedInfo icon={<Images.Icons.Dialogs />}>
					Entenda o
					<br />
					engajamento entre
					<br />
					seus colaboradores.
				</BoxedInfo>
				<BoxedInfo icon={<Images.Icons.UpwardsChartWithBars />}>
					Saiba como as iniciativas de
					<br />
					diversidade impactam na
					<br />
					performance seu negócio.
				</BoxedInfo>
				<BoxedInfo icon={<Images.Icons.ExitDoor />}>
					Controle o turnover da
					<br />
					sua empresa.
				</BoxedInfo>
			</BenefitsContainer>
			<Button>QUERO UMA AVALIAÇÃO GRÁTIS</Button>
		</Root>
	);
};

export default Benefits;
