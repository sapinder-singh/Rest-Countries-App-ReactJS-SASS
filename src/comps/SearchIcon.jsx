import React from 'react';

export default function SearchIcon({className}) {
	const pathStyles = {
		fill: 'none',
		stroke:'#000',
		strokeMiterlimit: '10',
		strokeWidth: '32px'
	}
	
	const lineStyles = {
		fill: 'none',
		stroke: '#000',
		strokeLinecap: 'round',
		strokeMiterlimit: '10',
		strokeWidth: '32px'
	}

	return (
		<svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
			<title>ionicons-v5-f</title>
			<path style={pathStyles} d='M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z' />
			<line style={lineStyles} x1='338.29' y1='338.29' x2='448' y2='448' />
		</svg>
	)
}
