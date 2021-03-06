/** @jsx jsx */
import { jsx } from 'theme-ui';

type ProjectCardCustomProps =
{
	bg      : string;
	children: React.ReactNode;
	link    : string;
	title   : string;
};

const ProjectCardCustom = ( { link, title, children, bg }: ProjectCardCustomProps ) =>
(
	<a
		href={ link }
		target='_blank'
		rel='noreferrer noopener'
		sx={
			{
				width: `100%`,
				boxShadow: `lg`,
				position: `relative`,
				textDecoration: `none`,
				borderRadius: `lg`,
				px: 4,
				py: [4, 5],
				color: `white`,
				background: bg || `none`,
				transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
				'&:hover':
				{
					color: `white !important`,
					transform: `translateY(-5px)`,
					boxShadow: `xl`,
				},
			}
		}
	>
		<div
			sx={
				{
					fontSize     : [ 4, 5 ],
					fontWeight   : `medium`,
					letterSpacing: `wide`,
					lineHeight   : 1,
					pt           : 4,
					textTransform: `uppercase`,
				}
			}
		>
			{ title + ' 2' }
		</div>
		<div
			sx={
				{
					opacity: 0.85,
					textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`
				}
			}
		>
			{ children }
		</div>
	</a>
);

export default ProjectCardCustom;
