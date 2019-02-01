import React from 'react';

const NavbarItem = (props) => {
	return (
		<span>
			<button>{props.tab}</button>
		</span>
	)
}

export default NavbarItem;