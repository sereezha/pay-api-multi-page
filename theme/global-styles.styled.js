import { createGlobalStyle } from 'styled-components';
import { getBreakpoint } from '../helpers';

const GlobalStyles = createGlobalStyle`
:root {
  --color-white: hsl(207, 58%, 99%);
  --color-link-water-white: hsl(220, 60%, 99%);
  --color-mirage-blue: hsl(207, 28%, 15%);
  --color-dark-pink: hsl(337, 48%, 49%);
  --color-charm-pink: hsl(337, 60%, 64%);
  --color-san-juan-blue: hsl(207, 33%, 32%);
  --color-san-juan-blue-light: hsl(207, 16%, 50%);
  --color-red: hsl(359, 87%, 72%);

  --color-primary: var(--color-dark-pink);
  --color-primary-active: var(--color-charm-pink);
  --color-secondary: var(--color-san-juan-blue);
  --color-secondary-light: var(--color-san-juan-blue-light);
  --color-invalid: var(--color-red);

  --color-text: var(--color-secondary);
  --color-text-light: var(--color-white);
  --color-text-light-pale: hsl(210, 6%, 74%);

  --color-body-background: hsl(207, 44%, 95%);

  --font-text: 'Public Sans', -apple-system, sans-serif;
  --font-heading:'DM Serif Display', -apple-system, serif;

  --transition-duration: 0.2s;

	--first-section-padding: 24px;
  --header-top-padding: 40px;
  --req-invite-section-padding: 40px;
	@media screen and (min-width: ${getBreakpoint('sm')}) {
		--first-section-padding: 40px;
    --req-invite-section-padding: 50px;
	}
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  font-family: var(--font-text);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.86;
  color: var(--color-text);
  background-color: var(--color-body-background);
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

img {
	height: auto;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  font-size: 15px;
  line-height: 1.86;
}
`;

export default GlobalStyles;
