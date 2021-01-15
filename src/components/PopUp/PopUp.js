import React, { useEffect, useRef, useState } from 'react';
import './pop-up.css';

export default function PopUp( props ) {
	const popUp = useRef();
	const [ categoryName, setCategoryName ] = useState( '' );

	const handleClickOutside = ( event ) => {
		if ( popUp.current.contains( event.target ) ) {
			return;
		} else {
			props.handlePopUpClose();
		}
	};
	const handleInputChange = ( event ) => {
		setCategoryName( event.target.value );
	};

	useEffect( () => {
		document.addEventListener( 'click', event => handleClickOutside( event ) );

		return () => document.removeEventListener( 'click', handleClickOutside );
	}, [] );

	return (
		<div className='pop-up-container'>
			<div className='pop-up' ref={ popUp }>
				<div className='pop-up-close-button-container'>
					<button className='pop-up-close-button' onClick={ props.handlePopUpClose }>x</button>
				</div>
				<div className='input-container'>
					<form onSubmit={ event => {
						event.preventDefault();
						props.handleCategoryAdd( categoryName );
						props.handlePopUpClose();
					} } >
						<input type='text' placeholder='Category name' value={ categoryName } onChange={ handleInputChange } />
						<input type='submit' className='pop-up-add-button' value='Add' />
					</form>
				</div>
			</div>
		</div>
	)
}
