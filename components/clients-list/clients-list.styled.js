import styled from 'styled-components';
import { getBreakpoint } from '../../helpers';

const logoColorMap = {
	light: '--color-white',
	dark: '--color-secondary',
};

export const List = styled.ul`
	--row-gap: 32px;
	--column-gap: 50px;
	--column-count: 2;

	display: grid;
	align-items: center;
  max-width: 280px;
  width: 100%;
	gap: var(--row-gap) var(--column-gap);
	grid-template-columns: repeat(var(--column-count), auto);

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		--column-gap: 62px;
		--column-count: 3;

		max-width: 540px;
	}

	svg {
		fill: var(${({ appearance }) => logoColorMap[appearance]});
	}
`;

export const ListItem = styled.li``;
