import theme from '../theme/theme';

const STRATEGIES = {
	min: 'min',
	max: 'max',
};

const getBreakpoint = (breakpoint, strategy = STRATEGIES.min) =>
	theme.breakpoints[strategy][breakpoint];

export default getBreakpoint;
