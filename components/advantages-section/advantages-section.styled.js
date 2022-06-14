import styled from 'styled-components';
import Heading from '../heading';
import Circ from '../circle';
import { getBreakpoint } from '../../helpers';

export const Section = styled.section`
	--vertical-padding: 40px;

	position: relative;
	padding: var(--vertical-padding) 0;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		--vertical-padding: 50px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		--vertical-padding: 75px;

		overflow: hidden;
	}
`;

export const Circle = styled(Circ)`
	display: none;

	@media screen and (min-width: ${getBreakpoint('lg')}) {
    position: absolute;
    bottom: 0;
    right: calc(var(--size) / 2 * -1);
		display: block;
	}
`;

export const Row = styled.div`
	--mb: 80px;

	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 48px;

	&:not(:last-child) {
		margin-bottom: var(--mb);
	}

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		--mb: 100px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		--mb: 150px;

		flex-direction: ${({ isReversed }) => (isReversed ? 'row-reverse' : 'row')};
		justify-content: space-between;
		text-align: left;
	}
`;

export const ImageWrapper = styled.div`
	--drop-shadow: 10px 10px 30px rgba(54, 83, 107, 0.3);
`;

export const ImageContainer = styled.div`
	display: flex;
	@supports (filter: drop-shadow(var(--drop-shadow))) {
		filter: drop-shadow(var(--drop-shadow));
	}
`;

export const SimpleUiImages = styled.div`
	display: flex;
	gap: 42px;
`;

export const Content = styled.div`
	max-width: 445px;
	width: 100%;
`;

export const Title = styled(Heading)`
	margin-bottom: 24px;
`;

export const Description = styled.p``;
