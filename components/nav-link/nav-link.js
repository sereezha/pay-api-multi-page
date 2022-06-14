import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as S from './nav-link.styled';
import { APPEARANCES } from './constants';

const NavLink = (props) => {
	const {
		appearance = APPEARANCES.dark,
		children,
		href,
		shouldBeActive,
    className
	} = props;
	const { asPath } = useRouter();
	const isCurrentPage = asPath === href;
	const isActive = isCurrentPage && shouldBeActive;

	return (
		<Link href={href} passHref>
			<S.NavLink
				appearance={appearance}
				isActive={isActive}
				aria-current={isCurrentPage.toString()}
        className={className}
			>
				{children}
			</S.NavLink>
		</Link>
	);
};

export default NavLink;
