import React from 'react';
import { ReactComponent as IconClear } from '../images/clear.svg';

export default function ClearIcon(props) {
	return (
		<IconClear className={props.class}	style={{display: props.display}} />
	)
}
