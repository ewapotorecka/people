import React from 'react';
import Button from '../Button/Button';
import './category-element.css';

export default function CategoryElement( props ) {
	return (
		<div className={ props.type }>
			<div className={ `${ props.class }-name` }>
				{ props.children }
			</div>

		</div>
	)
}