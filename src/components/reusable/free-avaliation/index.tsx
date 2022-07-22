import styled from 'styled-components';
import { CALENDLY_URL } from '../../../constants/calendly-url';
import Button from '../button';

export const FreeAvaliation = styled(Button).attrs({
	isLink: true,
	href: CALENDLY_URL,
	rel: 'noopener noreferrer',
	target: '_blank',
	children: 'QUERO UMA AVALIAÇÃO GRÁTIS',
})``;
