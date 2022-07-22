import React, { FC, PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

const Root = styled.div`
	width: 375px;
	height: 375px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 0;
	border: 1px solid black;
	row-gap: 32px;
`;

const Icon = styled.div`
	width: 100px;
	height: 100px;
`;

const Text = styled.p`
	margin: 0;
	font-size: 30px;
	text-align: center;
`;

export const BoxedInfo: FC<PropsWithChildren<{ icon: ReactNode }>> = ({ children, icon }) => {
	return (
		<Root>
			<Icon>{icon}</Icon>
			<Text>{children}</Text>
		</Root>
	);
};
