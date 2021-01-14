import React from 'react';

export default function SectionContainer( props ) {
	return (
		<div className={ props.class }>
			<div className='left-container'>
				<div className='text-container'>{ props.text }</div>
				<div className='vertical-line'></div>
			</div>
			<div className='right-container'>
				<div className='horizontal-line'></div>
				{ props.children }
			</div>
		</div>
	);
}