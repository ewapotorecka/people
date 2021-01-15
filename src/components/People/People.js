import React, { useState } from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import CategoryElement from '../CategoryElement/CategoryElement';
import Button from '../Button/Button';
import PopUp from '../PopUp/PopUp';
import './people.css';

const defaultCategories = [
	{ name: 'Age 40+', id: `453212_Age 40+` },
	{ name: 'Ethnicity', id: `129543_Ethnicity`, subCategories: [ { name: 'Black', id: `563234_Black` }, { name: 'Hispanic', id: `087234_Hispanic` } ] },
	{ name: 'Income yearly 45k USD+', id: `783012_Income yearly 45k USD+` } ];

export default function People() {
	const [ popUpVisible, setPopUpVisible ] = useState( false );
	const [ categories, setCategories ] = useState( defaultCategories );

	const handleCategoryAdd = category => {
		const newCategoryObject = {
			name: category,
			id: `${ Math.floor( Math.random() * 1000000 ) }_${ category }`
		};

		setCategories( [ ...categories, newCategoryObject ] );
	}



	return (
		<div className='people-container'>
			<div className='people'>
				People
			</div>

			{ categories.map( category => {
				if ( category.subCategories ) {
					return (
						<SectionContainer class='section-container' text='And' key={ category.id }>
							<CategoryElement class='category-container'>
								<div class='category-name-border'>{ category.name }</div>
								{ category.subCategories.map( ( subCategory ) => {
									return (
										<SectionContainer class='sub-section-container' text='Or' key={ subCategory.id }>
											<CategoryElement class='subcategory-container'>{ subCategory.name }</CategoryElement>
										</SectionContainer>
									);
								} ) }
								<div className='add-button-container'>
									<Button type='add'>+</Button>
								</div>
							</CategoryElement>
						</SectionContainer>
					);
				} else {
					return (
						<SectionContainer class='section-container' text='And' key={ category.id }>
							<CategoryElement class='category-container'>{ category.name }</CategoryElement>
						</SectionContainer>
					);
				}
			} ) }
			<div className='add-button-container'>
				<Button type='add' onClick={ () => setPopUpVisible( true ) }>+</Button>
			</div>
			{ popUpVisible && <PopUp
				handleCategoryAdd={ category => handleCategoryAdd( category ) }
				handlePopUpClose={ () => setPopUpVisible( false ) } /> }
		</div>
	);
}
