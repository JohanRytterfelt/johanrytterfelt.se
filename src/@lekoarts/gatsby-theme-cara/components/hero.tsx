/**
 * Template for the hero section.
 */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { UpDown, UpDownWide } from '@lekoarts/gatsby-theme-cara/src/styles/animations';
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content';
import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider';
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner';
// @ts-ignore
import Intro from '../sections/intro';
import Svg from './svg';

const Hero = ( { offset, factor = 1 }: { offset: number; factor?: number } ) =>
(
	<div>
		<Divider speed={ 0.2 } offset={ offset } factor={ factor }>
			<UpDown>
				<Svg icon='terminal' hiddenMobile width={ 48 } stroke color='icon_orange' left='10%' top='20%' />
				<Svg icon='code' width={ 48 } stroke color='icon_pink' left='60%' top='70%' />
				<Svg icon='coffee' width={ 6 } color='icon_darker' left='60%' top='15%' />
			</UpDown>
			<UpDownWide>
				<Svg icon='bug' hiddenMobile width={ 16 } stroke color='icon_blue' left='80%' top='10%' />
				<Svg icon='terminal' width={ 12 } stroke color='icon_brightest' left='90%' top='50%' />
				<Svg icon='bracketsCurly' width={ 16 } color='icon_darker' left='70%' top='90%' />
				<Svg icon='terminal' width={ 16 } stroke color='icon_darkest' left='30%' top='65%' />
				<Svg icon='codeMerge' width={ 16 } stroke color='icon_pink' left='28%' top='15%' />
				<Svg icon='bracketsCurly' width={ 6 } color='icon_darkest' left='75%' top='10%' />
				<Svg icon='phoneLaptop' hiddenMobile width={ 8 } color='icon_darkest' left='45%' top='10%' />
			</UpDownWide>
			<Svg icon='bracketsCurly' hiddenMobile width={ 24 } color='icon_darker' left='5%' top='70%' />
			<Svg icon='bracketsCurly' width={ 6 } color='icon_darkest' left='4%' top='20%' />
			<Svg icon='bracketsCurly' width={ 12 } color='icon_darkest' left='50%' top='60%' />
			<Svg icon='phoneLaptop' width={ 8 } color='icon_darkest' left='95%' top='90%' />
			<Svg icon='phoneLaptop' hiddenMobile width={ 24 } color='icon_darker' left='40%' top='80%' />
			<Svg icon='terminal' width={ 8 } stroke color='icon_darker' left='25%' top='5%' />
			<Svg icon='bracketsCurly' width={ 64 } stroke color='icon_green' left='95%' top='5%' />
			<Svg icon='coffee' hiddenMobile stroke width={ 48 } color='icon_darkest' left='5%' top='90%' />
			<Svg icon='coffee' width={ 6 } color='icon_darkest' left='10%' top='10%' />
			<Svg icon='coffee' width={ 12 } color='icon_darkest' left='40%' top='30%' />
			<Svg icon='code' width={ 16 } stroke color='icon_darker' left='10%' top='50%' />
			<Svg icon='code' width={ 8 } stroke color='icon_darker' left='80%' top='70%' />
		</Divider>
		<Content sx={ { variant: `texts.bigger` } } speed={ 0.4 } offset={ offset } factor={ factor }>
			<Inner>
				<Intro />
			</Inner>
		</Content>
	</div>
);

export default Hero;
