import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as Close } from '../../svg/close.svg';
import { ReactComponent as Confirm } from '../../svg/confirm.svg';
import './pop-up.css';

export default function PopUp( props ) {
	const popUp = useRef();
	const [ categoryName, setCategoryName ] = useState( '' );

	const handleClickOutside = ( event ) => {
		if ( popUp.current && !popUp.current.contains( event.target ) ) {
			props.handlePopUpClose();
		}
	};
	const handleInputChange = ( event ) => {
		setCategoryName( event.target.value );
	};
	const handleSubmit = ( event ) => {
		event.preventDefault();
		if ( categoryName.length > 0 ) {
			props.handleCategoryAdd( categoryName );
			props.handlePopUpClose();
		}
	};

	useEffect( () => {
		document.addEventListener( 'click', event => handleClickOutside( event ) );

		return () => document.removeEventListener( 'click', handleClickOutside );
	} );

	return (
		<div className='pop-up-container'>
			<div className='pop-up' ref={ popUp }>
				<div className='pop-up-close-button-container'>
					<button className='pop-up-close-button' onClick={ props.handlePopUpClose }><Close className='small-svg' /></button>
				</div>
				<div className='input-container'>
					<form onSubmit={ event => handleSubmit( event ) }>
						<input type='text' placeholder='Category name' className='text-input' value={ categoryName } onChange={ handleInputChange } />
						<button type='submit' className='add'><Confirm className='small-svg' /></button>
					</form>
				</div>
			</div>
		</div >
	)
}
