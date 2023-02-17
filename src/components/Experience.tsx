import React from 'react';
import styled from 'styled-components';
import { Container } from '../styled/Container';
import SectionHeader from './SectionHeader';
import positions from '../data/positions.json';
import Position from './Position';

const Experience = () => {
	return (
		<ExperienceSection data-scroll-section>
			<Container>
				<SectionHeader>Experience</SectionHeader>
				<div>
					{positions.map((position, index) => (
						<Position key={index} {...position} />
					))}
				</div>
			</Container>
		</ExperienceSection>
	);
};

export default Experience;

const ExperienceSection = styled.section`
	padding-block: 25vh;
`;
