import styled, { css } from 'styled-components';
import BaseInput from '../base-input';

export const Wrapper = styled(BaseInput)`
	--border-color: hsl(207, 17%, 63%);
	padding: 0 20px 16px;
	border-bottom: 1px solid var(--border-color);
	letter-spacing: -0.12px;
	line-height: 1.6;

	&::placeholder {
		color: currentColor;
		opacity: 0.5;
	}

	&:focus-visible {
		--border-color: var(--color-secondary);
	}

	${({ invalid }) =>
		invalid &&
		css`
			--border-color: var(--color-invalid);

			color: var(--color-invalid);

			&::placeholder {
				opacity: 1;
			}

      &:focus-visible {
        --border-color: var(--color-invalid);
      }
		`}
`;
