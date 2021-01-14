import React from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';
import CategoryElement from '../CategoryElement/CategoryElement';
import Button from '../Button/Button';
import './people.css';

export default function People() {
	return (
		<div className='people-container'>
			<div className='people'>
				People
			</div>
			<SectionContainer class='section-container' text='And'>
				<CategoryElement class='category-container'>Age 40+</CategoryElement>
			</SectionContainer>
			<SectionContainer class='section-container' text='And'>
				<CategoryElement class='category-container'>
					<div class='category-name-border'>Ethnicity</div>
					<SectionContainer class='sub-section-container' text='Or'>
						<CategoryElement class='subcategory-container'>Black</CategoryElement>
					</SectionContainer>
					<SectionContainer class='sub-section-container' text='Or'>
						<CategoryElement class='subcategory-container'>Hispanic</CategoryElement>
					</SectionContainer>
					<div className='add-button-container'>
						<Button type='add'>+</Button>
					</div>
				</CategoryElement>
			</SectionContainer>
			<SectionContainer class='section-container' text='And'>
				<CategoryElement class='category-container'>Income yearly 45k USD+</CategoryElement>
			</SectionContainer>
			<div className='add-button-container'>
				<Button type='add'>+</Button>
			</div>
		</div>
	);
}
