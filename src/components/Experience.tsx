import React from 'react';
import { Container, Section } from '../styled/Utils';
import SectionHeader from './SectionHeader';
import positions from '../data/positions.json';
import Position from './Position';

const Experience = () => {
	return (
		<Section data-scroll-section>
			<Container>
				<SectionHeader>Experience</SectionHeader>
				<div>
					{positions.map((position, index) => (
						<Position key={index} {...position} />
					))}
				</div>
			</Container>
		</Section>
	);
};

export default Experience;
