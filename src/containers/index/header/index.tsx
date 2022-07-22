import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '../../../components/reusable/button';
import Images from '../../../images';

const Root = styled.div`
	min-height: 100vh;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 67px 75px;
	justify-content: space-between;
`;

const Top = styled.div``;

const Middle = styled.div`
	align-self: center;
	margin: 80px 0;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Logo = styled(Images.Logo)`
	height: 80px;
	align-self: flex-start;
	width: auto;
	padding: 17px;
`;

const Title = styled.h1`
	margin: 0;
	font-size: 62px;
	font-weight: normal;
`;

const Subtitle = styled.p`
	margin: 0;
	font-size: 33px;
`;

const Left = styled.div``;

const Text = styled.p`
	font-size: 40px;
	margin: 0 0 80px 0;
	max-width: 650px;
`;

const Right = styled.div``;

const CapeIlustration = styled(Images.CapeIlustration)`
	max-width: 700px;
`;

const BlueText = styled.span`
	background-color: ${props => props.theme.colors.primary.main};
	color: ${props => props.theme.colors.white.full};
`;

const Header: FC<{}> = ({}) => {
	return (
		<Root>
			<Top>
				<Logo />
			</Top>
			<Middle>
				<Title>
					<strong>DE&I</strong> data driven
				</Title>
				<Subtitle>
					<BlueText>D</BlueText>iversidade <BlueText>E</BlueText>quidade <BlueText>&</BlueText>{' '}
					<BlueText>I</BlueText>
					nclusão
				</Subtitle>
			</Middle>
			<Bottom>
				<Left>
					<Text>
						Faça a <strong>gestão de DE&I</strong> da sua empresa{' '}
						<strong>orientada por dados</strong> com a <strong>Tech Viz!</strong>
					</Text>
					<Button>QUERO UMA AVALIAÇÃO GRÁTIS</Button>
				</Left>
				<Right>
					<CapeIlustration />
				</Right>
			</Bottom>
		</Root>
	);
};

export default Header;
