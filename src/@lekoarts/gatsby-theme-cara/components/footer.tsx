/**
 * Template for the footer section.
 */
/** @jsx jsx */
import { Box, jsx } from 'theme-ui';

const Footer = () =>
{
	return (
		<Box as='footer' variant='footer'>
			Copyright lolol
			<br />
			&copy; { new Date().getFullYear() }
		</Box>
	)
};

export default Footer;
