import React from 'react';
import Icon from '../icon';
import { List, ListItem } from './clients-list.styled';
import { APPEARANCES } from './constants';

const CLIENTS = [
	{
		id: 'tesla',
		glyph: 'tesla',
		label: 'Tesla',
	},
	{
		id: 'microsoft',
		glyph: 'microsoft',
		label: 'Microsoft',
	},
	{
		id: 'hewlett-packard',
		glyph: 'hp',
		label: 'HP',
	},
	{
		id: 'oracle',
		glyph: 'oracle',
		label: 'Oracle',
	},
	{
		id: 'google',
		glyph: 'google',
		label: 'Google',
	},
	{
		id: 'nvidia',
		glyph: 'nvidia',
		label: 'Nvidia',
	},
];

const ClientsList = ({ appearance = APPEARANCES.dark }) => {
	return (
		<List appearance={appearance}>
			{CLIENTS.map(({ id, glyph, label }) => (
				<ListItem key={id} label={label}>
					<Icon glyph={glyph} aria-hidden="true" />
				</ListItem>
			))}
		</List>
	);
};

export default ClientsList;
