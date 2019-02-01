import React from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';

const Navbar = (props) => {
	const tabs = ['Staff', 'Connect', 'Media', 'Prayer'];
	const tabItems = (
		tabs.map((tab, index) => {
			return <NavbarItem tab={tab} />
		})
	)


	return (
		<div>
			{tabItems}
		</div>
	)

}

export default Navbar;