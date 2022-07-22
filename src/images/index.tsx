/** *************************************************************************
 *                         What is this file?                               *
 *                                                                          *
 * This file contains all imports to all images, icons and etc... It has a  *
 * base component that all images should share, and has to organize all     *
 * images in a single export default object.                                *
 *                                                                          *
 ************************************************************************** */

import { StaticImageData } from 'next/image';
import React from 'react';
import type { FlattenSimpleInterpolation } from 'styled-components';
import styled from 'styled-components';
import ImageURLs from './image-urls';

const hasWebpCounterpartRegex = /\.(png|jpe?g)$/;

const Picture = styled.picture<{ css?: FlattenSimpleInterpolation }>`
	width: 100%;
	height: 100%;
	${({ css }) => css || ``};
`;

const Image = styled.img<{ fit: string }>`
	object-fit: ${({ fit }) => fit};
	width: inherit;
	height: inherit;
	user-drag: none;
	user-select: none;
`;

type BaseImageProps = React.PropsWithChildren<{
	imageData: StaticImageData;
	alt: string;
	css?: FlattenSimpleInterpolation;
	fit?:
		| 'contain'
		| 'cover'
		| 'fill'
		| 'inherit'
		| 'initial'
		| 'none'
		| 'revert'
		| 'scale-down'
		| 'unset';
}> &
	Omit<React.ComponentProps<'picture'>, 'ref'>;

/**
 * This component is the base of all images in the App. It will apply some default styling,
 * and will automaticaly handle webp sources.
 */
const BaseImage = React.forwardRef<HTMLPictureElement, BaseImageProps>(
	({ imageData: { src }, alt, fit = `contain`, ...props }, ref) => {
		const webpSrc = src.match(hasWebpCounterpartRegex)
			? src.replace(hasWebpCounterpartRegex, `.webp`)
			: ``;

		return (
			<Picture {...props} ref={ref}>
				{webpSrc && <source srcSet={webpSrc} type="image/webp" />}
				<Image src={src} alt={alt} fit={fit} />
			</Picture>
		);
	},
);

const Images = {
	Logo: styled(BaseImage).attrs(({ alt }) => ({
		imageData: ImageURLs.logo,
		alt: alt || `Logo da Tech Viz`,
	}))``,
	CapeIlustration: styled(BaseImage).attrs(({ alt }) => ({
		imageData: ImageURLs.capeIlustration,
		alt: alt || `Ilustracão da capa do software`,
	}))``,
	Prices: styled(BaseImage).attrs(({ alt }) => ({
		imageData: ImageURLs.prices,
		alt: alt || `Precos do Software`,
	}))``,
	Icons: {
		Analytics: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.analytics,
			alt: alt || `Ícone de Analytics`,
		}))``,
		Checkbox: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.checkbox,
			alt: alt || `Ícone de Checkbox`,
		}))``,
		Dialogs: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.dialogs,
			alt: alt || `Ícone de diálogo`,
		}))``,
		DownwardChart: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.downwardChart,
			alt: alt || `Ícone de gráficos descendo`,
		}))``,
		Email: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.email,
			alt: alt || `Ícone de email`,
		}))``,
		ExitDoor: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.exitDoor,
			alt: alt || `Ícone de saída`,
		}))``,
		LocationPint: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.locationPint,
			alt: alt || `Ícone de localizacão`,
		}))``,
		Medal: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.medal,
			alt: alt || `Ícone de medalha`,
		}))``,
		Research: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.research,
			alt: alt || `Ícone de pesquisa`,
		}))``,
		UpwardsChartWithBars: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.upwardsChartWithBars,
			alt: alt || `Ícone de gráfico de barras subindo`,
		}))``,
		Whatsapp: styled(BaseImage).attrs(({ alt }) => ({
			imageData: ImageURLs.icons.whatsapp,
			alt: alt || `Ícone de whatsapp`,
		}))``,
	},
};

export default Images;
