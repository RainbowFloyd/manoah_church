import React from 'react';

const NavbarItem = (props) => {
  const tabName = props.tab;
  const tabRefernce = tabName === 'Home' ? '' : tabName.toLowerCase();

	return (
		<span>
			<button><a href={'/' + tabRefernce}>{tabName}</a></button>
		</span>
	)
}

export default NavbarItem;