import React, { forwardRef } from 'react';
import {
	Wrapper,
	Text,
	Input,
	InputWrapper,
	CheckIcon,
} from './checkbox.styled';

const Checkbox = forwardRef(({ label, ...restProps }, ref) => (
	<Wrapper isLabelVisible={label}>
		<InputWrapper>
			<Input ref={ref} type="checkbox" {...restProps} />
			<CheckIcon glyph="check" />
		</InputWrapper>
		{label && <Text>{label}</Text>}
	</Wrapper>
));

Checkbox.displayName = 'Checkbox';

export default Checkbox;
