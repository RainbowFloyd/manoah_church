import React from 'react';
import logo from '../../media/dog_on_pc.jpg'

const Wip = () => {

	const imageStyle = {
		maxWidth: '50%',
		height: 'auto',
		display: 'block',
  	marginLeft: 'auto',
  	marginRight: 'auto'
	}

	return (
		<div>
			<h1>I'm working on it</h1>
			<img style={imageStyle} alt={'dog_on_pc.jpg'} src={logo} />
		</div>
		)
}

export default Wip;