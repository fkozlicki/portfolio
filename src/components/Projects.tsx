import React from 'react';
import styled from 'styled-components';
import { Container, Section } from '../styled/Utils';
import SectionHeader from './SectionHeader';
import projects from '../data/projects.json';
import Project from './Project';

const Projects = () => {
	return (
		<Section data-scroll-section>
			<Container>
				<SectionHeader>Projects</SectionHeader>
				<ProjectsWrapper>
					{projects.map((project, index) => (
						<Project key={index} index={index} {...project} />
					))}
				</ProjectsWrapper>
			</Container>
		</Section>
	);
};

export default Projects;

const ProjectsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	row-gap: 15vw;
`;
