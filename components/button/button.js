import React, { Fragment } from 'react';
import Link from 'next/link';
import { APPEARANCES } from './constants';
import * as S from './button.styled';

const Button = (props) => {
	const {
		appearance = APPEARANCES.secondaryDark,
		as,
		children,
		href,
		isExternal,
    fullWidth,
		...delegated
	} = props;

	const isLink = isExternal || href;
	const Wrapper = href ? (isExternal ? Fragment : Link) : Fragment;

	const wrapperProps = {
		...(Wrapper === Link && {
			href,
			passHref: true,
		}),
	};

	return (
		<Wrapper {...wrapperProps}>
			<S.Button
				as={isLink ? 'a' : as}
				href={isExternal ? href : undefined}
				appearance={appearance}
				rel={(isExternal && href && 'noreferrer noopener') || undefined}
        fullWidth={fullWidth}
				{...delegated}
			>
				{children}
			</S.Button>
		</Wrapper>
	);
};

export default Button;
