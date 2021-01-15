import React, { useState } from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import Button from '../Button/Button';
import PopUp from '../PopUp/PopUp';
import { ReactComponent as Plus } from '../../svg/plus.svg';
import { ReactComponent as Minus } from '../../svg/minus.svg';
import './people.css';

const defaultCategories = [
	{ name: 'Age 40+', id: `453212_Age 40+` },
	{ name: 'Ethnicity', id: `129543_Ethnicity`, subCategories: [ { name: 'Black', id: `563234_Black` }, { name: 'Hispanic', id: `087234_Hispanic` } ] },
	{ name: 'Income yearly 45k USD+', id: `783012_Income yearly 45k USD+` } ];

export default function People() {
	const [ popUpVisible, setPopUpVisible ] = useState( false );
	const [ currentCategory, setCurrentCategory ] = useState( null );
	const [ categories, setCategories ] = useState( defaultCategories );

	const handleCategoryAdd = category => {
		if ( !currentCategory ) {
			const newCategoryObject = {
				name: category,
				id: `${ Math.floor( Math.random() * 1000000 ) }_${ category }`
			};

			setCategories( [ ...categories, newCategoryObject ] );
		} else {
			handleSubCategoryAdd( category );
		}

	};
	const handleSubCategoryAdd = ( category ) => {
		const categoriesCopy = [ ...categories ];
		const newCategoryObject = {
			name: category,
			id: `${ Math.floor( Math.random() * 1000000 ) }_${ category }`
		};

		for ( let i = 0; i < categoriesCopy.length; i++ ) {
			if ( categoriesCopy[ i ].id === currentCategory.id ) {
				console.log( categories[ i ] )
				categories[ i ].subCategories.push( newCategoryObject );
			}
		}

		setCategories( categoriesCopy );
		setCurrentCategory( null );
	};
	const handleCategoryRemove = ( categoryId ) => {
		const filteredCategories = categories.filter( category => {
			return category.id !== categoryId;
		} );

		setCategories( filteredCategories );

	};
	const handleSubcategoryRemove = ( categoryId, subCategoryId ) => {
		const categoriesCopy = [ ...categories ];

		for ( let i = 0; i < categoriesCopy.length; i++ ) {
			if ( categories[ i ].id === categoryId ) {
				const filteredSubCategories = categories[ i ].subCategories.filter( ( subCategory ) => {
					return subCategory.id !== subCategoryId;
				} );

				categoriesCopy[ i ].subCategories = filteredSubCategories;

			}
		}

		setCategories( categoriesCopy );
	};

	return (
		<div className='people-container'>
			<div className='people'>
				People
			</div>

			{ categories.map( category => {
				if ( category.subCategories ) {
					return (
						<SectionContainer type='section-container' text='And' key={ category.id }>
							<div className='category-container with-subcategories'>
								<div className='main-category-container'>
									<div className='main-category'>{ category.name }</div>
									<div className='remove-button-container'>
										<Button type='remove' onClick={ () => handleCategoryRemove( category.id ) }><Minus className='small-svg' /></Button>
									</div>
								</div>
								{ category.subCategories.map( ( subCategory ) => {
									return (
										<SectionContainer type='subsection-container' text='Or' key={ subCategory.id }>
											<div className='subcategory-container'>
												{ subCategory.name }
												<Button type='remove' onClick={ () => handleSubcategoryRemove( category.id, subCategory.id ) }><Minus className='small-svg' /></Button>
											</div>
										</SectionContainer>
									);
								} ) }
								<div className='add-button-container'>
									<Button type='add' onClick={ () => {
										setPopUpVisible( true );
										setCurrentCategory( category )
									} }><Plus className='small-svg' /></Button>
								</div>
							</div>



						</SectionContainer>
					);
				} else {
					return (
						<SectionContainer type='section-container' text='And' key={ category.id }>
							<div className='category-container'>
								<div className='category-name-container'>

									{ category.name }
									<Button type='remove' onClick={ () => handleCategoryRemove( category.id ) }><Minus className='small-svg' /></Button>
								</div>
							</div>
						</SectionContainer>
					);
				}
			} ) }
			<div className='add-button-container-main'>
				<div className='border-button'><Button type='add-big' onClick={ () => setPopUpVisible( true ) }><Plus className='big-svg' /></Button></div>

			</div>
			{
				popUpVisible && <PopUp
					handleCategoryAdd={ category => handleCategoryAdd( category ) }
					handlePopUpClose={ () => setPopUpVisible( false ) } />
			}
		</div >
	);
}
