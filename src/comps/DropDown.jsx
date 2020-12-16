import React from 'react'

export default function DropDown({itemsArray, state, parent}) {
	return (
		<ul style={{ display: state }} className={`${parent}__dropdown`}>
			{
				itemsArray.map((item, index) => 

					<li className={`${parent}__dropdown-item`} 
						key={ index }>
						{ item }
					</li>
			)}
		</ul>
	)
}