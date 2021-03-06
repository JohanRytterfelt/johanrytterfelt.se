/**
 * Template for the projects section.
 */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { UpDown, UpDownWide } from '@lekoarts/gatsby-theme-cara/src/styles/animations';
import Content from '@lekoarts/gatsby-theme-cara/src/elements/content';
import Divider from '@lekoarts/gatsby-theme-cara/src/elements/divider';
import Inner from '@lekoarts/gatsby-theme-cara/src/elements/inner';
// @ts-ignore
import ProjectsMDX from '../sections/projects';
import Svg from './svg';

const Projects = ( { offset, factor = 2 }: { offset: number; factor?: number } ) =>
(
	<div>
		<Divider
			bg='linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)'
			factor={ factor }
			offset={ 1.1 }
			speed={ -0.2 }
			sx={
				{
					clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)`,
				}
			}
		/>
		<Content speed={ 0.4 } offset={ offset + 0.2 } factor={ factor }>
			<Inner>
				<div
					sx={
						{
							display            : `grid`,
							gridGap            : [ 4, 4, 4, 5 ],
							gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
							h2                 :
							{
								color     : `white !important`,
								gridColumn: `-1/1`,
							},
						}
					}
				>
					<ProjectsMDX />
				</div>
			</Inner>
		</Content>
		<Divider speed={ 0.1 } offset={ offset } factor={ factor }>
			<UpDown>
				<Svg icon='terminal' width={ 6 } color='icon_brightest' left='85%' top='75%' />
				<Svg icon='code' width={ 8 } color='icon_teal' left='70%' top='20%' />
				<Svg icon='coffee' width={ 8 } stroke color='icon_orange' left='25%' top='5%' />
				<Svg icon='bracketsCurly' hiddenMobile width={ 24 } color='icon_brightest' left='17%' top='60%' />
			</UpDown>
			<UpDownWide>
				<Svg icon='arrowUp' hiddenMobile width={ 16 } color='icon_green' left='20%' top='90%' />
				<Svg icon='coffee' width={ 12 } stroke color='icon_brightest' left='90%' top='30%' />
				<Svg icon='bracketsCurly' width={ 16 } color='icon_yellow' left='70%' top='90%' />
				<Svg icon='coffee' hiddenMobile width={ 16 } stroke color='icon_teal' left='18%' top='75%' />
				<Svg icon='bracketsCurly' width={ 6 } color='icon_brightest' left='75%' top='10%' />
				<Svg icon='code' hiddenMobile width={ 8 } color='icon_green' left='45%' top='10%' />
			</UpDownWide>
			<Svg icon='bracketsCurly' hiddenMobile width={ 6 } color='icon_brightest' left='4%' top='20%' />
			<Svg icon='bracketsCurly' width={ 12 } color='icon_pink' left='80%' top='60%' />
			<Svg icon='terminal' width={ 6 } color='icon_orange' left='10%' top='10%' />
			<Svg icon='terminal' width={ 12 } color='icon_yellow' left='29%' top='26%' />
			<Svg icon='bug' width={ 16 } stroke color='icon_red' left='75%' top='30%' />
			<Svg icon='bug' width={ 8 } stroke color='icon_yellow' left='80%' top='70%' />
		</Divider>
	</div>
);

export default Projects;
