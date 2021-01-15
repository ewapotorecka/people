import React from 'react';
import Button from '../Button/Button';
import './category-element.css';

export default function CategoryElement( props ) {
	return (
		<div className={ props.type }>
			<div>
				{ props.children }
			</div>

		</div>
	)
}