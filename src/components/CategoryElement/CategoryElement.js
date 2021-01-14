import React from 'react';
import Button from '../Button/Button';
import './category-element.css';

export default function CategoryElement( props ) {
	return (
		<div className={ props.class }>
			<div className={ `${ props.class }-name` }>
				{ props.children }
			</div>
			<div className='button-container'>
				<Button type='remove'>-</Button>
			</div>
		</div>
	)
}