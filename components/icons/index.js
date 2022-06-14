import Facebook from './facebook';
import Twitter from './twitter';
import Linkedin from './linkedin';
import Tesla from './tesla';
import Google from './google';
import Oracle from './oracle';
import HP from './hp';
import Microsoft from './microsoft';
import Nvidia from './nvidia';
import Check from './check';
import Close from './close';
import Menu from './menu';

const icons = {
	facebook: Facebook,
	twitter: Twitter,
	linkedin: Linkedin,
	tesla: Tesla,
	google: Google,
	oracle: Oracle,
	hp: HP,
	microsoft: Microsoft,
	nvidia: Nvidia,
	check: Check,
	close: Close,
	menu: Menu,
};

export const getIcon = (glyph) => icons[glyph];
