import React from 'react';
import { Wrapper, Inner, List, ListItem, ListTitle, ListStat } from './stats.styled';

const Stats = () => {
	return (
		<Wrapper>
			<Inner>
				<List>
					<ListItem>
						<ListTitle>Team Members</ListTitle>
						<ListStat>300+</ListStat>
					</ListItem>
					<ListItem>
						<ListTitle>Offices in the US</ListTitle>
						<ListStat>3</ListStat>
					</ListItem>
					<ListItem>
						<ListTitle>Transactions analyzed</ListTitle>
						<ListStat>10M+</ListStat>
					</ListItem>
				</List>
			</Inner>
		</Wrapper>
	);
};

export default Stats;
