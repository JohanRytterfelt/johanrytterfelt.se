/**
 * SVG icon settings.
 */
/** @jsx jsx */
import { hidden } from '@lekoarts/gatsby-theme-cara/src/styles/utils';
import { jsx } from 'theme-ui';
import React from 'react';

const icons =
{
	triangle:
	{
		shape:
		(
			<polygon
				strokeWidth='1px'
				strokeLinejoin='round'
				strokeMiterlimit='10'
				points='14.921,2.27 28.667,25.5 1.175,25.5 '
			/>
		),
		viewBox: `0 0 30 30`,
	},
	circle:
	{
		shape:
		(
			<path d='M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z' />
		),
		viewBox: `0 0 30 30`,
	},
	arrowUp:
	{
		shape:
			(
			<React.Fragment>
				<path d='M28.74,20.81H1.26a1.26,1.26,0,0,1-1-2L14.16.5a1.25,1.25,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,18.8a1.25,1.25,0,0,1-1,2ZM3.81,18.29H26.22L15.16,3.37Z' />
					{ ` ` }
				<path d='M28.74,42H1.26a1.28,1.28,0,0,1-1.13-.71A1.26,1.26,0,0,1,.26,40l13.9-18.29a1.28,1.28,0,0,1,1-.5h0a1.24,1.24,0,0,1,1,.51L29.75,40a1.26,1.26,0,0,1,.12,1.32A1.28,1.28,0,0,1,28.74,42ZM3.81,39.47H26.22L15.16,24.55Z' />
			</React.Fragment>
		),
		viewBox: `0 0 30 42`,
	},
	upDown:
	{
		shape:
		(
			<React.Fragment>
				<path d='M28.74,44.58a1.28,1.28,0,0,1-1-.51L15.16,27.13l-12.89,17a1.26,1.26,0,1,1-2-1.53l13.9-18.29a1.34,1.34,0,0,1,1-.5,1.24,1.24,0,0,1,1,.51L29.75,42.56a1.27,1.27,0,0,1-1,2Z' />
				<path d='M14.83,20.82h0a1.28,1.28,0,0,1-1-.52L.25,2a1.27,1.27,0,0,1,2-1.51L14.84,17.45,27.73.5a1.26,1.26,0,0,1,2,1.53L15.84,20.32A1.28,1.28,0,0,1,14.83,20.82Z' />
			</React.Fragment>
		),
		viewBox: `0 0 30 44.58`,
	},
	box:
	{
		shape:
		(
			<path d='M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z' />
		),
		viewBox: `0 0 30 30`,
	},
	hexa:
	{
		shape:
		(
			<polygon
				strokeLinejoin='round'
				strokeMiterlimit='10'
				points='27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 '
			/>
		),
		viewBox: `0 0 30 30`,
	},
	cross:
	{
		shape:
		(
			<path
				strokeWidth='3px'
				d='M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z'
			/>
		),
		viewBox: `0 0 100 100`,
	},
	codeMerge:
	{
		shape:
		(
			<path d='M304 192c-41.7 0-76 32-79.7 72.8-25.2-1.3-61.6-7.9-88.8-31.7-20.3-17.8-32.8-43-37.5-75.1 35.5-8.2 62-40 62-77.9 0-44.2-35.8-80-80-80S0 35.8 0 80c0 38.7 27.5 71 64 78.4v195.2C27.5 361 0 393.3 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-38.7-27.5-71-64-78.4V237.4c5.5 7.2 11.7 13.9 18.6 19.9C151 289 197.9 296.1 228 297c10.5 31.9 40.5 55 76 55 44.2 0 80-35.8 80-80s-35.8-80-80-80zM32 80c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm96 352c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm176-112c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z' />
		),
		viewBox: `0 0 384 512`,
	},
	coffee:
	{
		shape:
		(
			<path d="M517.9 448H26.1c-24.5 0-33.1-32-20-32h531.8c13.1 0 4.5 32-20 32zM576 159.1c.5 53.4-42.7 96.9-96 96.9h-32v32c0 53-43 96-96 96H160c-53 0-96-43-96-96V76c0-6.6 5.4-12 12-12h402.8c52.8 0 96.7 42.2 97.2 95.1zM416 96H96v192c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V96zm128 64c0-35.3-28.7-64-64-64h-32v128h32c35.3 0 64-28.7 64-64z" />
		),
		viewBox: `0 0 576 512`,
	},
	code:
	{
		shape:
		(
			<path d="M228.5 511.8l-25-7.1c-3.2-.9-5-4.2-4.1-7.4L340.1 4.4c.9-3.2 4.2-5 7.4-4.1l25 7.1c3.2.9 5 4.2 4.1 7.4L235.9 507.6c-.9 3.2-4.3 5.1-7.4 4.2zm-75.6-125.3l18.5-20.9c1.9-2.1 1.6-5.3-.5-7.1L49.9 256l121-102.5c2.1-1.8 2.4-5 .5-7.1l-18.5-20.9c-1.8-2.1-5-2.3-7.1-.4L1.7 252.3c-2.3 2-2.3 5.5 0 7.5L145.8 387c2.1 1.8 5.3 1.6 7.1-.5zm277.3.4l144.1-127.2c2.3-2 2.3-5.5 0-7.5L430.2 125.1c-2.1-1.8-5.2-1.6-7.1.4l-18.5 20.9c-1.9 2.1-1.6 5.3.5 7.1l121 102.5-121 102.5c-2.1 1.8-2.4 5-.5 7.1l18.5 20.9c1.8 2.1 5 2.3 7.1.4z" />
		),
		viewBox: `0 0 576 512`,
	},
	bracketsCurly:
	{
		shape:
		(
			<path d="M571.31 244.69l-45.25-45.25A48 48 0 0 1 512 165.49V80a48 48 0 0 0-48-48h-72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h72a16 16 0 0 1 16 16v85.48a80 80 0 0 0 23.44 56.58L537.38 256l-33.94 33.94A80 80 0 0 0 480 346.52V432a16 16 0 0 1-16 16h-72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h72a48 48 0 0 0 48-48v-85.49a48 48 0 0 1 14.06-33.95l45.25-45.25a16 16 0 0 0 0-22.62zM184 32h-72a48 48 0 0 0-48 48v85.49a48 48 0 0 1-14.06 33.95L4.69 244.69a16 16 0 0 0 0 22.62l45.25 45.25A48 48 0 0 1 64 346.51V432a48 48 0 0 0 48 48h72a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-72a16 16 0 0 1-16-16v-85.48a80 80 0 0 0-23.44-56.58L38.62 256l33.94-33.94A80 80 0 0 0 96 165.48V80a16 16 0 0 1 16-16h72a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8z" />
		),
		viewBox: `0 0 576 512`,
	},
	bug:
	{
		shape:
		(
			<path d="M544,272H480V150.627L523.314,107.314A16,16,0,0,0,500.686,84.687L457.373,128H415a127.00381,127.00381,0,1,0-254,0H118.627L75.314,84.687A16,16,0,1,0,52.686,107.314L96,150.627V272H32a16,16,0,0,0,0,32H96v24a174.98856,174.98856,0,0,0,30.484,98.889L68.687,484.686a15.99972,15.99972,0,1,0,22.627,22.627l55.616-55.616A175.45165,175.45165,0,0,0,272,504h32a175.45165,175.45165,0,0,0,125.07-52.303l55.616,55.616a15.99972,15.99972,0,0,0,22.627-22.627l-57.797-57.797A174.98856,174.98856,0,0,0,480,328V304h64a16,16,0,0,0,0-32ZM288,32.01263A95.99568,95.99568,0,0,1,383,128H193A95.99568,95.99568,0,0,1,288,32.01263ZM448,328c0,79.401-64.598,144-144,144V236a12.00052,12.00052,0,0,0-12-12h-8a12.00052,12.00052,0,0,0-12,12V472c-79.402,0-144-64.599-144-144V160H448Z" />
		),
		viewBox: `0 0 576 512`,
	},
	terminal:
	{
		shape:
		(
			<path d="M34.495 36.465l211.051 211.05c4.686 4.686 4.686 12.284 0 16.971L34.495 475.535c-4.686 4.686-12.284 4.686-16.97 0l-7.071-7.07c-4.686-4.686-4.686-12.284 0-16.971L205.947 256 10.454 60.506c-4.686-4.686-4.686-12.284 0-16.971l7.071-7.07c4.686-4.687 12.284-4.687 16.97 0zM640 468v-10c0-6.627-5.373-12-12-12H300c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h328c6.627 0 12-5.373 12-12z"/>
		),
		viewBox: `0 0 640 512`,
	},
	phoneLaptop:
	{
		shape:
		(
			<path d="M608 128H416a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32zm0 352H416V160h192zM96 32h384v64h32V32a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v256H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-32H63.91A32 32 0 0 1 32 320h320v-32H96z" />
		),
		viewBox: `0 0 640 512`,
	},
};

type IconType = 'triangle' | 'circle' | 'arrowUp' | 'upDown' | 'box' | 'hexa' | 'cross' | 'codeMerge' | 'coffee' |'code' | 'bracketsCurly' | 'bug' | 'terminal' | 'phoneLaptop';

type SvgPropsType =
{
	color?       : string | number | any
	hiddenMobile?: boolean
	icon         : IconType
	left         : string
	stroke?      : boolean
	top          : string
	width        : number
};

const Svg = ( { stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SvgPropsType ) =>
(
	<svg
		sx={
			{
				color,
				display: hiddenMobile ? hidden : `block`,
				fill   : stroke ? `none` : `currentColor`,
				left,
				position: `absolute`,
				stroke  : stroke ? `currentColor` : `none`,
				top,
				width,
			}
		}
		viewBox={ icons[ icon ].viewBox }
	>
		{ icons[ icon ].shape }
	</svg>
);

export default Svg;
