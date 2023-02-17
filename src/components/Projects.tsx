import React from 'react';
import styled from 'styled-components';
import { Container } from '../styled/Container';
import SectionHeader from './SectionHeader';
import projects from '../data/projects.json';
import Project from './Project';

const Projects = () => {
	return (
		<ProjectsSection data-scroll-section>
			<Container>
				<SectionHeader>Projects</SectionHeader>
				<ProjectsWrapper>
					{projects.map((project, index) => (
						<Project key={index} index={index} {...project} />
					))}
				</ProjectsWrapper>
			</Container>
		</ProjectsSection>
	);
};

export default Projects;

const ProjectsSection = styled.section`
	padding-block: 25vh;
`;

const ProjectsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	row-gap: 15vw;
`;
