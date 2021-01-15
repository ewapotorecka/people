import React from 'react';

export default function SectionContainer( props ) {
	return (
		<div className={ props.type }>
			<div className={ `left-container-${ props.type }` }>
				<div className='text-container'>{ props.text }</div>
				<div className='vertical-line'></div>
			</div>
			<div className='right-container'>
				<div className={ `horizontal-line-${ props.type }` }></div>
				{ props.children }
			</div>
		</div>
	);
}