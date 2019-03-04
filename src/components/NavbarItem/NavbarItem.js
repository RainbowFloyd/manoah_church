import React from 'react';

const NavbarItem = (props) => {
  const tabName = props.tab.toLowerCase();
	return (
		<span>
			<button><a href={'/' + tabName}>{tabName}</a></button>
		</span>
	)
}

export default NavbarItem;