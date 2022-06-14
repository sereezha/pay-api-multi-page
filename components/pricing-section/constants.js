export const PRICING_PLANS = [
	{
		type: 'free',
		title: 'Free Plan',
		description:
			'Build and test using our core set of products with up to 100 API requests ',
		price: '$0.00',
		features: [
			{
				label: 'Transactions',
				id: 'transactions',
				available: true,
			},
			{
				label: 'Auth',
				id: 'auth',
				available: true,
			},
			{
				label: 'Identity',
				id: 'identity',
				available: true,
			},
			{
				label: 'Investments',
				id: 'investments',
				available: false,
			},
			{
				label: 'Assets',
				id: 'assets',
				available: false,
			},
			{
				label: 'Liabilities',
				id: 'liabilities',
				available: false,
			},
			{
				label: 'Income',
				id: 'income',
				available: false,
			},
		],
	},
	{
		type: 'basic',
		title: 'Basic Plan',
		description:
			'Launch your project with unlimited requests and no contractual minimums',
		price: '$249.00',
		features: [
			{
				label: 'Transactions',
				id: 'transactions',
				available: true,
			},
			{
				label: 'Auth',
				id: 'auth',
				available: true,
			},
			{
				label: 'Identity',
				id: 'identity',
				available: true,
			},
			{
				label: 'Investments',
				id: 'investments',
				available: true,
			},
			{
				label: 'Assets',
				id: 'assets',
				available: true,
			},
			{
				label: 'Liabilities',
				id: 'liabilities',
				available: false,
			},
			{
				label: 'Income',
				id: 'income',
				available: false,
			},
		],
	},
	{
		type: 'premium',
		title: 'Premium Plan',
		description:
			'Get tailored solutions, volume pricing, and dedicated support for your team ',
		price: '$499.00',
		features: [
			{
				label: 'Transactions',
				id: 'transactions',
				available: true,
			},
			{
				label: 'Auth',
				id: 'auth',
				available: true,
			},
			{
				label: 'Identity',
				id: 'identity',
				available: true,
			},
			{
				label: 'Investments',
				id: 'investments',
				available: true,
			},
			{
				label: 'Assets',
				id: 'assets',
				available: true,
			},
			{
				label: 'Liabilities',
				id: 'liabilities',
				available: true,
			},
			{
				label: 'Income',
				id: 'income',
				available: true,
			},
		],
	},
];
