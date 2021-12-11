/**
 * Template for the footer section.
 */
/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from 'theme-ui';

const Footer = () =>
{
	const [ colorMode, setColorMode ] = useColorMode();
	const isDark = colorMode === `dark`;
	const toggleColorMode = ( e: any ) =>
	{
		setColorMode( isDark ? `light` : `dark` )
	};

	return (
		<Box as='footer' variant='footer'>
			<button
				aria-label='Toggle dark mode'
				onClick={ toggleColorMode }
				sx={
					{
						display   : `block`,
						fontWeight: `semibold`,
						mb        : 3,
						mx        : `auto`,
						variant   : `buttons.toggle`,
					}
				}
				type='button'
			>
				{ isDark ? `Light` : `Dark` }
			</button>
			Copyright lolol
			<br />
			&copy; { new Date().getFullYear() }
		</Box>
	)
};

export default Footer;
