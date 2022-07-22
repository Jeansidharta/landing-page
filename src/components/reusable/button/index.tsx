import React, { FC, PropsWithChildren } from 'react';
import type { DefaultTheme } from 'styled-components';
import styled from 'styled-components';
import SpinnerTemplate from '../spinner';

type ColorDescriptor = string | ((theme: DefaultTheme) => string);

const Root = styled.button<{
	fullWidth: boolean;
	hoverScaleOffset: number;
	backgroundColor: ColorDescriptor;
	textColor: ColorDescriptor;
}>`
	width: ${({ fullWidth }) => (fullWidth ? `100%` : `max-content`)};
	padding: 35px;
	text-align: center;
	align-items: center;
	display: flex;
	justify-content: center;
	border: 0;
	transition: 200ms;
	cursor: pointer;
	border-radius: 4px;
	font-size: 25px;
	text-decoration: none;
	background-color: ${({ backgroundColor, theme }) =>
		typeof backgroundColor === `string` ? backgroundColor : backgroundColor(theme)};
	color: ${({ textColor, theme }) =>
		typeof textColor === `string` ? textColor : textColor(theme)};
`;

const Spinner = styled(SpinnerTemplate)`
	margin-left: 8px;
`;

/** This is the application's default button. */
const Button: FC<
	PropsWithChildren<{
		/**
		 * How much will the button's size increase/decrease when the user hovers/clicks
		 * on it.
		 */
		hoverScaleOffset?: number;

		backgroundColor?: ColorDescriptor;

		textColor?: ColorDescriptor;

		/**
		 * If true, the button's width will be set to `100%`.
		 */
		fullWidth?: boolean;

		/** Whether the button should show a spinner icon */
		isLoading?: boolean;

		isLink?: boolean;
	}> &
		React.ComponentProps<'button'>
> = ({
	fullWidth = false,
	hoverScaleOffset = 0.1,
	backgroundColor = (theme: DefaultTheme) => theme.colors.primary.main,
	textColor = (theme: DefaultTheme) => theme.colors.white.full,
	ref,
	children,
	isLoading,
	isLink,
	...props
}) => {
	return (
		<Root
			as={isLink ? ('a' as any) : undefined}
			fullWidth={fullWidth}
			hoverScaleOffset={hoverScaleOffset}
			textColor={textColor}
			backgroundColor={backgroundColor}
			{...props}
		>
			{children}
			{isLoading && <Spinner strokeWidth={1} size={15} />}
		</Root>
	);
};

export default Button;
