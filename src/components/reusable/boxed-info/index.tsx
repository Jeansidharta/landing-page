import React, { FC, PropsWithChildren, ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';

const Root = styled.div`
	width: 375px;
	height: 375px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 0;
	border: 1px solid black;
	row-gap: 32px;
	font-size: 30px;
`;

const Icon = styled.div`
	width: 100px;
	height: 100px;
`;

const Text = styled.p`
	margin: 0;
	text-align: center;
	font-size: inherit;
`;

export const BoxedInfo: FC<PropsWithChildren<{ icon: ReactNode; style?: CSSProperties }>> = ({
	children,
	icon,
	style,
}) => {
	return (
		<Root style={style}>
			<Icon>{icon}</Icon>
			<Text>{children}</Text>
		</Root>
	);
};
