import styled, { css } from 'styled-components';
import { getBreakpoint } from '../../../../helpers';
import Heading from '../../../heading';
import Button from '../../../button';
import Icon from '../../../icon';

export const List = styled.ul`
	--spacer: 24px;

	display: flex;
	flex-direction: column;
	gap: 48px;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		flex-direction: row;
		gap: 10px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		gap: 30px;
	}
`;

export const ListItem = styled.li`
	text-align: center;
	display: flex;
	flex-direction: column;
	@media screen and (min-width: ${getBreakpoint('lg')}) {
		text-align: left;
	}
`;

export const Title = styled(Heading)`
	margin-bottom: 18px;
`;

export const Description = styled.p`
	margin-bottom: 8px;
	color: var(--color-secondary-light);
`;

export const Cost = styled.div`
	margin-top: auto;
	margin-bottom: var(--spacer);
	font-size: 56px;
	font-family: var(--font-heading);
	line-height: 1.28;
	letter-spacing: -0.43px;
	color: var(--color-secondary);

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		font-size: 48px;
		letter-spacing: -0.37px;
	}

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		font-size: 56px;
		letter-spacing: -0.37px;
	}
`;

export const FeaturesListWrap = styled.div`
  --border: 1px solid hsl(207, 21%, 79%);

  margin-bottom: var(--spacer);
  padding: var(--spacer) 0;
	border-top: var(--border);
	border-bottom: var(--border);
`

export const FeaturesList = styled.ul`

  --horizontal-margin: auto;

	display: flex;
	flex-direction: column;
  width: fit-content;
  margin: 0 var(--horizontal-margin);
	text-align: left;

	@media screen and (min-width: ${getBreakpoint('lg')}) {
    --horizontal-margin: 0;
	}
`;

export const FeaturesItem = styled.li`
	position: relative;
	display: flex;
	align-items: center;
	padding-left: 36px;
	font-size: 16px;
  word-break: break-all;

	&:not(:last-child) {
		margin-bottom: 8px;
	}

	${({ available }) =>
		!available &&
		css`
			opacity: 0.5;
		`}
`;

export const FeatureAvailableIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  left: 0;
  stroke: var(--color-primary);
`

export const RequestInvite = styled(Button)`
	align-self: center;

	@media screen and (min-width: ${getBreakpoint('lg')}) {
		align-self: flex-start;
	}
`;
