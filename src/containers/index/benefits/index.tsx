import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../../components/reusable/button';
import Images from '../../../images';

const Root = styled.div`
	padding: 32px 64px;
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

const BenefitBox = styled.div`
	width: 375px;
	height: 375px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 0;
	border: 1px solid black;
	row-gap: 32px;
`;

const BenefitIcon = styled.div`
	width: 100px;
	height: 100px;
`;

const BenefitText = styled.p`
	margin: 0;
	font-size: 30px;
	text-align: center;
`;

const Benefits: FC<{}> = ({}) => {
	return (
		<Root>
			<Title>
				Benefícios com <strong>impactos tangíveis no seu ROI.</strong>
			</Title>
			<BenefitsContainer>
				<BenefitBox>
					<BenefitIcon>
						<Images.Icons.DownwardChart />
					</BenefitIcon>
					<BenefitText>
						Reduza seus custos em
						<br />
						estratégias de DE&I.
					</BenefitText>
				</BenefitBox>
				<BenefitBox>
					<BenefitIcon>
						<Images.Icons.Dialogs />
					</BenefitIcon>
					<BenefitText>
						Entenda o
						<br />
						engajamento entre
						<br />
						seus colaboradores.
					</BenefitText>
				</BenefitBox>
				<BenefitBox>
					<BenefitIcon>
						<Images.Icons.UpwardsChartWithBars />
					</BenefitIcon>
					<BenefitText style={{ fontSize: 25 }}>
						Saiba como as iniciativas de
						<br />
						diversidade impactam na
						<br />
						performance seu negócio.
					</BenefitText>
				</BenefitBox>
				<BenefitBox>
					<BenefitIcon>
						<Images.Icons.ExitDoor />
					</BenefitIcon>
					<BenefitText>
						Controle o turnover da
						<br />
						sua empresa.
					</BenefitText>
				</BenefitBox>
			</BenefitsContainer>
			<Button>QUERO UMA AVALIAÇÃO GRÁTIS</Button>
		</Root>
	);
};

export default Benefits;
