import styled, { css } from 'styled-components';
import { getBreakpoint } from '../../helpers';

export const Container = styled.div`
	--max-width: 1158px;

	max-width: var(--max-width);
	width: 100%;
	padding: 0 24px;
	margin: 0 auto;

	@media screen and (min-width: ${getBreakpoint('sm')}) {
		--max-width: 1190px;

		padding: 0 40px;
	}

	${({ isSmall }) =>
		isSmall &&
		css`
			--max-width: 920px;
			@media screen and (min-width: ${getBreakpoint('sm')}) {
				--max-width: 1000px;
			}
		`}
`;
